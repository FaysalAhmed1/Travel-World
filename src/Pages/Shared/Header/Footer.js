import React from 'react';
import { Card } from 'react-bootstrap';

const Footer = () => {
    return (
        <div>


            <Card className="text-center text-white bg-dark">
                <Card.Header> Our Operation Started from 2010 </Card.Header>
                <Card.Body>
                    <Card.Title> Our motto is to provide secure Travel Environment </Card.Title>
                    <Card.Text>
                        New travel plans every week with customizable options.
                    </Card.Text>
                    <button className="btn btn-warning" > Email Us for Queries </button>
                </Card.Body>
                <Card.Footer className="text-muted"> Copyright &copy; Travel World <i class="fas fa-plane"></i> </Card.Footer>
            </Card>
        </div>
    );
};

export default Footer;