# STAR WARS CHARACTERS 🚀  

## React + TypeScript + Vite + TailwindCSS  

### 📌 Prerequisites
Ensure you have **Node.js** installed on your device before running the application.  

---

## 💻 Installation & Running the App
```sh
# Install dependencies
yarn

# Start the development server
yarn dev
```
Once the server is running, the app will be available locally at:  
🤞 **http://localhost:5173/**  

---

## 📝 Project Notes
- The **original API has changed** since the initial project, leading to a slightly different end result.
- The app is **fully responsive** and optimized for **mobile usage**.
- It **fetches 10 characters per page** using API pagination.
- For **search and filtering**, all characters are **fetched separately** and stored in memory.
- The **search & filter options** become available **only after all characters have been loaded**.
- The **updated API has a simplified user object**, limiting filtering options (listed as *"Coming soon..."*).

---

## 🛠️ Tech Stack & Considerations
### 📌 Framework & Tools Used
- **React** – Chosen based on project requirements.
- **Vite** – Used alongside React for improved performance & better developer experience.
- **TypeScript** – Used instead of JavaScript for **better error handling** and **type safety**.
- **Tailwind CSS** – Selected for its **modular, utility-first approach** to styling.
- **Headless UI** – Used for **smooth transitions & animations**.

### 📌 Global State Management
- **Redux Toolkit** – Used for **efficient global state management**.
  - Handles **large amounts of data** across multiple components.
  - Works well with **thunks** for API fetching, storing data, and managing **loading & error states**.
  - **Redux Logger** improves **developer experience** & debugging.

---

## ❓ Questions or Comments?
Feel free to reach out if you have any questions, suggestions, or improvements! 🚀  

