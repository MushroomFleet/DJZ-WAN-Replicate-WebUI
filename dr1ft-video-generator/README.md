# WAN Text-to-Video Generator 🎬

Transform your ideas into stunning AI-generated videos using our custom-trained LoRA models built on the powerful 14B parameter WAN architecture. Create cinematic sequences, artistic visuals, and captivating content with just a text description.

## ✨ What is WAN Text-to-Video?

WAN (Wavelet-Aligned Networks) represents the cutting-edge of AI video generation technology. Our 14B parameter model, enhanced with custom-trained LoRA (Low-Rank Adaptation) models, converts your text descriptions into high-quality video content with unprecedented detail and creativity.

## 🚀 Quick Setup

This web interface is designed for simplicity - just add your API key and start creating!

### One-Time Setup
1. **Get your Replicate API key** from [replicate.com/account/api-tokens](https://replicate.com/account/api-tokens)
2. **Create a `.env` file** in the project folder with:
   ```
   REPLICATE_API_TOKEN=r8_your_actual_token_here
   ```
3. **Open the web interface** - everything else is handled for you!

## 🎯 Getting Started

### Your First Video

1. **Choose a LoRA model** from the dropdown menu
2. **Write your prompt** - describe what you want to see
3. **Adjust settings** if desired (or use defaults)
4. **Click "Generate Video"** and watch the magic happen!

### Writing Effective Prompts

The quality of your video depends heavily on your prompt. Here's how to get the best results:

**✅ Excellent Examples:**
- "A serene mountain lake at golden hour with mist rising from the water"
- "Neon-lit cyberpunk alleyway with holographic advertisements, rain falling"
- "Ancient redwood forest with sunbeams filtering through the canopy"
- "Bustling Tokyo street market at night, paper lanterns swaying"

**❌ Avoid These:**
- "Cool video" (too vague)
- "Something amazing" (not descriptive)
- "Make it good" (AI needs specifics)

## 🎨 Available LoRA Models

Our custom-trained models are optimized for different styles and use cases:

### WAN Style v0 (Base Model)
- **Best for**: General-purpose video generation
- **Training**: Balanced dataset for versatile output
- **When to use**: Your first choice for most projects
- **Strengths**: Reliable quality, natural motion

### WAN Effect v0 (Enhanced Model)  
- **Best for**: Videos with enhanced visual effects
- **Training**: Specialized on cinematic and stylistic content
- **When to use**: When you want dramatic visual flair
- **Strengths**: Enhanced effects, richer details, artistic style

*More custom LoRA models will be added regularly based on community needs*

## ⚙️ Understanding the Controls

### Video Settings

**Resolution**
- **480p**: Fast generation, perfect for previewing ideas
- **720p**: Balanced quality and speed (recommended)
- **1080p**: Highest quality, longer generation time

**Aspect Ratio**
- **16:9 (Widescreen)**: Cinematic, YouTube-ready format
- **9:16 (Portrait)**: Perfect for TikTok, Instagram Stories
- **1:1 (Square)**: Ideal for Instagram feed posts
- **4:3 (Standard)**: Classic format, good for general use

**Quality Mode**
- **Fast**: Quick results for testing (2-3 minutes)
- **Balanced**: Optimal quality/speed balance (5-8 minutes)
- **Quality**: Maximum detail and refinement (10-15 minutes)

**Frame Count (24-120)**
- **24-48 frames**: Short clips, quick concepts
- **49-81 frames**: Standard length (recommended)
- **82-120 frames**: Extended sequences, storytelling

### Advanced WAN Parameters

**Sample Steps (10-100)**
- **10-20**: Faster, more impressionistic results
- **30-50**: Balanced detail (recommended)
- **60-100**: Maximum refinement and detail

**Guidance Scale (1-20)**
- **1-5**: Creative freedom, unexpected interpretations
- **5-10**: Balanced prompt following (recommended)
- **10-20**: Strict adherence to your description

**Sample Shift (1-20)**
- **1-8**: Consistent, smooth motion
- **8-15**: Balanced dynamics (recommended)  
- **15-20**: High energy, varied motion

**LoRA Strength (0-2)**
- **0-0.8**: Subtle model influence
- **0.8-1.2**: Balanced integration (recommended)
- **1.2-2**: Strong model characteristics

## 🎬 Pro Tips for Amazing Results

### 1. Leverage the 14B Parameter Power
Our model understands complex relationships - don't hesitate to describe intricate scenes:
- "Medieval castle courtyard during a royal feast with hundreds of guests"
- "Underwater coral city with bioluminescent architecture"

### 2. Cinematic Language Works Best
Include film terminology for professional results:
- "Aerial establishing shot of..."
- "Macro close-up revealing..."
- "Golden hour backlighting on..."
- "Slow motion capture of..."

### 3. Style-Specific Prompting
- **For WAN Style v0**: Focus on natural, realistic descriptions
- **For WAN Effect v0**: Include artistic/stylistic terms like "ethereal", "dramatic", "surreal"

### 4. Scene Composition
Describe the full scene structure:
- **Foreground**: "In the foreground, a lone figure..."
- **Background**: "Against a backdrop of..."
- **Atmosphere**: "Surrounded by swirling mist..."

### 5. Temporal Elements
The WAN model excels at understanding time and motion:
- "Time-lapse of seasons changing in a garden"
- "Slow zoom into a bustling marketplace"
- "Camera panning across a mountain range"

## 🎨 Creative Categories to Explore

### Nature & Landscapes
- "Aurora borealis dancing over a frozen lake in real-time"
- "Ancient sequoia grove with shafts of morning light"
- "Ocean waves crashing against volcanic rocks"

### Urban & Architecture  
- "Drone flight through a neon-lit megacity at night"
- "Art nouveau building facade with intricate details"
- "Busy intersection in Tokyo during rush hour"

### Fantasy & Sci-Fi
- "Crystalline alien landscape under twin moons"
- "Steampunk airship floating through cloud layers"
- "Magical library with books that glow and float"

### Abstract & Artistic
- "Liquid gold flowing and forming geometric patterns"
- "Ink drops blooming in water, macro photography"
- "Geometric shapes morphing in sync with music"

## ⏱️ Generation Timeline

**Typical generation times with 14B model:**
- **Fast mode**: 2-4 minutes (great for iteration)
- **Balanced mode**: 5-10 minutes (recommended)
- **Quality mode**: 10-20 minutes (production ready)

*Times vary based on complexity and server load*

## 💡 Troubleshooting & Optimization

### Getting Better Results
- **Prompt too generic?** Add specific details about lighting, camera angles, time of day
- **Motion seems off?** Experiment with Sample Shift values
- **Need more style?** Try the Enhanced LoRA model or increase LoRA strength
- **Want more control?** Increase Guidance Scale for stricter prompt following

### Common Issues
- **Slow generation**: Use Fast mode for testing, reduce frame count
- **Unexpected results**: Lower Guidance Scale for more prompt adherence
- **Need more detail**: Increase Sample Steps or switch to Quality mode

## 🔄 Iterative Workflow

1. **Start with Fast mode** to test your concept
2. **Refine your prompt** based on initial results  
3. **Adjust parameters** for desired style/motion
4. **Final generation** with Balanced/Quality mode

## 🎯 Best Practices

### Prompt Structure
```
[Main Subject] + [Action/Scene] + [Environment] + [Style/Mood] + [Technical specs]

Example: "Majestic eagle soaring through mountain canyon with golden sunset lighting, cinematic wide shot"
```

### Parameter Starting Points
- **New users**: All defaults, focus on prompt writing
- **Experienced users**: Adjust one parameter at a time
- **Production work**: Quality mode, 720p+, 60+ frames

## 🚀 Ready to Create

Your WAN text-to-video generator is ready to bring your imagination to life! The 14B parameter model combined with our custom LoRA training provides unprecedented creative control.

**Start simple, experiment freely, and create amazing AI-generated videos!** 🎬✨

---

*This web interface provides easy access to our professionally trained LoRA models. For technical questions or custom model requests, consult the documentation or contact the development team.*