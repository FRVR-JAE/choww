import express, {Request, Response} from "express"
import cors from "cors";
import "dotenv/config"
import mongoose from "mongoose"
import myUserRoute from './routes/MyUserRoute'

mongoose.connect(process.env.MONGODB as string).then(() => console.log("e don connect"))


const app = express();
app.use(express.json());
app.use(cors());


//  /api/my/user
app.use("/api/my/user", myUserRoute);

app.get("/test", async (req: Request, res: Response) => {
    res.json({message: "Hello"});
});

app.listen(3500, () => {
    console.log("Server started on localhost:3500")
})