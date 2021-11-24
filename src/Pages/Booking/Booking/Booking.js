import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import axios from 'axios';
import { useForm } from "react-hook-form";


const Booking = () => {


    const { serviceId } = useParams();

    const [services, setServices] = useState([])

    const [resultdata, setResultData] = useState([])

    useEffect(() => {
        fetch('https://haunted-ghost-42061.herokuapp.com/travelplans')
            .then(res => res.json())
            .then(data => setServices(data));


    }, [])

    useEffect(() => {

        const result = services.find(data => data._id === serviceId)


        setResultData(result)
    }, [services])

    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
    const onSubmit = data => {

        //console.log(data);
        axios.post('https://haunted-ghost-42061.herokuapp.com/bookings', data)
            .then(res => {

                if (res.data.insertedId) {
                    alert("new Travel Plan added");
                    reset();
                }


            })
    }

    return (
        <div>
            <Container>
                <Row>
                    <Col>

                        <div className="servicedetail" style={{ textAlign: "center" }}>


                            <h1> Service Name : {resultdata?.name}</h1>
                            <h3> Service Price : $ {resultdata?.price}</h3>
                            <img src={resultdata?.picture} style={{ width: "800px" }} alt="" srcset="" />
                            <h5> Service Description :  {resultdata?.description}</h5>

                        </div>
                    </Col>
                    <Col>
                        <div >
                            <h2 className="mt-5 text-info bg-dark pt-5 pb-5" style={{ textAlign: 'center' }} > Book for a Plan</h2>

                            <form onSubmit={handleSubmit(onSubmit)} style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }} className="mt-5 mb-5">

                                <p> Your name </p>

                                <input {...register("name")} />

                                <p> Name of the plan you want to book </p>

                                <input {...register("description")} />
                                <p> </p>

                                <input className="btn bg-warning" type="submit" />
                            </form>
                        </div>
                    </Col>
                </Row>

            </Container>




        </div >
    );
};

export default Booking;