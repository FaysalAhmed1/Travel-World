import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {


    const { _id, name, price, description, picture, namew } = service;


    return (
        <div className="service pt-3 pb-3 ">

            <img src={picture} alt="" srcset="" style={{ width: "500px" }} />
            <h3>{name}</h3>
            <p>Tour Type : {namew}</p>


            <Link to={`/booking/${_id}`}>
                <button className="btn btn-info " > Get this Package </button>

            </Link>



        </div>
    );
};

export default Service;