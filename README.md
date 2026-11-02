Album Tracker

Album Tracker is a web application built with React that allows users to search for music albums, explore album information, listen to available audio previews, and manage their personal album collection. It integrates music data from the iTunes API and Deezer, while also providing AI-powered music recommendations using Google's Gemini API. The application is built with Vite and deployed through Vercel.

Live Application: https://album-tracker-gold.vercel.app?_vercel_share=H2BAgblicxQwLaP7jOeVydZzPYqdf9no

Live Website: https://album-tracker-orvwewzq8-edcelbaron.vercel.app/

Project Screenshot:

<img width="1919" height="985" alt="image" src="https://github.com/user-attachments/assets/e93f86e4-9ae8-4351-9422-5c4bd41abc12" />

Features

Album Search – Search for music albums and discover available album information.

Album Details – View information about selected albums.

Audio Previews – Listen to available 30-second music previews.

Personal Collection – Save and manage albums in your personal collection.

Local Storage – Keep saved albums in the browser using local storage.

Deezer Integration – Access additional music playback options through Deezer.

AI Recommendations – Generate music recommendations using Google's Gemini API.

Responsive Interface – Browse and use the application through a web interface.

Tech Stack

React – Frontend library for building the user interface.

Vite – Development server and build tool.

Context API – State management across application components.

iTunes API – Provides album information and audio previews.

Deezer – Additional music integration and playback functionality.

Google Gemini API – Powers AI-generated music recommendations.

Vercel – Application deployment and hosting.

How to Run Locally

Prerequisites

Node.js and npm installed.

Git installed.

A Gemini API key for AI recommendations.

1. Clone the Repository

git clone https://github.com/edcelbaron1124/album-tracker.git

2. Open the Project Folder

cd album-tracker

3. Install Dependencies

npm install

4. Create the Environment File

Create a file named .env.local in the root project directory.

Add your Gemini API key:

Replace your_gemini_api_key_here with your actual API key.

5. Start the Development Server

npm run dev

Open the local URL displayed in your terminal, usually:

http://localhost:5173

Limitations

30-Second Previews: Audio previews provided through the iTunes API are limited to approximately 30 seconds.

Browser-Based Collection: Saved albums are stored locally in the user's browser. They are not automatically synchronized across different devices or browsers.

Deezer Login: Full-track playback through Deezer may require users to log in to their Deezer account.

Internet Connection: The application requires an internet connection to retrieve music information and access external API services.

AI Recommendations: AI-generated recommendations depend on the availability of the Gemini API and a valid API key.

Privacy Note

The AI recommendation feature uses Google's Gemini API to process information needed to generate music recommendations. Information sent to the AI service is subject to Google's applicable privacy policies and terms. Users should avoid entering personal or sensitive information into the application.

The Gemini API key is configured through environment variables and should never be exposed in publicly accessible frontend code or committed to the repository.

Disclaimer

Album Tracker is an independent academic project developed for educational purposes. It is not affiliated with, endorsed by, or officially connected to Apple, Spotify, Deezer, or Google.

All trademarks, product names, and services mentioned belong to their respective owners.
