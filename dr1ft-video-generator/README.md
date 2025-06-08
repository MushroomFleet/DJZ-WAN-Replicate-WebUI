# DR1FT Video Generator

A modern, full-stack web application for generating videos using the DR1FT AI model on Replicate. Features a sleek interface with model selection, real-time parameter controls, and seamless video generation.

## 🎯 Features

- **Multi-Model Support**: Easy dropdown selection between different DR1FT model variants
- **Modern UI**: Futuristic design with neon accents and smooth animations
- **Real-time Controls**: Interactive sliders for all model parameters
- **Parameter Categories**: Organized video settings and advanced options
- **Progress Tracking**: Live status updates during video generation
- **Direct Download**: Instant video preview and download functionality

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- A Replicate account with API access
- Your Replicate API token

### 1. Setup Project

```bash
# Clone or create project directory
mkdir dr1ft-video-generator
cd dr1ft-video-generator

# Copy all the files to your project directory
# index.html -> public/index.html
# server.js -> server.js
# package.json -> package.json
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Configuration

Create a `.env` file in your project root:

```env
REPLICATE_API_TOKEN=r8_your_actual_token_here
PORT=3000
```

**⚠️ Important**: Replace `r8_your_actual_token_here` with your actual Replicate API token!

### 4. Project Structure

Ensure your project structure looks like this:

```
dr1ft-video-generator/
├── server.js              # Backend server
├── package.json           # Dependencies and scripts
├── .env                   # Environment variables (create this)
├── public/
│   └── index.html         # Frontend interface
├── test-dr1ft.js          # Testing script
├── check-model.js         # Model checker script
├── API_KEY.md             # API setup guide
├── ADDING_MODELS.md       # Model addition guide
└── README.md              # This file
```

### 5. Test Your Setup

Before starting the full application, test your configuration:

```bash
# Test all models
node test-dr1ft.js

# Test specific model
node test-dr1ft.js style
```

### 6. Start the Application

```bash
# Production mode
npm start

# Development mode (auto-reload)
npm run dev
```

Visit `http://localhost:3000` to use the application!

## 🎨 Available Models

Your application currently includes:

- **DR1FT style v0** (Base Model) - Original DR1FT text-to-video model
- **DR1FT effect v0** (Enhanced Model) - Improved effects and visual quality

## 📋 Model Parameters

| Parameter | Type | Range | Default | Description |
|-----------|------|-------|---------|-------------|
| `prompt` | string | - | "" | Text description of desired video |
| `frames` | integer | 24-120 | 81 | Number of frames in output video |
| `resolution` | string | 480p/720p/1080p | "480p" | Output video resolution |
| `aspect_ratio` | string | 16:9/9:16/1:1/4:3 | "16:9" | Video aspect ratio |
| `fast_mode` | string | Fast/Balanced/Quality | "Balanced" | Generation speed vs quality |
| `sample_steps` | integer | 10-100 | 30 | Number of diffusion steps |
| `sample_guide_scale` | float | 1-20 | 5 | Guidance scale for generation |
| `sample_shift` | integer | 1-20 | 8 | Sampling shift parameter |
| `lora_strength_model` | float | 0-2 | 1 | LoRA strength for the model |
| `lora_strength_clip` | float | 0-2 | 1 | LoRA strength for CLIP |
| `negative_prompt` | string | - | "" | What to avoid in generation |

## 🔧 API Endpoints

### POST `/api/generate-video`
Generate a video with specified parameters.

**Request Body:**
```json
{
  "model_path": "mushroomfleet/dr1ft-rep-t2v-v0:95d8371635b5646b7bddb77f54e29ecede5610ebdcac02bc26ca2169e558dc5f",
  "prompt": "A cinematic shot of a futuristic city",
  "frames": 81,
  "resolution": "720p",
  "aspect_ratio": "16:9"
}
```

**Response:**
```json
{
  "success": true,
  "videoUrl": "https://video-url.mp4",
  "message": "Video generated successfully"
}
```

### GET `/api/health`
Check server health status.

## ➕ Adding New Models

Adding new DR1FT model variants is simple! Edit the `MODEL_CONFIG` in `public/index.html`:

```javascript
const MODEL_CONFIG = {
    models: [
        // Existing models...
        {
            id: 'your_new_model',
            name: 'Your New Model Name',
            path: 'owner/model:version_hash',
            description: 'Description of your model',
            category: 'lora',
            active: true
        }
    ]
};
```

See [ADDING_MODELS.md](ADDING_MODELS.md) for detailed instructions.

## 🧪 Testing

```bash
# Test all models
node test-dr1ft.js

# Test specific model by name
node test-dr1ft.js effect

# Check model availability
node check-model.js

# Server health check
curl http://localhost:3000/api/health
```

## 🔒 Security

- Keep your `.env` file secure and never commit it to version control
- Add `.env` to your `.gitignore` file
- Use environment-specific API tokens for production
- Validate all user inputs server-side

## 🐛 Troubleshooting

### Common Issues

**Authentication Errors (401)**
- Check your API token in `.env` file
- Ensure no quotes around the token
- Verify the token is valid and not expired
- See [API_KEY.md](API_KEY.md) for detailed guidance

**Model Not Found (404)**
- Verify the model exists on Replicate
- Check if you have access to the model
- Ensure the model path includes the version hash
- Run `node check-model.js` for diagnostics

**Generation Timeout**
- Try reducing frame count or using "Fast" mode
- Check your Replicate account credits
- Verify network connectivity

**Video Not Loading**
- Check browser console for errors
- Verify the video URL is accessible
- Try refreshing the page

### Debug Mode

Enable detailed logging by checking server console output during generation.

## 📁 File Descriptions

- **`index.html`** - Complete frontend interface with model dropdown
- **`server.js`** - Backend API server with Replicate integration
- **`package.json`** - Project dependencies and scripts
- **`test-dr1ft.js`** - Multi-model testing script
- **`check-model.js`** - Model availability checker
- **`API_KEY.md`** - Detailed API key setup guide
- **`ADDING_MODELS.md`** - Guide for adding new models

## 💡 Usage Tips

1. **Start Simple**: Begin with default parameters and simple prompts
2. **Experiment Gradually**: Adjust one parameter at a time to understand effects
3. **Quality vs Speed**: Use "Fast" for testing, "Quality" for final videos
4. **Frame Count**: More frames = longer videos but longer generation time
5. **Descriptive Prompts**: Be specific about style, setting, and action

## 📊 System Requirements

- **Node.js**: 18.0.0 or higher
- **Memory**: 512MB+ available
- **Network**: Stable internet connection for Replicate API
- **Browser**: Modern browser with video support

## 📄 License

MIT License - Feel free to modify and use for your projects!

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For issues with:
- **This application**: Check the troubleshooting section or file an issue
- **Replicate API**: Visit [Replicate Documentation](https://replicate.com/docs)
- **DR1FT Models**: Check the specific model pages on Replicate

## 🎉 Ready to Generate!

Your DR1FT Video Generator is now ready to create amazing AI-generated videos! Start with simple prompts and experiment with different models and parameters to achieve the perfect results.

Happy video generating! 🚀