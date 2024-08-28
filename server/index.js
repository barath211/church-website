import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import { AccountRouter } from './View/AccountRoute.js';
import { FormRoutes } from './View/FormRoute.js';
import path from 'path';
import https from 'https';
import http from 'http';
import fs from 'fs';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: '30mb' }));
app.use(express.urlencoded({ extended: true }));

app.use('/User', AccountRouter);
app.use('/FormRoutes', FormRoutes);

const PORT = process.env.PORT || 3000;
const MONGO_URL = process.env.MONGO_URL;

const __dirname = path.resolve();

// Serve static files from the 'build' directory
app.use(express.static(path.join(__dirname, 'client', 'build')));

// Serve the 'index.html' file for all routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});

const startServer = async () => {
  try {
    await mongoose.connect(MONGO_URL);
    console.log('Connected to MongoDB');

    // Create HTTPS server
    const httpsOptions = {
      key: fs.readFileSync(
        '/etc/letsencrypt/live/bethelicrmcoimbatore.in/privkey.pem',
      ),
      cert: fs.readFileSync(
        '/etc/letsencrypt/live/bethelicrmcoimbatore.in/fullchain.pem',
      ),
    };

    https.createServer(httpsOptions, app).listen(443, () => {
      console.log('HTTPS server running on https://bethelicrmcoimbatore.in');
    });

    // Create HTTP server that redirects to HTTPS
    http
      .createServer((req, res) => {
        res.writeHead(301, {
          Location: 'https://' + req.headers['host'] + req.url,
        });
        res.end();
      })
      .listen(PORT, () => {
        console.log(
          `HTTP server running on port ${PORT} (redirecting to HTTPS)`,
        );
      });
  } catch (err) {
    console.error('Error starting server:', err.message);
  }
};

startServer();
