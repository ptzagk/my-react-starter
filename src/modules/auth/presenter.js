import React from 'react';
import {
	Container,
	Row,
	Col,
	CardGroup,
	Card,
	CardBody,
	Button,
	Input,
	InputGroup,
	InputGroupAddon,
	Form,
} from 'reactstrap';

export default function LoginPresenter(props) {
	return (
		<div className="app flex-row align-items-center">
			<Container>
				<Row className="justify-content-center">
					<Col md="8">
						<CardGroup className="mb-4">
							<Card className="p-4">
								<CardBody>
									<Form onSubmit={props.onLogin}>
										<h1>Login</h1>
										<p className="text-muted">Sign In to your account</p>
										<InputGroup className="mb-3">
											<div className="input-group-prepend">
												<span className="input-group-text">
													<i className="icon-user" />
												</span>
											</div>
											<Input
												type="text"
												placeholder="Username"
												name="username"
												value={props.auth.username}
												onChange={props.onChangeInput}
												required
											/>
										</InputGroup>
										<InputGroup className="mb-4">
											<div className="input-group-prepend">
												<span className="input-group-text">
													<i className="icon-lock" />
												</span>
											</div>
											<Input
												type="password"
												placeholder="Password"
												name="password"
												value={props.auth.password}
												onChange={props.onChangeInput}
												required
											/>
										</InputGroup>
										<Row>
											<Col xs="6">
												<Button type="submit" color="primary" className="px-4">
													Login
												</Button>
											</Col>
											<Col xs="6" className="text-right">
												{/* <Button type="reset" color="link" className="px-0">
													Forgot password?
												</Button> */}
											</Col>
										</Row>
									</Form>
								</CardBody>
							</Card>
							{/* <Card className="text-white bg-primary py-5 d-md-down-none" style={{ width: 44 + '%' }}>
								<CardBody className="text-center">
									<div>
										<h2>Sign up</h2>
										<p>
											Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
											tempor incididunt ut labore et dolore magna aliqua.
										</p>
										<Button color="primary" className="mt-3" active>
											Register Now!
										</Button>
									</div>
								</CardBody>
							</Card> */}
						</CardGroup>
					</Col>
				</Row>
			</Container>
		</div>
	);
}
