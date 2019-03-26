import express from 'express';
import todolist from './db/db';
import bodyParser from 'body-parser';
import router from './routes/index.js';

// Set up the express app
const app = express();

// Parse incoming requests data
app.use(bodyParser.json());
// extended is false, we cann't post nested object
app.use(bodyParser.urlencoded({ extended: false }));

// router
app.use(router);

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
});