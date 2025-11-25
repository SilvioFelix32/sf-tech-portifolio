import React, { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadingComplete }) => {
  const [lines, setLines] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState(0);

  const bootSequence = [
    "$ Booting System v1.0...",
    "$ Checking dependencies...",
    "$ Compiling creativity...",
    "$ Running code sanity checks...",
    "$ Welcome, developer.",
    "$ Starting graphical interface...",
    "$ System boot complete ✔",
    "$ Redirecting to interface..."
  ];

  useEffect(() => {
    const addLine = () => {
      if (currentLine < bootSequence.length) {
        setLines(prev => [...prev, bootSequence[currentLine]]);
        setCurrentLine(prev => prev + 1);
      } else {
        setTimeout(() => {
          onLoadingComplete();
        }, 3500);
      }
    };

    const timer = setTimeout(addLine, currentLine === 0 ? 500 : 200);
    return () => clearTimeout(timer);
  }, [currentLine, onLoadingComplete]);

  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
      <div className="w-full max-w-3xl p-8 font-mono text-sm md:text-base">
        {lines.map((line, index) => (
          <div
            key={index}
            className="text-green-500 opacity-0 animate-fade-in"
            style={{
              animationDelay: `${index * 0.1}s`
            }}
          >
            {line}
            {index === lines.length - 1 && (
              <span className="inline-block w-2 h-4 ml-1 bg-green-500 animate-blink" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LoadingScreen; 