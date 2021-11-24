import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';

const Manageplans = () => {

    const [travelplans, setTravelplans] = useState([])
    useEffect(() => {

        fetch('https://haunted-ghost-42061.herokuapp.com/travelplans')
            .then(res => res.json())
            .then(data => setTravelplans(data));

    }, []);

    const handleDelete = id => {

        const proceed = window.confirm("Are you Sure to delete the Plan ?");

        if (proceed) {
            const url = `https://haunted-ghost-42061.herokuapp.com/travelplans/${id}`;
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data);
                    if (data.deletedCount) {

                        alert(" Plan was Deleted ")
                        const remaining = travelplans.filter(travelplan => travelplan._id !== id)
                        setTravelplans(remaining);
                    }
                })
        }

    }
    return (
        <div className="w-100" style={{ textAlign: "center" }}>
            <h2 style={{ textAlign: "center" }}>Delete Plans by Selecting Delete </h2>
            {

                travelplans.map(travelplan => <div key={travelplan._id}>

                    <Card className="bg-secondary text-white" >

                        <Card.Body>
                            <Card.Img className="w-25" variant="top" src={travelplan.picture} />
                            <Card.Title> <h2>{travelplan.name}</h2></Card.Title>
                            <Card.Text>
                                <p>{travelplan.description} </p>
                            </Card.Text>

                        </Card.Body>
                    </Card>

                    {/* Commenting out so random users doesnt modify the data*/}

                    {/*

                    <button className="btn btn-danger mt-5 mb-5"  onClick={() => handleDelete(travelplan._id)}> Delete </button>*/}
                    <button className="btn btn-danger mt-5 mb-5"> Delete </button>
                </div>)
            }
        </div>
    );
};

export default Manageplans;