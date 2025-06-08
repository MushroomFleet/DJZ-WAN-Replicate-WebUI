# Replicate API Key Setup Guide

This guide will help you properly configure your Replicate API key to avoid authentication errors.

## 🔑 Getting Your API Key

1. **Sign up/Login to Replicate**:
   - Visit [replicate.com](https://replicate.com)
   - Create an account or log in

2. **Get your API token**:
   - Go to your [Account Settings](https://replicate.com/account/api-tokens)
   - Copy your API token (starts with `r8_`)

## 📁 Setting Up Environment Variables

### Step 1: Create the .env File

Create a file named `.env` in your project root directory (same level as `server.js`):

```
dr1ft-video-generator/
├── server.js
├── .env          ← Create this file here
├── package.json
└── public/
    └── index.html
```

### Step 2: Add Your API Key

Open the `.env` file and add your token:

```env
REPLICATE_API_TOKEN=r8_your_actual_token_here
```

**Replace `r8_your_actual_token_here` with your real token!**

## ✅ Correct .env File Format

```env
# ✅ CORRECT - No spaces, no quotes
REPLICATE_API_TOKEN=r8_Hb0abcdefghijklmnopqrstuvwxyz1234567890

# Optional: Set custom port
PORT=3000
```

## ❌ Common Mistakes to Avoid

### 1. Spaces Around Equals Sign
```env
# ❌ WRONG - No spaces allowed
REPLICATE_API_TOKEN = r8_your_token_here

# ✅ CORRECT
REPLICATE_API_TOKEN=r8_your_token_here
```

### 2. Using Quotes
```env
# ❌ WRONG - No quotes needed
REPLICATE_API_TOKEN="r8_your_token_here"
REPLICATE_API_TOKEN='r8_your_token_here'

# ✅ CORRECT
REPLICATE_API_TOKEN=r8_your_token_here
```

### 3. Wrong File Location
```
# ❌ WRONG - .env in wrong location
dr1ft-video-generator/
├── server.js
└── config/
    └── .env      ← Wrong location

# ✅ CORRECT - .env in project root
dr1ft-video-generator/
├── server.js
├── .env          ← Correct location
```

### 4. Missing dotenv Import
Make sure your `server.js` starts with:
```javascript
import 'dotenv/config'; // This line must be first!
import express from 'express';
// ... other imports
```

## 🔍 Troubleshooting

### Test 1: Check if .env File Exists
```bash
# In your project directory, run:
ls -la .env

# Should show: -rw-r--r-- 1 user user 43 date .env
# If you get "No such file", the file doesn't exist
```

### Test 2: View .env File Content
```bash
cat .env
```
Should output:
```
REPLICATE_API_TOKEN=r8_your_actual_token_here
```

### Test 3: Test Environment Loading
```bash
node -e "import 'dotenv/config'; console.log('Token:', process.env.REPLICATE_API_TOKEN ? 'Found ✅' : 'Not found ❌');"
```

### Test 4: Check Token Format
Your token should:
- Start with `r8_`
- Be about 40-50 characters long
- Contain only letters, numbers, and underscores

## 🚨 Common Error Messages

### Error: "You did not pass an authentication token"
**Cause**: API token not loaded or incorrect format
**Solution**: 
1. Check .env file exists and is correctly formatted
2. Verify `import 'dotenv/config'` is first line in server.js
3. Restart your server after making changes

### Error: "Invalid authentication credentials"
**Cause**: Wrong or expired API token
**Solution**:
1. Generate a new token from Replicate dashboard
2. Update your .env file with the new token
3. Restart your server

### Error: "The requested resource could not be found" (404)
**Cause**: Model doesn't exist, is private, or model name is incorrect
**Solution**:
1. Check the model exists: Visit https://replicate.com/mushroomfleet/dr1ft-rep-t2v-v0
2. Run the model checker script: `node check-model.js`
3. Verify you have access to the model (some models are private)
4. Check if the model name has changed
5. Make sure the model is still active

### Error: "REPLICATE_API_TOKEN not found"
**Cause**: Environment variables not loading
**Solution**:
1. Install dotenv: `npm install dotenv`
2. Add import to server.js: `import 'dotenv/config';`
3. Check .env file location and format

## 📋 Quick Checklist

Before starting your server, verify:

- [ ] `.env` file exists in project root
- [ ] API token starts with `r8_`
- [ ] No spaces around `=` in .env file
- [ ] No quotes around the token value
- [ ] `dotenv` package is installed
- [ ] `import 'dotenv/config';` is first line in server.js
- [ ] Server restarted after making changes

## 🔒 Security Best Practices

1. **Never commit .env files to git**:
   ```bash
   # Add to .gitignore
   echo ".env" >> .gitignore
   ```

2. **Use different tokens for different environments**:
   ```env
   # Development
   REPLICATE_API_TOKEN=r8_dev_token_here
   
   # Production (use different token)
   REPLICATE_API_TOKEN=r8_prod_token_here
   ```

3. **Regenerate tokens if compromised**:
   - Go to Replicate dashboard
   - Delete old token
   - Generate new token
   - Update .env file

## 🆘 Still Having Issues?

If you're still getting authentication errors:

1. **Double-check your token** by logging into Replicate and copying it again
2. **Create a new .env file** from scratch
3. **Test with a simple script**:
   ```javascript
   import 'dotenv/config';
   import Replicate from 'replicate';
   
   const replicate = new Replicate({
     auth: process.env.REPLICATE_API_TOKEN,
   });
   
   console.log('Token loaded:', !!process.env.REPLICATE_API_TOKEN);
   ```
4. **Check Replicate account status** - ensure you have credits and account is active
5. **Try a different API token** - generate a fresh one from your dashboard

## 📞 Additional Resources

- [Replicate Documentation](https://replicate.com/docs)
- [Replicate API Tokens](https://replicate.com/account/api-tokens)
- [Node.js dotenv Documentation](https://github.com/motdotla/dotenv)