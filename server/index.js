import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { connectDB } from './config/db.js';
import productRoutes from './routes/productRoutes.js';
import orderRoutes from './routes/orderRoutes.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect Database
connectDB();

// API Routes
app.get('/api/health', (req, res) => {
  res.json({
    status: 'online',
    app: 'Kuveras Fine Jewellery API',
    timestamp: new Date().toISOString()
  });
});

app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);

// Serve static frontend assets in production (Hostinger deployment support)
const distPath = path.join(__dirname, '../dist');
app.use(express.static(distPath));

app.get('*', (req, res) => {
  const indexPath = path.join(distPath, 'index.html');
  res.sendFile(indexPath, (err) => {
    if (err) {
      res.status(200).send('Kuveras Fine Jewellery MERN Backend is active.');
    }
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Kuveras MERN Server running on port ${PORT}`);
});
