"use client";

import { useState } from "react";

export default function Sidebar() {
  const [open, setOpen] = useState(true);

  return (
    <div
      className={`bg-white shadow-md transition-all duration-300 ${
        open ? "w-64" : "w-20"
      }`}
    >
      <div className="p-4 flex justify-between items-center">
        <h2 className="font-bold text-lg">{open ? "CRMbuddy.ai" : "CB"}</h2>
        <button onClick={() => setOpen(!open)} className="text-gray-500">
          ☰
        </button>
      </div>
      <nav className="p-4">
        <ul className="space-y-3 text-gray-700">
          <li>🏠 Dashboard</li>
          <li>📋 Leads</li>
          <li>📊 Analytics</li>
          <li>⚙️ Settings</li>
        </ul>
      </nav>
    </div>
  );
}
