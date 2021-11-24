import React from 'react';
import { Accordion, Col, Container, Row } from 'react-bootstrap';

import faqim from '../../../images/faq.jpg'

const faq = () => {
    return (
        <div className="bg-secondary pb-5" >
            <h2 className="mt-5 text-info bg-dark pt-5 pb-5" style={{ textAlign: "center" }}> Frequently Asked question </h2>
            <Container >
                <Row>
                    <Col>
                        <img
                            style={{ width: '100%', height: '100%' }}
                            src={faqim}
                        />

                    </Col>
                    <Col>
                        <div className="">

                            <Accordion defaultActiveKey="0">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header> Where do we oprate from ? </Accordion.Header>
                                    <Accordion.Body>
                                        Our Main Branch is located in Dhaka. However we have branches all abound the country.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header> Where can I see the Trvel Plans ?</Accordion.Header>
                                    <Accordion.Body>
                                        We Update the Travel plans every week, If you are a member you get notifications.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header> What payment method do you accept ?</Accordion.Header>
                                    <Accordion.Body>
                                        We accept all payment in cluding cash to credit cards, debit cards.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3">
                                    <Accordion.Header> Whats your security measurement ?</Accordion.Header>
                                    <Accordion.Body>
                                        We provide experienced guide with all plans and Medical personal.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>

                        </div>

                    </Col>
                </Row>
            </Container>


        </div >
    );
};

export default faq;