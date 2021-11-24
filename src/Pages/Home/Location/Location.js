import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Location = () => {
    return (
        <div className="bg-info">

            <h1 className="mt-5 mb-5" style={{ textAlign: "center" }}> The top 7 Travel Locations in the World </h1>

            <Container className="rounded pt-5 mb-5" style={{ background: "#27a0b3" }} >

                <Row>
                    <Col > <img style={{ width: "350px", height: "250px" }} src="https://s1.travix.com/blog/asia-vietnam-halong-bay-boats-blue-water-sunny.png" alt="" srcset="" />
                        <h2 style={{ textAlign: "center" }}>1. Ha Long Bay - Vietnam</h2>
                        <p> The extraordinary Ha Long Bay is located in the far north of Vietnam, near the border to China. You may know this impressive landscape from the famous James Bond movie "Tomorrow never dies." We recommend: rent a boat and swim in the turquoise blue sea, an indescribable experience! </p>
                    </Col>
                    <Col><img style={{ width: "350px", height: "250px" }} src="https://s1.travix.com/blog/It/Italy-Rome-Colloseo-2-small.jpg" alt="" srcset="" />
                        <h2 style={{ textAlign: "center" }}>2. The Colosseum - Italy</h2>
                        <p>You can visit countless attractions in the Italian capital, Rome, but do not miss the opportunity to visit the unique Colosseum. The huge arena hosted the gladiatorial battles of the ruling Emperor. An exciting experience!</p>
                    </Col >
                    <Col><img style={{ width: "350px", height: "250px" }} src="https://s1.travix.com/blog/south-america-amazon-forest-jungle-from-above.png" alt="" srcset="" />
                        <h2 style={{ textAlign: "center" }}>3. The Amazon rainforest - South America</h2>
                        <p>Deep green and full of life: these are the key facts of the Amazon rainforest. There is probably no other jungle in the world that is so impressive. For good reason, the Amazon is also called "the green lung of the earth". Wander through the jungle to the most extraordinary places.</p>
                    </Col>
                </Row>

                <Row>
                    <Col><img style={{ width: "350px", height: "250px" }} src="https://s1.travix.com/blog/africa-egypt-gizeh-piramids-sunny-day.png" alt="" srcset="" />
                        <h2 style={{ textAlign: "center" }}>4. The pyramids of Giza - Egypt</h2>
                        <p>If there is a historic place in the world to visit, then it is Egypt! Such as the unparalleled history of the pharaohs, the huge pyramids in the desert and the towering capital of Cairo. We recommend that you do not miss all this during your holiday in Egypt. The famous Pyramids of Giza, which consist of a total of 6 pieces, are among the oldest buildings in the world. You will be enchanted!</p>
                    </Col>
                    <Col><img style={{ width: "350px", height: "250px" }} src="https://s1.travix.com/blog/asia-india-agra-taj-mahal-front-view-no-people.png" alt="" srcset="" />
                        <h2 style={{ textAlign: "center" }}>5. Taj Mahal - India</h2>
                        <p>The Taj Mahal is probably the most glamorous tomb in the world and the most visited attraction in India. We also know why, because this place is more than impressive! The symmetrical white marble building stands out from the azure blue sky. If you are in India, a visit to the city of Agra is a must.</p>
                    </Col>
                    <Col><img style={{ width: "350px", height: "250px" }} src="https://s1.travix.com/blog/asia-cambodia-angkor-wat-temple-nature.png" alt="" srcset="" />
                        <h2 style={{ textAlign: "center" }}>6. Angkor Wat - Cambodia</h2>
                        <p>Do not leave the wonderful country of Cambodia without visiting the "City of Temples", a large archaeological complex made up of numerous ancient temples and other monuments. Probably the most famous temple is Angkor Wat, visit it at sunrise and shoot unparalleled pictures for your home!</p>
                    </Col>
                </Row>

                <Row>
                    <Col><img style={{ width: "350px", height: "250px" }} src="https://s1.travix.com/blog/north-america-las-vegas-grand-canyon-river.jpg" alt="" srcset="" />
                        <h2 style={{ textAlign: "center" }}>7. Grand Canyon - USA</h2>
                        <p>The Grand Canyon is an overwhelming canyon 277 miles long, in some places no less than 18 miles wide and almost 1.5 miles deep. You can discover the wonders of nature in a variety of ways, including a boat ride across the Colorado River and the surrounding area.</p>
                    </Col>
                    <Col> </Col>
                    <Col>  </Col>
                </Row>

            </Container>



        </div>
    );
};

export default Location;