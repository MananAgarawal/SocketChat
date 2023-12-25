import express from 'express'
import http from 'http';
import BodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';
const port = process.env.port || 8080;

const app = express();

app.use(cors({
    credentials : true
}))

app.use(compression());
app.use(cookieParser());
app.use(BodyParser.json());

const server = http.createServer(app);

server.listen(port, () => {
    console.log(`server is listening on http://localhost:${port}`)
})

