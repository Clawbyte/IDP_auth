import express, { Request, Response } from 'express'
import axios from 'axios'
import bcrypt from 'bcryptjs'

const app = express()
const port = 3001
const ioUrl = process.env.IO_URL || "localhost:3000"

app.use(express.json());

app.listen(port, async () => {
    console.log(`Microservice running at http://localhost:${port}`)
})


// Register route
app.post('/register', async (req: Request, res: Response) => {
    try {
        const { username, password } = req.body;
        // Check if the username is already taken
        const existingUser = await axios.get<{ exists: boolean }>(ioUrl + "/user/" + username);
        if (existingUser.data.exists) {
            res.status(400).json("Username taken")
            return
        }

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create new user
        const userCreated = await axios.post(ioUrl + "/user", { username, password: hashedPassword });
        res.status(userCreated.status).json(userCreated.data);
    } catch (err) {
        console.log(err)
        res.status(400).json({message: "Error"});
    }
})

// Login route