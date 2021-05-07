import React from 'react';
import { Button, Card, Row, Col, Container, Navbar, Nav, Jumbotron } from 'react-bootstrap';

const App = () => {
    return (
        <div>
            <Navbar className="justify-content-between" bg="light" expand="lg">
                <Navbar.Brand href="/">
                    iHateReading
                </Navbar.Brand>
                <div style={{ display: 'flex' }}>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="https://www.ihatereading.in" target="_blank">Website</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Navbar>
            <Container style={{ padding: 20, marginTop: 20 }}>
                <br />
                <h3 style={{ textAlign: 'center'}}>This webpage is developed using React bootstrap and Next JS</h3>
                <br />
                <Row>
                    <Col md={4}>
                        <Card style={{ padding: 20 }}>
                                <Card.Body>
                                    <Card.Img 
                                        variant="top" src="./creativity.jpg"
                                    />
                                    <br />
                                    <Card.Title>Logs Panel</Card.Title>
                                    <Card.Text>Our daily logs to learn while reading</Card.Text>
                                    <Card.Link href="https://www.ihatereading.in/logs" target="_blank">
                                        <Button variant="warning">
                                            Read Logs
                                        </Button>
                                    </Card.Link>
                                </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card style={{ padding: 20 }}>
                            <Card.Body>
                                <Card.Img 
                                    variant="top" src="./logs.jpg"
                                />
                                <br />
                                <br />
                                <Card.Title>Creatives Panel</Card.Title>
                                <Card.Text>Our daily creative to get inspite while watching</Card.Text>
                                <Card.Link href="https://www.ihatereading.in/creativity" target="_blank">
                                    <Button variant="primary">
                                        View Creatives
                                    </Button>
                                </Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card style={{ padding: 20 }}>
                            <Card.Body>
                                <Card.Img 
                                    variant="top" src="./projects.jpg"
                                />
                                 <br />
                                <Card.Title>Projects Section</Card.Title>
                                <Card.Text>Our live projects for the world-wide users</Card.Text>
                                <Card.Link href="https://www.ihatereading.in/projects" target="_blank">
                                    <Button variant="success">
                                        Show Projects
                                    </Button>
                                </Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <br />
            <footer style={{ textAlign: 'center', backgroundColor: 'rgb(240, 240, 240)', padding: 20 }}>
                Develoepd by 
                <a href="https://twitter.com/treyvijay" target="_blank" style={{ marginLeft: 4 }}>
                    Shrey Vijayvargiya
                </a>
            </footer>
        </div>
    )
};
export default App;
