# 🍳 YUM COOK — Recipe Frontend Web Application

A modern, interactive React-based recipe application where users can explore various dishes, like and bookmark their favorites, and enjoy smooth UI animations powered by GSAP.

## http://cautious-show.surge.sh/



<p align="center">
  <video src="file:///G:/MyProjects/yum-cook/src/assets/YUMCOOK.mp4" width="600" autoplay loop muted></video>
</p>

## ✨ Features
### 🔍 Browse Recipes

Fetches live recipe data using Fetch API.

Clean, responsive UI with easy navigation.

### ❤️ Like Recipes

Users can like recipes.

Liked items are saved in localStorage.

Display total liked recipes dynamically across the app.

SweetAlert notifies users when they have already liked a recipe.

### 🔖 Bookmark / Save Recipes

Users can bookmark/save recipes.

Saved items are stored in localStorage.

A dedicated page to view all saved recipes.

### ⚡ Smooth GSAP Animations

GSAP + ScrollTrigger used for:

Scroll-based animations

Smooth intro elements

Image rotations, fade-ins, parallax effects

### 🧩 React Hooks

Used throughout the project:

useState – manage component states.

useEffect – fetch API data + handle side effects.

useRef – GSAP animation targets.

useContext (if used) – for global like/bookmark state.

### 🎨 Clean UI & UX

Fully responsive layout using Tailwind CSS.

Modern design inspired by recipe & cooking apps.






### ⚙️ Installation & Setup
##### Clone the repository
git clone https://github.com/your-username/yum-cook.git

##### Enter project folder
cd yum-cook

##### Install dependencies
npm install

##### Start development server
npm run dev
