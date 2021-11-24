import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

const Review = () => {
    return (
        <div className="bg-secondary pb-5">
            <h2 className="mt-5 text-info bg-dark pt-5 pb-5" style={{ textAlign: "center" }}> Our Traveller Reviews </h2>

            < Container >
                <Row className="mt-5" style={{ textAlign: "center" }}>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/35af6a41332353.57a1ce913e889.jpg" />
                            <Card.Body>
                                <Card.Title> Mr John </Card.Title>
                                <Card.Text>
                                    I loved their travelling packages. Safe and secure Travel.


                                </Card.Text>
                                <Card.Title>  <i style={{ color: "yellow" }} class="fas fa-star"></i>   <i style={{ color: "yellow" }} class="fas fa-star"></i>  <i style={{ color: "yellow" }} class="fas fa-star"></i>  <i style={{ color: "yellow" }} class="fas fa-star"></i>  <i style={{ color: "yellow" }} class="fas fa-star"></i></Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://live.staticflickr.com/5252/5403292396_0804de9bcf_b.jpg" />
                            <Card.Body>
                                <Card.Title> Mrs John </Card.Title>
                                <Card.Text>
                                    Seems like the have a packages for all type of travellers. Awesome.


                                </Card.Text>
                                <Card.Title>   <i style={{ color: "yellow" }} class="fas fa-star"></i>  <i style={{ color: "yellow" }} class="fas fa-star"></i>  <i style={{ color: "yellow" }} class="fas fa-star"></i>  <i style={{ color: "yellow" }} class="fas fa-star"></i></Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://mediakix.com/wp-content/uploads/2017/07/king-of-random-youtube-influencer-interview.jpg" />
                            <Card.Body>
                                <Card.Title> Mr Ben </Card.Title>
                                <Card.Text>
                                    Most affordable packages ever. Safe and secure Travel.


                                </Card.Text>
                                <Card.Title>  <i style={{ color: "yellow" }} class="fas fa-star"></i>   <i style={{ color: "yellow" }} class="fas fa-star"></i>  <i style={{ color: "yellow" }} class="fas fa-star"></i>  <i style={{ color: "yellow" }} class="fas fa-star"></i>  <i style={{ color: "yellow" }} class="fas fa-star"></i></Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container >
        </div >
    );
};

export default Review;