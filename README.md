# Digital Wellness Hub

A React-based web application for promoting digital wellness and healthy technology habits.

## 🚀 Netlify Deployment

### Prerequisites
- A Netlify account
- Firebase project with configuration

### Deployment Steps

1. **Push to GitHub** ✅ (Already done!)
   ```
   Repository: https://github.com/Madhura-mule25/website2
   ```

2. **Connect to Netlify**
   
   **Option A: Using GitHub Integration (Recommended)**
   - Log in to [Netlify](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Choose "GitHub" and authorize Netlify
   - If you see "Upgrade account for specific scopes":
     - Click "Configure the Netlify app on GitHub"
     - Or go to: GitHub Settings → Applications → Netlify
     - Grant access to your specific repository
   - Select your repository: `Madhura-mule25/website2`
   
   **Option B: Using Netlify CLI (Alternative)**
   ```bash
   # Install Netlify CLI
   npm install -g netlify-cli
   
   # Login to Netlify
   netlify login
   
   # Deploy from cyberbuddy directory
   cd cyberbuddy
   netlify deploy --prod
   ```

3. **Configure Build Settings**
   - Base directory: `cyberbuddy`
   - Build command: `npm run build`
   - Publish directory: `dist`
   
   (These are already configured in `netlify.toml`)

4. **Add Environment Variables**
   - In Netlify dashboard: Site settings → Environment variables
   - Add all variables from `.env.example`:
     - `VITE_API_KEY`
     - `VITE_AUTH_DOMAIN`
     - `VITE_PROJECT_ID`
     - `VITE_STORAGE_BUCKET`
     - `VITE_MESSAGING_SENDER_ID`
     - `VITE_APP_ID`
     - `VITE_MEASUREMENT_ID`

5. **Deploy**
   - Click "Deploy site"
   - Wait for build to complete
   - Your site will be live!

## 🛠️ Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📝 Environment Variables

Copy `.env.example` to `.env` and fill in your Firebase configuration:

```bash
cp .env.example .env
```

Then edit `.env` with your actual Firebase credentials.

## 🔧 Tech Stack

- React 19
- TypeScript
- Vite
- React Router
- Firebase (Authentication & Analytics)
