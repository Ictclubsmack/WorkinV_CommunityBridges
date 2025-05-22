import { RadialBarChart, RadialBar, Legend } from 'recharts';

const data = [{ name: 'Outreach', value: 78, fill: '#10b981' }];

export function EfficiencyCharts({ data }) {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-lg font-semibold mb-2">Outreach Efficiency</h2>
      <RadialBarChart width={300} height={300} innerRadius="70%" outerRadius="100%" data={data}>
        <RadialBar minAngle={15} label background clockWise dataKey="value" />
        <Legend iconSize={10} layout="vertical" verticalAlign="middle" align="right" />
      </RadialBarChart>
    </div>
  );
}
