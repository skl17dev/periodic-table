# Periodic Table Web App

A modern, interactive periodic table built with TypeScript, Vite, and CSS. This project visualizes the elements and their categories, providing a user-friendly interface for exploring chemical properties.

## Features
- Interactive periodic table layout
- Element categories highlighted with color
- Mouseover and click events for details
- Responsive design for desktop and mobile
- Fast development and build with Vite

![Screenshot](/screenshot.png)

## Project Structure
```
periodic-table/
├── index.html          # Main HTML file
├── package.json        # Project metadata and scripts
├── tsconfig.json       # TypeScript configuration
├── public/
│   └── favicon.png     # App icon
├── src/
│   ├── main.ts         # Main TypeScript logic
│   └── style.css       # Stylesheet for the app
```

## Getting Started
### Prerequisites
- Node.js (v18 or newer recommended)
- npm

### Installation
1. Clone the repository:
   ```sh
   git clone <repo-url>
   cd periodic-table
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm run dev
   ```
4. Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production
```sh
npm run build
```

## Scripts
- `npm run dev` — Start development server
- `npm run build` — Build for production
- `npm run preview` — Preview production build

## Technologies Used
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- HTML5, CSS3

## Customization
- Modify `src/main.ts` for logic and interactivity
- Update `src/style.css` for styles
- Edit `index.html` for layout/content

## License
This project is licensed under the MIT License.
