const express = require ('express');
const router = express.Router();
const User = require('../models/User');
const { MongoClient } = require("mongodb");

const bodyParser = require('body-parser');
router.use(bodyParser.json());

const url = process.env.DB_CONNECTION;
const client = new MongoClient(url);
 
 // The database to use


router.get('/',(req,res)=>{
    res.send('User API');
});

router.post('/',(req,res)=>{
    console.log(req.body)
    const dbName = "API_GRAPHQL";
                      
    async function run() {
       try {
            await client.connect();
            console.log("Connected correctly to server");
            const db = client.db(dbName);
            // Use the collection "people"
            const col = db.collection("users");
            // Construct a document                                                                                                                                                              
            let personDocument = {
                "first_name": { "first": req.body.first_name, "last_name": req.body.last_name },
                "birthday": req.body.birthday, // June 23, 1912                                                                                                                                                                                                                                                                  
            }
            // Insert a single document, wait for promise so we can read it back
            const p = await col.insertOne(personDocument).then(data=> {res.json(data.ops);}).catch(err=>{res.json(err);});
            // Find one document
            const myDoc = await col.findOne();
            // Print to the console
            console.log(myDoc);
           } catch (err) {
            console.log(err.stack);
        }
        finally {
           await client.close();
       }
    }
    run().catch(console.dir);
});


module.exports = router;    