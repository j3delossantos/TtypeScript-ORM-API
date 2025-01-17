import 'reflect-metadata';
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import  userRoutes  from "./routes/user.routes";
import {  createConnection } from "typeorm";
import propertyRoutes from './routes/property.routes';

const app = express();
createConnection();

//Midelwares

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

//Routes
app.use(userRoutes);
app.use(propertyRoutes);

const port ='4000'
app.listen(port);
console.log('Server on port: ' + port);
