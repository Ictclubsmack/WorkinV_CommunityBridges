import React, { useState } from 'react';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import '../css/Dashboard.css';

const sampleProjects = [
  {
    id: 1,
    name: 'Clean Water Access',
    financial: {
      planned: 50000,
      received: 35000,
      donors: [
        { name: 'Donor A', amount: 20000 },
        { name: 'Donor B', amount: 15000 },
      ],
      allocation: [
        { name: 'Equipment', value: 15000 },
        { name: 'Labor', value: 10000 },
        { name: 'Logistics', value: 10000 },
      ],
    },
    human: {
      currentPhase: 'Implementation',
      phases: ['Planning', 'Sourcing', 'Implementation', 'Finalization'],
      completedTasks: ['Planning', 'Sourcing'],
      team: [
        { name: 'Alice', role: 'Engineer', status: 'In Progress' },
        { name: 'Bob', role: 'Coordinator', status: 'Completed' },
      ],
    },
    results: {
      timeline: 'Jan 2025 - Dec 2025',
      outreach: '5,000 people in rural Uganda',
      goals: [
        'Install 100 water pumps',
        'Train communities on sanitation',
        'Establish maintenance teams'
      ]
    }
  },
  // Add more sample projects as needed
];

const COLORS = ['#16a34a', '#22c55e', '#4ade80'];

export default function DashboardPage() {
  const [selectedProject, setSelectedProject] = useState(sampleProjects[0]);

  return (

    <div className="dashboard-container">
      <h1 className="dashboard-header">Community Dashboard</h1>
    <div className="p-6 space-y-8">
      <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>

      {/* Project Selector */}
      <div className="project-selector">
      <div className="bg-white shadow p-4 rounded-xl">
        <h2 className="text-xl font-semibold mb-4">Your Projects</h2>
        <table className="w-full text-left border">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2">Project</th>
              <th className="p-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {sampleProjects.map((proj) => (
              <tr key={proj.id} className="border-t">
                <td className="p-2">{proj.name}</td>
                <td className="p-2">
                  <button
                    onClick={() => setSelectedProject(proj)}
                    className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded"
                  >
                    Show Data
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </div>

      {/* Financial Aspect */}
      <div className="dashboard-sections">
    <div className="section-card">
      <h2 className="section-title">Financial Overview</h2>
      <div className="chart-container"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white shadow p-4 rounded-xl">
          <h3 className="text-lg font-bold mb-2">Financial Overview</h3>
          <p><strong>Planned Budget:</strong> ${selectedProject.financial.planned.toLocaleString()}</p>
          <p><strong>Funds Received:</strong> ${selectedProject.financial.received.toLocaleString()}</p>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={selectedProject.financial.donors}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="amount" fill="#16a34a" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="bg-white shadow p-4 rounded-xl">
          <h3 className="text-lg font-bold mb-4">Fund Allocation</h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={selectedProject.financial.allocation}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={80}
                label
              >
                {selectedProject.financial.allocation.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
      </div>
      </div>
     
      <div className="section-card">
      <h2 className="section-title">Human Resource Overview</h2>
      {/* Human Aspect */}
      <div className="bg-white shadow p-4 rounded-xl">
        <h3 className="text-lg font-bold mb-4">Human Resource Aspect</h3>
        <p><strong>Current Phase:</strong> {selectedProject.human.currentPhase}</p>
        <div className="mt-2">
          <h4 className="font-semibold">Project Phases</h4>
          <ul className="list-disc list-inside">
            {selectedProject.human.phases.map((phase, idx) => (
              <li key={idx} className={selectedProject.human.completedTasks.includes(phase) ? 'text-green-600' : 'text-gray-600'}>
                {phase}
              </li>
            ))}
          </ul>
        </div>
        </div>
        </div>
        <div className="mt-4">
          <h4 className="font-semibold">Team Members & Tasks</h4>
          <ul className="divide-y">
            {selectedProject.human.team.map((member, idx) => (
              <li key={idx} className="py-2">
                <span className="font-medium">{member.name}</span> — {member.role} <span className="text-sm text-gray-500">({member.status})</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
     

    <div className="section-card timeline-section">
      <h2 className="section-title">Timeline & Expected Results</h2>
      {/* Expected Results Aspect */}
      <div className="bg-white shadow p-4 rounded-xl">
        <h3 className="text-lg font-bold mb-4">Expected Results</h3>
        <p><strong>Timeline:</strong> {selectedProject.results.timeline}</p>
        <p><strong>Expected Outreach:</strong> {selectedProject.results.outreach}</p>
        <div className="mt-2">
          <h4 className="font-semibold">Major Goals</h4>
          <ul className="list-disc list-inside text-gray-700">
            {selectedProject.results.goals.map((goal, idx) => (
              <li key={idx}>{goal}</li>
            ))}
          </ul>
        </div>
        </div>
      </div>
    </div>
  );
}
