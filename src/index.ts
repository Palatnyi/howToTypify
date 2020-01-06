import express, { Application, RequestHandler, Request, Response } from "express";


const app: Application = express();
const isDev: boolean = process.env.NODE_ENV === "development";
const port: number = process.env.PORT;

const alwaysRespondWithHelloWorld: RequestHandler = (req: Request, res: Response) => {
  if (isDev) { 
    req.user = {
      name: 'Andrew',
      surname: 'Palatnyi',
      age: 27
    };
  }
  res.send('hello world');
};

app.use(alwaysRespondWithHelloWorld)

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
})
