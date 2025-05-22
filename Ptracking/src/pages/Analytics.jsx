import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, RadialBarChart, RadialBar, Legend } from "recharts";

const outreachEfficiencyData = [
  { name: "Outreach", value: 78, fill: "#10b981" },
];

const expenditureEfficiencyData = [
  { name: "NGO A", costPerBeneficiary: 20 },
  { name: "NGO B", costPerBeneficiary: 35 },
];

const goalData = [
  { goal: "Water Wells", completed: 6, planned: 8 },
  { goal: "Food Supplies", completed: 10, planned: 12 },
];

const timelineData = [
  { phase: "Planning", expected: 100, actual: 100 },
  { phase: "Implementation", expected: 80, actual: 60 },
  { phase: "Evaluation", expected: 30, actual: 10 },
];

export default function NGOAnalytics() {
  return (
    <div className="p-6 space-y-8">
      <h1 className="text-2xl font-bold">NGO Performance Analytics</h1>

      {/* Outreach Efficiency */}
      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-lg font-semibold mb-2">Outreach Efficiency</h2>
        <RadialBarChart width={300} height={300} innerRadius="70%" outerRadius="100%" data={outreachEfficiencyData}>
          <RadialBar minAngle={15} label background clockWise dataKey="value" />
          <Legend iconSize={10} layout="vertical" verticalAlign="middle" align="right" />
        </RadialBarChart>
      </div>

      {/* Timeline Comparison */}
      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-lg font-semibold mb-2">Timeline: Projected vs Actual</h2>
        <LineChart width={600} height={300} data={timelineData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="phase" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="expected" stroke="#3b82f6" strokeWidth={2} />
          <Line type="monotone" dataKey="actual" stroke="#ef4444" strokeWidth={2} />
        </LineChart>
      </div>

      {/* Goal Achievement Summary */}
      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-lg font-semibold mb-2">Goals Achievement vs Workload</h2>
        <ul className="space-y-2">
          {goalData.map((goal, index) => (
            <li key={index} className="flex justify-between">
              <span>{goal.goal}</span>
              <span>
                {goal.completed}/{goal.planned} completed
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
