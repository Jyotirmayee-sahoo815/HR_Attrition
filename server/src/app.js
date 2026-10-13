import express from 'express';
import cors from 'cors';
import { config } from './config.js';

// The app is built in a factory and separated from `listen()` so tests can
// import it (and hit it with supertest) without opening a real port.
export function createApp() {
  const app = express();

  app.use(cors({ origin: config.clientOrigin }));
  app.use(express.json());

  app.get('/api/health', (_req, res) => {
    res.json({ status: 'ok', uptimeSeconds: Math.round(process.uptime()) });
  });

  // Routes are added in Stage 2. A JSON 404 keeps API errors consistent.
  app.use('/api', (_req, res) => {
    res.status(404).json({ error: 'Not found' });
  });

  return app;
}
