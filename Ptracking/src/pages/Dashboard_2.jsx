// src/pages/Dashboard.jsx
import React, { useState } from 'react';
import BudgetPieChart from '../components/charts/BudgetPieChart';
import ProjectTimeline from '../components/timeline/ProjectTimeline';
import ProjectSelector from '../components/ui/ProjectSelector';
import TasksOverview from '../components/charts/TasksOverview';
import PhaseProgress from '../components/charts/PhaseProgress';

const mockProjects = [
  {
    id: 1,
    name: 'Clean Water Access',
    budget: [
      { name: 'Infrastructure', value: 30000 },
      { name: 'Training', value: 15000 },
      { name: 'Logistics', value: 10000 },
      { name: 'Miscellaneous', value: 5000 },
    ],
    timeline: [
      { title: 'Initiation', date: 'Jan 2024', description: 'Concept and planning' },
      { title: 'Phase 1 - Setup', date: 'Feb–Mar 2024', description: 'Infrastructure setup' },
      { title: 'Phase 2 - Community Training', date: 'Apr–May 2024', description: 'Outreach and training' },
      { title: 'Phase 3 - Implementation', date: 'June 2024', description: 'Service rollout' },
      { title: 'Expected Completion', date: 'Aug 2024', description: 'Evaluation and handover' },
    ],
    tasks: {
      completed: ['Survey', 'Planning'],
      pending: ['Deployment', 'Evaluation'],
      team: [
        { name: 'Jane Doe', task: 'Survey', status: 'Completed' },
        { name: 'John Smith', task: 'Deployment', status: 'In Progress' },
      ],
    },
  },
  // Add more project mock data as needed
];

const Dashboard = () => {
  const [selectedProject, setSelectedProject] = useState(mockProjects[0]);

  return (
    <div className="p-6 space-y-8">
      <h1 className="text-2xl font-bold text-green-800">NGO Project Dashboard</h1>
      <ProjectSelector
        projects={mockProjects}
        onSelect={setSelectedProject}
      />

      {/* Financial Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded-2xl shadow">
          <h2 className="text-xl font-semibold mb-2">Financial Allocation</h2>
          <BudgetPieChart budget={selectedProject.budget} />
        </div>

        {/* Human Aspect */}
        <div className="bg-white p-4 rounded-2xl shadow">
          <h2 className="text-xl font-semibold mb-2">Team & Task Progress</h2>
          <PhaseProgress phases={selectedProject.timeline} />
          <TasksOverview tasks={selectedProject.tasks} />
        </div>
      </div>

      {/* Expected Results - Timeline */}
      <div className="bg-white p-4 rounded-2xl shadow">
        <h2 className="text-xl font-semibold mb-2">Project Timeline</h2>
        <ProjectTimeline timeline={selectedProject.timeline} />
      </div>
    </div>
  );
};

export default Dashboard;
