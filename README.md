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

Link to your GitHub repository:
https://github.com/edcelbaron1124/album-tracker.git

Link to your live Vercel site:
https://album-tracker-orvwewzq8-edcelbaron.vercel.app

Three screenshots: search results, album page, and recommendations:
<img width="1908" height="932" alt="Screenshot 2026-11-02 151747" src="https://github.com/user-attachments/assets/073171ec-484e-43a2-833c-7b642f889aff" />
<img width="1896" height="929" alt="Screenshot 2026-11-02 151728" src="https://github.com/user-attachments/assets/1a910723-124f-40ba-8249-43b7a16682a1" />
<img width="1899" height="931" alt="Screenshot 2026-11-02 151718" src="https://github.com/user-attachments/assets/ea63d61b-debc-42a6-9ac7-c9bfe4ea141a" />

Answers to the reflection questions:
1. Why is the audio element stored in a useRef instead of useState?
The audio element is stored in useRef because it allows the application to keep the same audio object even when the component re-renders. Unlike useState, changing a ref does not trigger a re-render, making it suitable for controlling audio playback through methods such as play() and pause().
2. Why do all API calls live in services/ instead of inside components?
API calls are placed inside the services/ folder to separate data-fetching logic from the user interface. This makes the code more organized, reusable, and easier to maintain because components can simply call service functions without handling the API request details themselves.
3. Why can the Gemini key not be placed in React code? What could happen if you pushed it to GitHub?
The Gemini API key should not be placed in React code because frontend code can be viewed by users through their browsers. If the key is uploaded to GitHub, other people could copy and misuse it, potentially consuming the API quota or causing unexpected charges. It should instead be stored securely in environment variables and accessed through a serverless function.
4. Why is this recommender an LLM prompt and not a trained machine learning model? Give one strength and one weakness.
The recommender uses a Large Language Model (LLM) through Google Gemini by sending the user's saved albums, ratings, and listening statuses as a prompt. Its strength is that it can understand patterns in the user's music preferences and provide recommendations with explanations, while its weakness is that its recommendations may sometimes be inaccurate or inconsistent.
5. Describe the hardest bug you hit and how you fixed it.
One of the hardest bugs I encountered was a failed deployment on Vercel because the application could not find the TrackList.jsx file imported by AlbumPlayback.jsx. I fixed the issue by checking the components folder and making sure the file existed and its filename and capitalization matched the import statement exactly.

