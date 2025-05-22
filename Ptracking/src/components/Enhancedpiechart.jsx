import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const COLORS = ['#10b981', '#3b82f6', '#f59e0b', '#ef4444'];

const fundData = [
  { name: 'Infrastructure', value: 30000 },
  { name: 'Training', value: 15000 },
  { name: 'Logistics', value: 10000 },
  { name: 'Miscellaneous', value: 5000 },
];

const totalBudget = fundData.reduce((sum, item) => sum + item.value, 0);

function BudgetPieChart() {
  return (
    <div className="relative w-full max-w-md mx-auto">
      <PieChart width={400} height={400}>
        <Pie
          data={fundData}
          cx="50%"
          cy="50%"
          innerRadius={80}
          outerRadius={120}
          paddingAngle={4}
          dataKey="value"
        >
          {fundData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend layout="vertical" align="right" verticalAlign="middle" />
      </PieChart>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h2 className="text-lg font-bold">Total Budget</h2>
        <p className="text-xl text-green-600">${totalBudget.toLocaleString()}</p>
      </div>
    </div>
  );
}
