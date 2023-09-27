import express from 'express';
import routes from './routes';
import AlarmService from './services/AlarmService';
import cors from 'cors';
import bodyParser from 'body-parser';
import 'dotenv/config';

const app = express();
const port = process.env.PORT ?? 3000;
const alarmService = new AlarmService();
const allowedOrigins = ['http://localhost:5173'];
const options: cors.CorsOptions = {
  origin: allowedOrigins
};

app.use(cors(options));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ 
  extended: true
})); 

app.use(routes);

app.listen(port);
