# 🛩️ FAA Part 107 Drone Certification Quiz App

This is a modern web-based quiz application designed to help aspiring drone pilots prepare for the **FAA Part 107 Remote Pilot Certificate Exam**. The app features animated visuals, randomized questions, detailed explanations, and a responsive user interface.

---

## ✨ Features

- 🎮 **Interactive Quiz Experience**  
  Take practice tests with 25–100 randomized questions from a real-world FAA-style bank.

- 🎞️ **Lottie Drone Animation**  
  A sleek drone flies across the homepage to add visual appeal.

- 🎨 **TailwindCSS Styling**  
  Fully responsive UI, with custom animations and modal UI.

- 🧠 **Answer Feedback**  
  Instantly highlights correct/incorrect answers with explanations.

- 🚀 **Question Count Selector**  
  Choose 25, 50, 75, 100 questions before starting.

---

## 📂 Project Structure

```
📁 src
│── Quiz.jsx                   # Quiz logic and UI
├── assets/
│   └── drone-fly.json         # Lottie animation
│── questions.js               # 100+ real FAA-style questions
├── Home.jsx                   # Animated homepage
├── App.jsx                    # Routes and layout
└── main.jsx                   # React DOM root
```

---

## 🔧 Installation & Usage

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/part107-quiz-app.git
   cd part107-quiz-app
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Build for production**

   ```bash
   npm run build
   ```

---

## ✅ TODO / Improvements

- [ ] Add sectional chart and weather interpretation questions with images
- [ ] Enable category filtering (Airspace, Weather, Emergencies, etc.)

---

## 📄 License

MIT License — Free to use and modify for educational and commercial purposes.

---

## 🧠 Acknowledgments

- FAA ACS Part 107 Remote Pilot Knowledge Test Guide
- [LottieFiles](https://lottiefiles.com) for animation
- TailwindCSS for styling
- React Router for navigation

---

## 💬 Questions or Feedback?

Feel free to open an issue or submit a pull request. Happy flying!
