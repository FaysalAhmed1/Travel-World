import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
const Addplans = () => {

    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
    const onSubmit = data => {

        //console.log(data);
        axios.post('https://haunted-ghost-42061.herokuapp.com/travelplans', data)
            .then(res => {

                if (res.data.insertedId) {
                    alert("new Travel Plan added");
                    reset();
                }


            })
    }
    return (
        <div >
            <h2 style={{ textAlign: 'center' }} >Add a New Travel Plan Plan</h2>

            <form onSubmit={handleSubmit(onSubmit)} style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }} className="mt-5 mb-5">
                <p> Source of the Picture :</p>
                <input {...register("picture")} />
                <p>Name Of the Plan :</p>
                <input {...register("name")} />
                <p>Details/description of travel :</p>
                <input {...register("description")} />
                <p>Price for the tour : </p>
                <input type="number" {...register("price")} />
                <p></p>


                <input className="btn bg-warning" type="submit" />
            </form>
        </div>
    );
};

export default Addplans;