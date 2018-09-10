import React, {Component} from 'react';
import { Container, Row, Col, Button, Form, FormGroup, CustomInput ,Label, Card, CardText } from 'reactstrap';
import styles from './content.css';
import categoryStyles from '../category/category.css';
import { Link } from 'react-router-dom'

class Content extends Component {

	render() {


		return (
			<Container>
				<Row>
					<Col>
						<div className="text-center title m-t-50">
							{this.props.match.params.content}
						</div>
					</Col>
				</Row>
				<Row className="justify-content-center">
					<Col md="5">
						<Card body outline color="secondary" className="m-t-30">
								<Form>
									<FormGroup>
										<Container>
											<Row>
												<Col xs="6"><CustomInput type="checkbox" id="exampleCustomCheckbox" label="Apply" /></Col>
												<Col xs="6"><CustomInput type="checkbox" id="exampleCustomCheckbox2" label="Discussion" /></Col>
											</Row>
											<Row>
												<Col xs="6"><CustomInput type="checkbox" id="exampleCustomCheckbox3" label="Vote" /></Col>
											</Row>
										</Container>
									</FormGroup>
									<div className="text-right">
										<Button>Search</Button>
									</div>
								</Form>
						</Card>
					</Col>
				</Row>
				<Row>
					<Col>
						<div className="m-t-30" >
							<Card body inverse color="success" className="m-t-30">
								<CardText>sdfsdf</CardText>
								<CardText>nknknkn</CardText>
							</Card>

							<Card body inverse color="warning" className="m-t-30">
								<CardText>sdfsdf</CardText>
								<CardText>nknknkn</CardText>
							</Card>

							<Card body inverse color="info" className="m-t-30">
								<CardText>sdfsdf</CardText>
								<CardText>nknknkn</CardText>
							</Card>
						</div>
					</Col>
				</Row>
			</Container>
		)
	}
}

export default Content;