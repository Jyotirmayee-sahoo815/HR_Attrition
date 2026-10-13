import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

const API_BASE = import.meta.env.VITE_API_BASE_URL || '/api';

// Temporary page that proves client -> proxy -> server wiring works.
// Replaced by the real layout and pages in Stage 3.
function SetupCheck() {
  const [status, setStatus] = useState('checking...');

  useEffect(() => {
    fetch(`${API_BASE}/health`)
      .then((res) => res.json())
      .then((data) => setStatus(data.status))
      .catch(() => setStatus('unreachable'));
  }, []);

  return (
    <main className="mx-auto max-w-xl p-8">
      <h1 className="text-2xl font-bold">HR Attrition & Workspace Analytics</h1>
      <p className="mt-2 text-slate-600 dark:text-slate-300">
        API status: <span className="font-mono font-semibold">{status}</span>
      </p>
    </main>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="*" element={<SetupCheck />} />
    </Routes>
  );
}
