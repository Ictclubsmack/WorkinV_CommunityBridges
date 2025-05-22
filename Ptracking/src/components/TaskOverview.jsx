// components/TasksOverview.jsx
import React from 'react';

const TasksOverview = ({ tasks }) => {
  return (
    <div className="bg-white rounded-2xl shadow p-4 w-full">
      <h2 className="text-xl font-semibold mb-4">Team Task Overview</h2>
      <div className="space-y-4">
        {tasks.length > 0 ? tasks.map((task, index) => (
          <div
            key={index}
            className="p-3 rounded-lg border border-gray-200 bg-gray-50 hover:bg-gray-100 transition"
          >
            <div className="flex justify-between items-center mb-1">
              <span className="font-medium text-gray-800">{task.name}</span>
              <span className={`text-sm px-2 py-1 rounded-full ${
                task.status === 'Completed'
                  ? 'bg-green-100 text-green-700'
                  : task.status === 'In Progress'
                  ? 'bg-yellow-100 text-yellow-700'
                  : 'bg-red-100 text-red-700'
              }`}>
                {task.status}
              </span>
            </div>
            <p className="text-sm text-gray-600">{task.role} - {task.assignedTo}</p>
          </div>
        )) : (
          <p className="text-gray-500">No tasks available.</p>
        )}
      </div>
    </div>
  );
};

export default TasksOverview;
