import express, {Request, Response} from "express"
import cors from "cors";
import "dotenv/config"
import mongoose from "mongoose"


mongoose.connect(process.env.MONGODB as string).then(() => console.log("e don connect"))


const app = express();
app.use(express.json());
app.use(cors());

app.get("/test", async (req: Request, res: Response) => {
    res.json({message: "Hello"});
});

app.listen(3500, () => {
    console.log("Server started on localhost:3500")
})