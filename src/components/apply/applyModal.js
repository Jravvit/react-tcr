import React, {Component} from "react";
import {Button, Modal, ModalHeader, 
	ModalBody, ModalFooter, Form, Label,
	FormGroup, Input, FormText, Container,
	Row, Col} from 'reactstrap';

class ApplyModal extends Component {
	
	constructor(props) {
	  super(props);
	  this.state = {
	  	title: '',
	  	url: '',
	  	reason: '',
	  }
	}

	handleChange = (e) => { 
		this.setState({ [e.target.name] : e.target.value})
	}

	onSubmit = (e) => {
		e.preventDefault();

		const { title, url, reason } = this.state;

		console.log("서버 통신 및 contract 실행");
	}

	render() {
		return (
			<div>
				<Modal isOpen={this.props.modal} toggle={this.props.toggle} className={this.props.className}>
					<ModalBody>
						<Form onSubmit={this.onSubmit}>
							<FormGroup>
								<Label for="title">Title</Label>
								<Input type="text" name="title" id="title" value={this.state.title} onChange={this.handleChange} placeholder="title"/>
							</FormGroup>
							<FormGroup>
								<Label for="url">Url</Label>
								<Input type="text" name="url" id="url" value={this.state.url} onChange={this.handleChange} placeholder="url" />
							</FormGroup>
							<FormGroup>
								<Label for="Reason">Reason</Label>
								<Input type="textarea" name="reason" value={this.state.reason} onChange={this.handleChange} id="reason" placeholder="input your reason"/>
							</FormGroup>
							<Button className="m-auto">Submit</Button>
						</Form>
					</ModalBody>
				</Modal>
			</div>
		)
	}
}

export default ApplyModal;