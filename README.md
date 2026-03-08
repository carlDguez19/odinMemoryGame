# Memory Game
A fast‑paced React memory challenge where the goal is to click unique cards without repeating any previous selections. Each correct choice increases the score, while clicking a previously selected card resets the round. The project focuses on state management, component communication, and clean UI updates.

---

## Features
- 	Dynamic card shuffling after every click
- 	Score tracking with best‑score persistence
- 	Modular React components
- 	Responsive layout
- 	Clean UI built with custom CSS

---

## How It Works
The game displays a grid of cards.
Each time the player clicks a card:
1. 	The game checks if the card was clicked before.
2. 	If new, the score increases and the cards reshuffle.
3. 	If repeated, the score resets and the round restarts.
4. 	The best score updates when a new high score is reached.
This project demonstrates core React concepts such as:
- 	`useState` for managing game logic
- 	Passing props between components
- 	Conditional logic
- 	Array manipulation
- 	Component‑based architecture

---

## Project Structure

```txt
ODINMEMORYGAME/
│
├── public/
├── src/
│   ├── components/
│   │   ├── App.jsx
│   │   ├── Card.jsx
│   │   ├── Gameboard.jsx
│   │   └── TitleScore.jsx
│   │
│   ├── styles/
│   │   ├── gameboard.css
│   │   └── index.css
│   │
│   ├── main.jsx
│
├── package.json
├── vite.config.js
└── README.md

```

---

## Tech Stack
- 	React (Vite)
- 	JavaScript (ES6+)
- 	CSS
- 	Node.js

---

## Running the Project
Install dependencies:
```bash npm install ```
Start the development server:
```bash npm run dev ```
Build for production:
```bash npm run build ```

---

## What I Learned
- 	Managing game logic with React state
- 	Preventing repeated selections using arrays
- 	Shuffling arrays on every render
- 	Structuring a small game into reusable components
- 	Styling responsive layouts

---

## Future Improvements
- 	Add animations
- 	Add difficulty levels
- 	Add card themes
- 	Add sound effects
- 	Add a timer mode
