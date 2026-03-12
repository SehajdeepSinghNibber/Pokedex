# Pokédex (Vanilla JS)

A simple Pokédex web app that allows users to search for a Pokémon by **name or Pokédex number** and displays useful information including:

- Pokémon name
- Pokédex number
- Image
- Primary and secondary type
- Type weaknesses

This project was built using **HTML, CSS, and Vanilla JavaScript** to revisit and strengthen **core JavaScript fundamentals** after working extensively with React in recent projects.

## Features

- 🔍 Search Pokémon by **name or Pokédex number**
- 🖼 Displays official Pokémon image
- 🧬 Shows **primary and secondary types**
- ⚡ Calculates and displays **type weaknesses**
- 🌐 Uses the **Fetch API** to retrieve Pokémon data
- 📱 Simple and responsive UI

## Tech Stack

- **HTML** – Structure of the app  
- **CSS** – Styling and layout  
- **Vanilla JavaScript** – Logic and DOM manipulation  
- **Fetch API** – Fetch Pokémon data from an external API  

## API Used

This project uses the public Pokémon API:

https://pokeapi.co/

## How It Works

1. The user enters a **Pokémon name or Pokédex number** in the search bar.
2. JavaScript sends a request using the **Fetch API**.
3. The API returns Pokémon data including types and sprites.
4. The app displays:
   - Pokémon name
   - Pokédex number
   - Image
   - Types
   - Weaknesses

## Run Locally

1. Clone the repository

```bash
git clone https://github.com/SehajdeepSinghNibber/Pokedex.git
```

2. Open the project folder

3. Run `index.html` in your browser

No build tools or installations required.

## Purpose of This Project

Recently most of my projects have been built using **React**, so I created this project to:

- Revisit **core JavaScript fundamentals**
- Practice **DOM manipulation without frameworks**
- Use the **Fetch API directly**
- Build a lightweight project without libraries

## Future Improvements

- Add Pokémon stats
- Add evolution chain
- Add loading and error states
- Improve mobile UI
- Add search suggestions
