import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { questions as originalQuestions } from "./questions";

export default function Quiz() {
  const location = useLocation();
  const [shuffledQuestions, setShuffledQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const count = parseInt(query.get("count")) || 25;

    const seen = new Set();
    const unique = originalQuestions.filter((q) => {
      const normalized = q.question.trim().toLowerCase();
      if (seen.has(normalized)) return false;
      seen.add(normalized);
      return true;
    });
    const shuffled = unique.sort(() => Math.random() - 0.5).slice(0, count);
    setShuffledQuestions(shuffled);
  }, [location.search]);

  const handleAnswer = (index) => {
    setSelected(index);
    if (index === shuffledQuestions[currentQuestion].answer) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    setSelected(null);
    if (currentQuestion + 1 < shuffledQuestions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const question = shuffledQuestions[currentQuestion];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex flex-col items-center justify-center px-4 py-10">
      <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-2xl">
        <h1 className="text-3xl font-bold text-blue-800 mb-6 text-center">
          FAA Part 107 Practice Quiz
        </h1>
        {showResult ? (
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-green-700 mb-4">
              You scored {score} out of {shuffledQuestions.length}
            </h2>
            <Link
              to="/"
              className="inline-block mt-4 px-6 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition"
            >
              Back to Home
            </Link>
          </div>
        ) : (
          question && (
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Question {currentQuestion + 1} of {shuffledQuestions.length}
              </h2>
              <p className="text-lg text-gray-700 mb-6">{question.question}</p>
              <div className="space-y-3">
                {question.options.map((option, idx) => (
                  <button
                    key={idx}
                    className={`w-full px-4 py-3 border rounded-lg text-left transition ${
                      selected !== null
                        ? idx === question.answer
                          ? "bg-green-100 border-green-400 text-green-800"
                          : idx === selected
                          ? "bg-red-100 border-red-400 text-red-800"
                          : "bg-white hover:bg-gray-100"
                        : "bg-white hover:bg-gray-100"
                    }`}
                    onClick={() => handleAnswer(idx)}
                    disabled={selected !== null}
                  >
                    {option}
                  </button>
                ))}
              </div>
              {selected !== null && (
                <div className="mt-6">
                  <p className="text-sm italic text-gray-600 mb-4">
                    Explanation: {question.explanation}
                  </p>
                  <button
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                    onClick={nextQuestion}
                  >
                    Next Question
                  </button>
                </div>
              )}
            </div>
          )
        )}
      </div>
    </div>
  );
}
