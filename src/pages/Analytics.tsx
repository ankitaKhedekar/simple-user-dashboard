// src/pages/Analytics.tsx
import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Jan", users: 200 },
  { name: "Feb", users: 300 },
  { name: "Mar", users: 250 },
  { name: "Apr", users: 400 },
  { name: "May", users: 350 },
];

const Analytics = () => {
  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">User Analytics</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="users" stroke="#2563eb" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Analytics;
