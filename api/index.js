import express, { response } from "express";

const app = express();

app.listen(3000, () => {
    console.log('server running at 3000!');
})