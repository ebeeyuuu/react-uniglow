"use client";

import { Progress } from "../../UI/Progress";

const applications = [
  {
    university: "Harvard University",
    progress: 85,
    status: "Documents Under Review",
  },
  {
    university: "Stanford University",
    progress: 60,
    status: "Awaiting References",
  },
  {
    university: "MIT",
    progress: 40,
    status: "Essay Wiriting",
  },
]

const ApplicationProgress = () => {
  return (
    <div className="px-8 py-6 bg-white/[0.02] border-white/5 border rounded-2xl">
      <h2 className="text-base lg:text-xl font-semibold mb-6">Application Progress</h2>
      <div className="space-y-6">
        {applications.map((app, index) => (
          <div key={index} className="space-y-2">
            <div className="flex justify-between items-center mb-2">
              <span className="font-medium">{app.university}</span>
              <span className="text-sm text-white/60">{app.progress}%</span>
            </div>
            <Progress value={app.progress} className="bg-white/5" />
            <p className="text-sm text-white/60">{app.status}</p>
          </div>
        ))}
      </div>
    </div>
  )
};

export default ApplicationProgress;
