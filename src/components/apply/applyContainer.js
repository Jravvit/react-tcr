import React, {Component} from 'react';
import { Container, Row, Col, Button} from 'reactstrap';
import styles from './apply.css';
import { Link } from 'react-router-dom';
import ApplyModal from "./applyModal";

class Apply extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	modal: false
	  };

	  this.toggle = this.toggle.bind(this)
	}

	toggle() {
		this.setState({
			modal: !this.state.modal
		})
	}

	render() {
		var count = 20;

		var categoryList = [];

		for(var i =0;i<count;i++) {
			categoryList.push(
				<li>
					<Link to="/category/Javascript">
						<div className="apply-title">The JavaScript that you should know - <span className="apply-discription">Article about concepts of JavaScript Functional.</span></div>
					</Link>
				</li>)
		}

		return (
			<Container>
				<Row>
					<Col>
						<div className="text-center title m-t-50">
							APPLY
						</div>
					</Col>
				</Row>
				<Row className="justify-content-center">
					<Col md="5">
						<div className="apply-btn m-t-30 text-center">
							<Button color="danger" onClick={this.toggle}>APPLY</Button>
							<ApplyModal modal={this.state.modal} toggle={this.toggle}/>
						</div>
					</Col>
				</Row>
				<Row>
					<Col>
						<div className="text-left m-t-30 apply-list" >
							<ul>
								{categoryList}
							</ul>
						</div>
					</Col>
				</Row>
			</Container>
		)
	}
}

export default Apply;