# 🎬 WAN LoRA Trainer

A modern web interface for training custom LoRA models using the [zsxkib/wan-lora-trainer](https://replicate.com/zsxkib/wan-lora-trainer) on Replicate. This application provides an intuitive UI for configuring and managing video-to-AI model training with advanced parameters.

![WAN LoRA Trainer Interface](https://img.shields.io/badge/Status-Active-brightgreen) ![Node.js](https://img.shields.io/badge/Node.js-18+-green) ![License](https://img.shields.io/badge/License-MIT-blue)

## ✨ Features

- **Modern UI**: Beautiful glassmorphism design with gradient backgrounds
- **Complete Parameter Control**: All training parameters exposed through intuitive forms
- **Real-time Status**: Track training progress and status updates
- **Model Type Selection**: Choose between 1.3B and 14B parameter models
- **Flexible Training Modes**: Support for text2video and image2video workflows
- **Video Clip Processing**: Multiple clip extraction modes for optimal training
- **Weights & Biases Integration**: Built-in W&B logging and monitoring
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Error Handling**: Comprehensive error handling and user feedback
- **Training Management**: Start, monitor, and cancel training jobs

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed
- Replicate account with API access
- A destination model created on Replicate (where your trained model will be saved)

### Installation

1. **Clone the repository:**
```bash
git clone https://github.com/yourusername/wan-lora-trainer.git
cd wan-lora-trainer
```

2. **Install dependencies:**
```bash
npm install
```

3. **Set up environment variables:**
```bash
cp .env.example .env
# Edit .env with your Replicate API token
```

4. **Start the application:**
```bash
npm start
```

5. **Open your browser:**
Navigate to `http://localhost:3000`

## ⚙️ Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
REPLICATE_API_TOKEN=r8_your_replicate_api_token_here
PORT=3000
```

### Getting Your Replicate API Token

1. Sign up at [Replicate.com](https://replicate.com)
2. Go to your [Account Settings](https://replicate.com/account/api-tokens)
3. Create a new API token
4. Copy the token to your `.env` file

### Creating a Destination Model

Before training, you need to create a destination model on Replicate:

1. Go to [Replicate Models](https://replicate.com/models)
2. Click "Create a model"
3. Set visibility (public/private)
4. Note the model name format: `username/model-name`

## 📋 Usage

### Training Parameters

#### Model Configuration
- **Destination Model**: Your Replicate model (format: `username/model-name`)
- **Trigger Word**: Token to trigger your trained style (default: "TOK")
- **Model Type**: Choose between 1.3B or 14B parameter models
- **Finetuning Type**: Select text2video or image2video training
- **Video Clip Mode**: Configure how video clips are extracted

#### Training Data
- **Input Video ZIP**: URL to a ZIP file containing your training videos
- **Auto Caption**: Automatically generate captions for training videos
- **Caption Prefix/Suffix**: Optional text to add to generated captions

#### Training Parameters
- **LoRA Rank**: Controls model capacity (default: 32)
- **Learning Rate**: Training step size (default: 0.00002)
- **Weight Decay**: Regularization parameter (default: 0.0001)
- **Max Training Steps**: Total training iterations (default: 1000)
- **Warmup Steps**: Gradual learning rate increase (-1 for auto)
- **Seed**: Random seed for reproducibility (-1 for random)

#### Weights & Biases
- **Project Name**: W&B project for logging (default: "wan_train_replicate")
- **Save Interval**: How often to save checkpoints (default: 500)
- **Sample Interval**: How often to generate samples (default: 250)

### Training Workflow

1. **Prepare your data**: Create a ZIP file with your training videos
2. **Upload the ZIP**: Host it somewhere accessible (Google Drive, Dropbox, etc.)
3. **Configure parameters**: Fill out the training form
4. **Start training**: Click "Start Training"
5. **Monitor progress**: Use the provided Replicate link to track progress

## 🔌 API Endpoints

### POST `/api/train`
Start a new training job.

**Request Body:**
```json
{
  "destination": "username/model-name",
  "input": {
    "model_type": "14b",
    "finetuning_type": "text2video",
    "video_clip_mode": "single_middle",
    "trigger_word": "TOK",
    "input_video_zip": "https://example.com/videos.zip",
    "learning_rate": 0.00002,
    "max_training_steps": 1000,
    // ... other parameters
  }
}
```

**Response:**
```json
{
  "success": true,
  "id": "training_id",
  "status": "starting",
  "urls": {
    "get": "https://replicate.com/trainings/training_id"
  }
}
```

### GET `/api/training/:id`
Get training status and details.

### POST `/api/training/:id/cancel`
Cancel a running training job.

## 🏗️ Project Structure

```
wan-lora-trainer/
├── server.js              # Express server and API routes
├── package.json           # Dependencies and scripts
├── .env                   # Environment variables (create this)
├── .env.example          # Environment template
├── README.md             # This file
└── public/
    └── index.html        # Web interface
```

## 🛠️ Development

### Running in Development Mode
```bash
npm run dev
```
This enables auto-reload when you make changes to the server code.

### Scripts
- `npm start` - Start the production server
- `npm run dev` - Start with auto-reload for development

## 📊 Monitoring Training

After starting a training job, you can monitor progress through:

1. **Replicate Dashboard**: Click the provided link in the success message
2. **Weights & Biases**: If configured, view detailed metrics and logs
3. **API Status**: Use the `/api/training/:id` endpoint for programmatic monitoring

## 🎯 Use Cases

- **Style Transfer**: Train models to mimic specific art styles or visual aesthetics
- **Character Consistency**: Create models that generate consistent characters across videos
- **Brand Content**: Develop models for consistent brand visual identity
- **Creative Workflows**: Integrate custom models into video production pipelines
- **Research**: Experiment with different training configurations and datasets

## 🔧 Troubleshooting

### Common Issues

**"Missing API Token"**
- Ensure your `.env` file contains a valid `REPLICATE_API_TOKEN`
- Check that the token has proper permissions

**"Destination model not found"**
- Create the destination model on Replicate first
- Verify the model name format: `username/model-name`

**"Training failed to start"**
- Check that your video ZIP URL is publicly accessible
- Ensure the ZIP contains valid video files
- Verify all required parameters are provided

**"Out of credits"**
- Check your Replicate account billing and add credits if needed
- Training costs vary based on model size and training duration

### Getting Help

- Check the [Replicate Documentation](https://replicate.com/docs)
- Review [WAN LoRA Trainer model page](https://replicate.com/zsxkib/wan-lora-trainer)
- Open an issue in this repository

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

### Development Setup
1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [zsxkib](https://replicate.com/zsxkib) for creating the WAN LoRA Trainer model
- [Replicate](https://replicate.com) for providing the AI model hosting platform
- The open-source community for the tools and libraries used in this project

## ⭐ Support

If you find this project helpful, please consider:
- Starring the repository
- Sharing it with others
- Contributing improvements
- Reporting bugs and suggesting features

---

Made with ❤️ for the AI community
