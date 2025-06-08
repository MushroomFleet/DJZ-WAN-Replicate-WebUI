// server.js
import express from 'express';
import Replicate from 'replicate';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Initialize Replicate client
const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
});

// Middleware
app.use(express.json());
app.use(express.static('public'));

// Serve the HTML interface
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// API endpoint to start training
app.post('/api/train', async (req, res) => {
  try {
    const { destination, input } = req.body;
    
    // Validate required fields
    if (!destination || !input.input_video_zip) {
      return res.status(400).json({ 
        error: 'Missing required fields: destination and input_video_zip' 
      });
    }

    console.log('Starting training with parameters:', {
      destination,
      input
    });

    // Start training
    const training = await replicate.trainings.create(
      "zsxkib",
      "wan-lora-trainer",
      "9372a2a2451568214313fdea02a04b62c1378176525ebb1d2cd46974fe87bcf1",
      {
        destination: destination,
        input: input
      }
    );

    console.log('Training started:', training);

    res.json({
      success: true,
      id: training.id,
      status: training.status,
      urls: training.urls,
      message: 'Training started successfully'
    });

  } catch (error) {
    console.error('Training error:', error);
    res.status(500).json({ 
      error: error.message || 'Failed to start training' 
    });
  }
});

// API endpoint to check training status
app.get('/api/training/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const training = await replicate.trainings.get(id);
    
    res.json({
      id: training.id,
      status: training.status,
      created_at: training.created_at,
      completed_at: training.completed_at,
      urls: training.urls,
      error: training.error,
      logs: training.logs
    });
  } catch (error) {
    console.error('Status check error:', error);
    res.status(500).json({ 
      error: error.message || 'Failed to get training status' 
    });
  }
});

// API endpoint to cancel training
app.post('/api/training/:id/cancel', async (req, res) => {
  try {
    const { id } = req.params;
    const training = await replicate.trainings.cancel(id);
    
    res.json({
      success: true,
      id: training.id,
      status: training.status,
      message: 'Training cancelled successfully'
    });
  } catch (error) {
    console.error('Cancel error:', error);
    res.status(500).json({ 
      error: error.message || 'Failed to cancel training' 
    });
  }
});

// Error handling middleware
app.use((error, req, res, next) => {
  console.error('Server error:', error);
  res.status(500).json({ 
    error: 'Internal server error' 
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 WAN LoRA Trainer server running on http://localhost:${PORT}`);
  console.log(`📝 Make sure to set your REPLICATE_API_TOKEN environment variable`);
});

export default app;