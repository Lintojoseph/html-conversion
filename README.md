## 🚀 How to Run the Project

You can run this project locally using any of the following methods:

### Option 1: Direct File Opening (No setup required)
1. Open your file explorer and navigate to the project directory: `c:\Users\USER\Desktop\htmlconversion`.
2. Double-click [index.html](file:///c:/Users/USER/Desktop/htmlconversion/index.html) or right-click it and choose **Open with** followed by your favorite web browser (Chrome, Edge, Firefox, Safari, etc.).

### Option 2: Using VS Code Live Server Extension (Recommended for Development)
1. Open the project folder in VS Code.
2. If you don't have it installed, search for the **Live Server** extension (by Ritwick Dey) in the extensions marketplace and install it.
3. Click the **"Go Live"** button in the status bar at the bottom right of the VS Code window to launch a local server and open the page automatically.

### Option 3: Using Node.js (NPX)
If you have Node.js installed, open a command prompt / terminal in the project directory and run:

```bash
npx -y serve .
```

After running, copy and paste the local URL (usually `http://localhost:3000` or `http://localhost:5000`) into your web browser.

### Option 4: Using Python
If you have Python installed, you can start a local development server by opening a terminal in the project directory and running:

```bash
# For Python 3.x
python -m http.server 8000
```

Then, open your browser and navigate to `http://localhost:8000`.
