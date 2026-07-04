# Pixel Test Web Server

A simple Node.js web server for testing your tracking pixel locally.

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the server:
   ```bash
   npm start
   ```

3. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

## Features

- Serves your `index.html` page on the root URL
- Handles tracking pixel requests at `/track` endpoint
- Logs tracking events to the console
- Returns a transparent 1x1 GIF pixel for tracking requests

## Project Structure

```
web-server/
├── server.js       # Express server
├── index.html      # Your HTML page
├── package.json    # Node dependencies
└── README.md       # This file
```

## Tracking Events

The `/track` endpoint accepts query parameters and logs them:
```
http://localhost:3000/track?event=pageview&user=test_user
```

All query parameters will be printed to the server console.
