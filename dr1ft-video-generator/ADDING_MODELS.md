# Adding New Models to DR1FT Video Generator

This guide explains how to easily add new DR1FT model variants to your video generator interface.

## 🎯 Quick Add New Model

To add a new model, simply edit the `MODEL_CONFIG` in your `public/index.html` file:

### Step 1: Find the Model Configuration Section

Look for this section in your HTML file:

```javascript
const MODEL_CONFIG = {
    models: [
        // Existing models here...
    ]
};
```

### Step 2: Add Your New Model

Add a new model object to the `models` array:

```javascript
{
    id: 'your_model_id',                    // Unique identifier (no spaces)
    name: 'Your Model Name',                // Display name in dropdown
    path: 'owner/model:version_hash',       // Full Replicate model path
    description: 'Description of what this model does',
    category: 'base',                       // Category: base, enhanced, experimental, lora
    active: true                            // Set to false to temporarily disable
}
```

## 📋 Example: Adding a New Model

```javascript
const MODEL_CONFIG = {
    models: [
        // Existing models...
        {
            id: 'dr1ft_style_v0',
            name: 'DR1FT style v0',
            path: 'mushroomfleet/dr1ft-rep-t2v-v0:95d8371635b5646b7bddb77f54e29ecede5610ebdcac02bc26ca2169e558dc5f',
            description: 'Original DR1FT text-to-video model',
            category: 'base',
            active: true
        },
        // Add your new model here:
        {
            id: 'dr1ft_anime_v1',
            name: 'DR1FT Anime Style v1',
            path: 'username/dr1ft-anime:abc123def456ghi789',
            description: 'DR1FT model fine-tuned for anime-style videos',
            category: 'lora',
            active: true
        }
    ],
    default_model: 'dr1ft_style_v0',  // Change this to set a different default
    categories: {
        base: 'Base Models',
        enhanced: 'Enhanced Models',
        experimental: 'Experimental Models',
        lora: 'LoRA Fine-tuned'
    }
};
```

## 🏷️ Model Categories

Organize your models using these categories:

| Category | Description | Example Use Cases |
|----------|-------------|-------------------|
| `base` | Original/foundation models | Official DR1FT releases |
| `enhanced` | Improved versions | Better quality, speed optimizations |
| `experimental` | Beta/testing models | New features, untested variants |
| `lora` | Fine-tuned variants | Style-specific (anime, realistic, etc.) |

## 🔧 Advanced Configuration

### Adding New Categories

To add a new category:

1. **Add to categories object**:
```javascript
categories: {
    base: 'Base Models',
    enhanced: 'Enhanced Models',
    experimental: 'Experimental Models',
    lora: 'LoRA Fine-tuned',
    custom: 'Custom Models'    // Your new category
}
```

2. **Use in model definition**:
```javascript
{
    id: 'my_custom_model',
    name: 'My Custom Model',
    path: 'user/model:hash',
    description: 'My custom trained model',
    category: 'custom',        // Use your new category
    active: true
}
```

### Temporarily Disable Models

Set `active: false` to hide a model without deleting it:

```javascript
{
    id: 'broken_model',
    name: 'Broken Model',
    path: 'user/broken:hash',
    description: 'This model is currently broken',
    category: 'experimental',
    active: false              // This model won't appear in dropdown
}
```

### Change Default Model

Update the `default_model` field:

```javascript
const MODEL_CONFIG = {
    models: [...],
    default_model: 'dr1ft_anime_v1',  // This model will be selected by default
    categories: {...}
};
```

## 🧪 Testing New Models

Before adding a model to production:

1. **Test with the test script**:
```bash
# Edit test-dr1ft.js to use your new model path
node test-dr1ft.js
```

2. **Verify model access**:
   - Visit the model page on Replicate
   - Ensure you have access/permissions
   - Check if model is public or private

3. **Test parameters**:
   - Some models may have different parameter requirements
   - Check the model's schema on Replicate

## 📝 Model Information Template

When adding models, include helpful information:

```javascript
{
    id: 'descriptive_id_here',
    name: 'User-Friendly Display Name',
    path: 'replicate/model:version_hash_here',
    description: 'Clear description of model capabilities and use cases',
    category: 'appropriate_category',
    active: true
}
```

### Good Descriptions Examples:

- ✅ "Enhanced DR1FT model with improved effects and visual quality"
- ✅ "DR1FT model fine-tuned for anime-style video generation"
- ✅ "Experimental model with faster generation times"
- ❌ "New model"
- ❌ "v2"

## 🔒 Best Practices

1. **Use descriptive IDs**: `dr1ft_anime_v1` not `model_3`
2. **Clear naming**: Users should understand differences between models
3. **Accurate categories**: Helps users find the right model
4. **Test before adding**: Ensure model works with your setup
5. **Document changes**: Keep track of what each model does
6. **Version control**: Back up your config before major changes

## 🚨 Troubleshooting

### Model doesn't appear in dropdown
- Check `active: true` is set
- Verify JSON syntax is correct
- Check browser console for JavaScript errors

### Model fails to generate
- Test model path with `node test-dr1ft.js`
- Verify you have access to the model
- Check if model requires different parameters

### Wrong model selected by default
- Update `default_model` in MODEL_CONFIG
- Ensure the ID matches exactly

## 📞 Support

If you encounter issues:
1. Check the browser console for errors
2. Test individual models with the test script
3. Verify model access on Replicate website
4. Check API key permissions

## 🎉 You're Ready!

With this system, you can easily:
- Add new DR1FT model variants
- Organize models by category
- Control which models are available
- Test models before deployment
- Provide clear information to users

Happy model adding! 🚀