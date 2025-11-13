
# Digital Wellness Hub

A React-based web application for promoting digital wellness and healthy technology habits.

2. **Add GitHub Secrets (Environment Variables)**
   - Go to your GitHub repository: `https://github.com/Madhura-mule25/website2`
   - Click **Settings** → **Secrets and variables** → **Actions**
   - Click **New repository secret** and add each of these:
     - `VITE_API_KEY` = your Firebase API key
     - `VITE_AUTH_DOMAIN` = your Firebase auth domain
     - `VITE_PROJECT_ID` = your Firebase project ID
     - `VITE_STORAGE_BUCKET` = your Firebase storage bucket
     - `VITE_MESSAGING_SENDER_ID` = your Firebase messaging sender ID
     - `VITE_APP_ID` = your Firebase app ID
     - `VITE_MEASUREMENT_ID` = your Firebase measurement ID
live at: `https://madhura-mule25.github.io/website2/`

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
- Deployed on GitHub Pages


