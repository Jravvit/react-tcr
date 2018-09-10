import React, {Component} from 'react';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import styles from './category.css';
import { Link } from 'react-router-dom'

class Category extends Component {

	render() {
		var count = 20;

		var categoryList = [];

		for(var i =0;i<count;i++) {
			categoryList.push(<li>
				<Link to="/category/Javascript">
					<span className="category-count">1234</span>
					<span className="category-name">Javascript</span>
				</Link>
				</li>)
		}

		return (
			<Container>
				<Row>
					<Col>
						<div className="text-center title m-t-50">
							AWESOME
						</div>
					</Col>
				</Row>
				<Row className="justify-content-center">
					<Col md="5">
						<div className="category-search m-t-30">
							<Form className="mx-auto" inline>
								<FormGroup>
									<Input type="text" name="search"/>
								</FormGroup>
								<Button>Search</Button>
							</Form>
						</div>
					</Col>
				</Row>
				<Row>
					<Col>
						<div className="text-center m-t-30 categoty-list" >
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

export default Category;