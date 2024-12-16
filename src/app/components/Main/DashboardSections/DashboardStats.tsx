"use client";

import { BsArrowUp, BsArrowDown } from "react-icons/bs";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: 'Jan', value: 40 },
  { name: 'Feb', value: 30 },
  { name: 'Mar', value: 45 },
  { name: 'Apr', value: 50 },
  { name: 'May', value: 35 },
  { name: 'Jun', value: 55 },
];

const stats = [
  {
    label: "Applications Submitted",
    value: "8",
    change: "+2",
    trend: "up"
  },
  {
    label: "Universities Shortlisted",
    value: "15",
    change: "+3",
    trend: "up"
  },
  {
    label: "Days Until Next Deadline",
    value: "12",
    change: "-2",
    trend: "down"
  }
];

const DashboardStats = () => {
  return (
    <div className="px-8 py-6 rounded-2xl bg-white/[0.02] border border-white/5">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {stats.map((stat, index) => (
          <div key={index} className="space-y-2">
            <p className="text-white/60 text-sm">{stat.label}</p>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold">{stat.value}</span>
              <span className={`flex items-center text-sm ${stat.trend === 'up' ? 'text-green-400' : 'text-red-400'
                }`}>
                {stat.trend === 'up' ? <BsArrowUp /> : <BsArrowDown />}
                {stat.change}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="h-[200px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#333" />
            <XAxis dataKey="name" stroke="#666" />
            <YAxis stroke="#666" />
            <Tooltip
              contentStyle={{
                backgroundColor: '#111',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '8px'
              }}
            />
            <Area
              type="monotone"
              dataKey="value"
              stroke="#8884d8"
              fillOpacity={1}
              fill="url(#colorValue)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default DashboardStats;
