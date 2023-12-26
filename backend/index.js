import connectToMongo from "./db.js";
import express from "express";
import cors from "cors";
import auth from "./routes/auth.js";
import student from "./routes/student.js";


// Connected to MongoDB
connectToMongo();



const app = express()
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());


// Default endpoint for the backend-app
app.get('/', (req, res) => {
    res.send('This is EventGateKeeper - Backend!');
})

// Available routes
app.use('/api/auth', auth);
app.use('/api/student', student);

app.listen(port, () => {
    console.log(`Server is live and listening on port http://localhost:${port}`)
})