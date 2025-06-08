// server.js
import 'dotenv/config'; // Load environment variables from .env file
import express from 'express';
import cors from 'cors';
import Replicate from 'replicate';
import fs from 'node:fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Check if API token is loaded
if (!process.env.REPLICATE_API_TOKEN) {
  console.error('❌ REPLICATE_API_TOKEN not found in environment variables');
  console.error('Please check that your .env file exists and contains:');
  console.error('REPLICATE_API_TOKEN=your_token_here');
  process.exit(1);
}

console.log('✅ REPLICATE_API_TOKEN loaded successfully');

// Initialize Replicate
const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
});

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public')); // Serve your HTML file from public folder

// API endpoint to generate video
app.post('/api/generate-video', async (req, res) => {
  try {
    const {
      model_path = "mushroomfleet/dr1ft-rep-t2v-v0:95d8371635b5646b7bddb77f54e29ecede5610ebdcac02bc26ca2169e558dc5f", // Default model
      prompt = "A cinematic video",
      frames = 81,
      fast_mode = "Balanced",
      resolution = "480p",
      aspect_ratio = "16:9",
      sample_shift = 8,
      sample_steps = 30,
      negative_prompt = "",
      lora_strength_clip = 1,
      sample_guide_scale = 5,
      lora_strength_model = 1
    } = req.body;

    console.log('Generating video with parameters:', {
      model_path,
      prompt,
      frames,
      fast_mode,
      resolution,
      aspect_ratio,
      sample_shift,
      sample_steps,
      negative_prompt,
      lora_strength_clip,
      sample_guide_scale,
      lora_strength_model
    });

    console.log('🔑 Using API token:', process.env.REPLICATE_API_TOKEN ? '✅ Token present' : '❌ Token missing');
    console.log('🤖 Using model:', model_path);

    // Use replicate.run() with the selected model path
    const output = await replicate.run(
      model_path,
      {
        input: {
          prompt, // Add the prompt parameter
          frames,
          fast_mode,
          resolution,
          aspect_ratio,
          sample_shift,
          sample_steps,
          negative_prompt,
          lora_strength_clip,
          sample_guide_scale,
          lora_strength_model
        }
      }
    );

    console.log('✅ Video generation completed');
    console.log('📹 Video URL:', output[0]?.url ? output[0].url() : output[0]);

    res.json({
      success: true,
      videoUrl: output[0]?.url ? output[0].url() : output[0],
      output: output,
      message: 'Video generated successfully'
    });

  } catch (error) {
    console.error('Error starting video generation:', error);
    res.status(500).json({
      error: 'Failed to generate video',
      details: error.message
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    timestamp: new Date().toISOString()
  });
});

// Serve the HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 DR1FT Video Generator server running on port ${PORT}`);
  console.log(`🌐 Open http://localhost:${PORT} to use the app`);
  console.log(`🔑 Replicate API ready`);
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('👋 Shutting down server...');
  process.exit(0);
});