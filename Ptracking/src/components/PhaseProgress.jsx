// components/PhaseProgress.jsx
import React from 'react';

const PhaseProgress = ({ currentPhase, phases }) => {
  return (
    <div className="bg-white rounded-2xl shadow p-4 w-full">
      <h2 className="text-xl font-semibold mb-4">Project Phase Progress</h2>
      <div className="flex flex-col gap-4">
        {phases.map((phase, index) => {
          const isCompleted = index < phases.indexOf(currentPhase);
          const isActive = index === phases.indexOf(currentPhase);

          return (
            <div key={index} className="flex items-center">
              <div
                className={`w-4 h-4 rounded-full mr-3 ${
                  isCompleted
                    ? 'bg-green-500'
                    : isActive
                    ? 'bg-yellow-500'
                    : 'bg-gray-300'
                }`}
              ></div>
              <span className={`${
                isCompleted || isActive ? 'text-gray-800' : 'text-gray-400'
              }`}>{phase}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PhaseProgress;
