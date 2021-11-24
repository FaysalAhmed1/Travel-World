const express = require('express');

const app = express();
const cors = require('cors');

const port = process.env.PORT || 5000;
//var port = process.env.PORT || 8080;
const { MongoClient } = require('mongodb');
require('dotenv').config();
const ObjectId = require('mongodb').ObjectId;


//middleware    // App will error otherwise

app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.yutpx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

//console.log(uri);   checking purpose

async function run() {
    try {
        await client.connect();
        //    console.log("connection to db"); //      checking if its connected 
        const database = client.db("traveldatabase");
        const planCollection = database.collection("travelplans");

        // Booking service Database
        const bookCollection = database.collection("bookings");

        //       Getting Data     //

        app.get('/travelplans', async (req, res) => {

            const cursor = planCollection.find({});
            const travelplan = await cursor.toArray();
            res.send(travelplan);
        })


        //       Getting Data  for Bookings   //

        app.get('/bookings', async (req, res) => {

            const cursor = bookCollection.find({});
            const booking = await cursor.toArray();
            res.send(booking);

        })



        // Fetching 1 Data

        app.get('/travelplans/:id', async (req, res) => {

            const id = req.params.id;

            console.log("hitting 1 data");
            const query = { _id: ObjectId(id) };
            const travelplan = await planCollection.findOne(query);

            res.send(travelplan);
        })


        //      Adding Data      //


        app.post('/travelplans', async (req, res) => {

            const travelplan = req.body;


            console.log('hit the post api ', travelplan);
            const result = await planCollection.insertOne(travelplan);
            //res.send('post hitted')
            console.log(result);
            res.json(result);
        });
        //      Adding Data   for booking   //


        app.post('/bookings', async (req, res) => {

            const booking = req.body;


            console.log('hit the post api ', booking);
            const result = await bookCollection.insertOne(booking);
            //res.send('booking post hitted')
            console.log(result);
            res.json(result);
        });

        //        Deleting Data         //

        app.delete('/travelplans/:id', async (req, res) => {

            const id = req.params.id;
            const query = { _id: ObjectId(id) };

            const result = await planCollection.deleteOne(query);
            // console.log('deleting user with id', result);
            res.json(result);

        })

        //        Deleting Booking Data         //

        app.delete('/bookings/:id', async (req, res) => {

            const id = req.params.id;
            const query = { _id: ObjectId(id) };

            const result = await bookCollection.deleteOne(query);
            // console.log('deleting user with id', result);
            res.json(result);

        })

    }
    finally {
        // keep this space empty for modification of connection 
    }

}
run().catch(console.dir);

app.get('/', (req, res) => {


    res.send("running my app on browser");

});

app.get('/hello', (req, res) => {
    res.send("Hello check heroku");
})

app.listen(port, () => {

    console.log("running on port", port);
})