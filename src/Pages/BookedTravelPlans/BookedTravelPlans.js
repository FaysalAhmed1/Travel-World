import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';

const BookedTravelPlans = () => {

    const [bookings, setbBokings] = useState([])
    useEffect(() => {
        fetch('https://haunted-ghost-42061.herokuapp.com/bookings')
            .then(res => res.json())
            .then(data => setbBokings(data));
    }, [])



    const handleDelete = id => {

        const proceed = window.confirm("Are you Sure to delete the Plan ?");

        if (proceed) {
            const url = `https://haunted-ghost-42061.herokuapp.com/bookings/${id}`;
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data);
                    if (data.deletedCount) {

                        alert(" Data Deleted ")
                        const remaining = bookings.filter(booking => booking._id !== id)
                        setbBokings(remaining);
                    }
                })
        }

    }

    return (
        <div style={{ textAlign: "center" }}>
            <p></p>
            <h2 style={{ textAlign: "center" }}>Delete Travel Plans by Name : </h2>
            {

                bookings.map(booking => <div key={booking._id}>


                    <Card className="bg-secondary text-white" >

                        <Card.Body>


                            <Card.Text>
                                <h2> Booked by : {booking.name} </h2>
                                <h2> Booked Plan: {booking.description} </h2>
                            </Card.Text>

                        </Card.Body>
                    </Card>



                    <button className="btn btn-danger mt-5 mb-5" onClick={() => handleDelete(booking._id)}> Delete </button>
                </div>)
            }


        </div>
    );
};

export default BookedTravelPlans;