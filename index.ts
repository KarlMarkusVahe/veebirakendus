import express, { Express, Request, Response } from "express";
import toode from "./controllers/toode";
import toodelist from "./controllers/toodelist";

const app: Express = express();

app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server');
});

app.use('/', toode)
app.use('/', toodelist)

app.listen(3000,() => {
    console.log(`[server]: Server is running at http://localhost:3000`);
});