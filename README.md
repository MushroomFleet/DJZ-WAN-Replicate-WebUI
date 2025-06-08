# DJZ-WAN-Replicate-WebUI 🚀

A comprehensive collection of web-based AI tools built on Replicate's powerful platform. Transform your creative workflow with intuitive web interfaces for cutting-edge AI video generation and model training capabilities.

![Status](https://img.shields.io/badge/Status-Active%20Development-brightgreen) ![Tools](https://img.shields.io/badge/Tools-2%20Available-blue) ![Platform](https://img.shields.io/badge/Platform-Replicate-orange) ![License](https://img.shields.io/badge/License-MIT-blue)

## 🎯 What is DJZ-WAN-Replicate-WebUI?

This project provides user-friendly web interfaces for advanced AI video generation and training tools. Instead of complex command-line operations, you get beautiful, intuitive web applications that make powerful AI technology accessible to creators, researchers, and developers of all skill levels.

**Key Benefits:**
- 🖥️ **Web-Based**: No complex installations - just run and use
- 🎨 **Professional Quality**: Built on state-of-the-art AI models
- ⚡ **Fast Setup**: Get started in minutes with your Replicate API key
- 🔧 **Full Control**: Complete access to all model parameters
- 📱 **Responsive**: Works on desktop and mobile devices

## 🛠️ Available Tools

### 🎬 WAN Text-to-Video Generator
**Location:** `dr1ft-video-generator/`

Transform your ideas into stunning AI-generated videos using custom-trained LoRA models built on the powerful 14B parameter WAN architecture.

**What it does:**
- Converts text descriptions into high-quality videos
- Multiple LoRA models for different styles and effects
- Professional cinematic output with customizable parameters
- Supports various resolutions and aspect ratios

**Perfect for:**
- Content creators and social media managers
- Artists and visual designers
- Marketing professionals
- Anyone wanting to create AI videos without technical complexity

**Key Features:**
- 14B parameter WAN model with custom LoRA integration
- Real-time generation with quality/speed balance options
- Cinematic language understanding for professional results
- Multiple output formats (16:9, 9:16, 1:1, 4:3)

### 🧠 WAN LoRA Trainer
**Location:** `wan-lora-trainer/`

Train custom LoRA models for personalized video generation using an intuitive web interface.

**What it does:**
- Trains custom LoRA models from your video datasets
- Provides complete control over training parameters
- Real-time progress monitoring and status updates
- Integration with Weights & Biases for detailed metrics

**Perfect for:**
- AI researchers and developers
- Studios wanting custom brand/style models
- Advanced users creating specialized content
- Anyone wanting to push the boundaries of AI video generation

**Key Features:**
- Modern glassmorphism UI with comprehensive parameter control
- Support for both 1.3B and 14B parameter models
- Flexible training modes (text2video, image2video)
- Built-in monitoring and error handling

## 🚀 Quick Start

### Prerequisites
- **Node.js 18+** installed on your system
- **Replicate account** with API access ([Sign up here](https://replicate.com))
- **API credits** for running the AI models

### 1. Get Your Replicate API Key
Before using any tool, you'll need a Replicate API key:

1. Visit [replicate.com/account/api-tokens](https://replicate.com/account/api-tokens)
2. Create a new API token
3. Copy the token (starts with `r8_`)

📖 **Detailed setup guide:** See [`API_KEY_GUIDE.md`](API_KEY_GUIDE.md) for complete instructions and troubleshooting.

### 2. Choose Your Tool
Navigate to the tool you want to use:

```bash
# For video generation
cd dr1ft-video-generator

# For training custom models
cd wan-lora-trainer
```

### 3. Follow Tool-Specific Instructions
Each tool has comprehensive documentation in its folder:

- **Installation steps**
- **Environment setup**
- **Usage tutorials**
- **Parameter explanations**
- **Best practices**
- **Troubleshooting guides**

## 📚 Documentation Structure

```
DJZ-WAN-Replicate-WebUI/
├── README.md                    # This file - project overview
├── API_KEY_GUIDE.md            # Shared API setup guide
│
├── dr1ft-video-generator/      # Video generation tool
│   ├── README.md               # Complete usage guide
│   ├── server.js               # Application server
│   └── public/index.html       # Web interface
│
└── wan-lora-trainer/           # Model training tool
    ├── README.md               # Complete usage guide
    ├── server.js               # Application server
    └── public/index.html       # Web interface
```

## 🎯 Getting Started Guide

### For Video Generation
1. Navigate to `dr1ft-video-generator/`
2. Read the [README.md](dr1ft-video-generator/README.md) for:
   - Installation instructions
   - How to write effective prompts
   - Understanding model parameters
   - Creative tips and examples

### For Model Training
1. Navigate to `wan-lora-trainer/`
2. Read the [README.md](wan-lora-trainer/README.md) for:
   - Training setup and configuration
   - Dataset preparation guidelines
   - Parameter optimization tips
   - Monitoring and troubleshooting

## 🔧 Technical Overview

**Architecture:**
- **Frontend**: Modern HTML5/CSS3/JavaScript interfaces
- **Backend**: Node.js with Express servers
- **AI Platform**: Replicate API integration
- **Models**: WAN (Wavelet-Aligned Networks) with LoRA fine-tuning

**Requirements:**
- Node.js 18+ for running the web servers
- Modern web browser for the interfaces
- Replicate API key for AI model access
- Internet connection for API communication

## 🚧 Roadmap

This project is under active development with more AI tools planned:

- 🎵 **Audio-to-Video Sync Tools** - LLM DREAMS
- 🖼️ **Image Enhancement Utilities** - LLM DREAMS
- 🎭 **Character Consistency Tools** - LLM DREAMS

**Stay Updated:**
- Watch this repository for new releases
- Check back regularly for new tools and features
- Follow the development progress in the commit history

## 💡 Use Cases

### Content Creation
- **Social Media**: Generate videos for TikTok, Instagram, YouTube
- **Marketing**: Create promotional content and advertisements
- **Education**: Develop visual learning materials and presentations

### Professional Applications
- **Film/TV**: Prototype scenes and storyboard concepts
- **Advertising**: Rapid concept visualization and client presentations
- **Architecture**: Visualize spaces and design concepts in motion

### Research & Development
- **AI Research**: Experiment with video generation parameters
- **Custom Models**: Train specialized models for specific domains
- **Workflow Optimization**: Develop efficient AI-assisted pipelines

## ⚠️ Important Notes

### API Usage & Costs
- Each tool requires Replicate API credits
- Generation costs vary by model size and parameters
- Monitor your usage through the Replicate dashboard

### Performance Tips
- Start with fast/preview modes for testing
- Use higher quality settings for final outputs
- Consider generation time vs. quality trade-offs

### Support & Troubleshooting
- Check the `API_KEY_GUIDE.md` for common setup issues
- Review tool-specific documentation for detailed help
- Ensure you have sufficient API credits before starting

## 🤝 Contributing

This project welcomes contributions! Whether you're:
- Reporting bugs or suggesting features
- Improving documentation
- Adding new tools or enhancing existing ones
- Sharing creative examples and use cases

**Getting Involved:**
1. Fork the repository
2. Create a feature branch
3. Make your improvements
4. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- **Replicate Team** for providing the AI model platform
- **WAN Developers** for the underlying video generation technology
- **Open Source Community** for the tools and libraries that make this possible
- **Contributors** who help improve and expand this project

## 🔗 Quick Links

- [Replicate Platform](https://replicate.com)
- [API Documentation](https://replicate.com/docs)
- [Model Credits & Pricing](https://replicate.com/pricing)
- [Community Forum](https://replicate.com/discord)

---

**Ready to start creating AI-generated content?** 

👉 Choose your tool from the folders above and dive into the detailed documentation!

*Each tool is designed to be powerful yet accessible - perfect for both beginners and advanced users.*
