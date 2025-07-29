import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import droneFlyAnimation from "./assets/drone-fly.json";

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [questionCount, setQuestionCount] = useState(25);
  const navigate = useNavigate();

  const startQuiz = () => {
    navigate(`/quiz?count=${questionCount}`);
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-50 to-blue-100 overflow-hidden">
      <div className="absolute top-10 left-0 w-full pointer-events-none animate-slide-drone">
        <Lottie
          animationData={droneFlyAnimation}
          loop
          className="w-40 mx-auto"
        />
      </div>

      <div className="z-10 text-center px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-4">
          FAA Part 107 Quiz App
        </h1>
        <p className="text-lg text-gray-600 mb-6 max-w-xl">
          Prepare for your FAA Remote Pilot Certificate with randomized
          questions and answer explanations.
        </p>
        <button
          className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition-all"
          onClick={() => setShowModal(true)}
        >
          Start Quiz
        </button>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 shadow-xl max-w-sm w-full">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Select Number of Questions
            </h2>
            <select
              className="w-full border border-gray-300 rounded p-2 mb-6"
              value={questionCount}
              onChange={(e) => setQuestionCount(parseInt(e.target.value))}
            >
              {[25, 50, 75, 100].map((count) => (
                <option key={count} value={count}>
                  {count} Questions
                </option>
              ))}
            </select>
            <div className="flex justify-end gap-2">
              <button
                className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                onClick={startQuiz}
              >
                Begin
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes slide-drone {
          0%   { transform: translateX(-100%); opacity: 0; }
          10%  { opacity: 1; }
          90%  { opacity: 1; }
          100% { transform: translateX(100%); opacity: 0; }
        }
        .animate-slide-drone {
          animation: slide-drone 10s linear infinite;
        }
      `}</style>
    </div>
  );
}
