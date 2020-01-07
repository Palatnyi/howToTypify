import express, { Application, RequestHandler, Request, Response } from "express";

const app: Application = express();

const alwaysRespondWithHelloWorld: RequestHandler = (req: Request, res: Response) => {
    req.user = {
      name: 'Andrew',
      surname: 'Palatnyi',
      age: 27
    };
  res.send('hello world');
};

app.use(alwaysRespondWithHelloWorld)

app.listen(3000, () => {
  console.log(`app is listening on port ${3000}`);
})
