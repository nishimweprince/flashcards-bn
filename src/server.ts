import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

// CONFIGURE DOTENV
dotenv.config();

// LOAD ENVIRONMENT VARIABLES
const { PORT } = process.env;

// CREATE EXPRESS APP
const app: Express = express();

// START SERVER
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});