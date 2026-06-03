import React, { useState } from 'react';
import { Lock } from 'lucide-react';

interface PasswordScreenProps {
  onSuccess: (password: string) => void;
}

const PasswordScreen: React.FC<PasswordScreenProps> = ({ onSuccess }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (btoa(password) === 'YWRtaXJhbHB1bms=') {
      onSuccess(password);
    } else {
      setError(true);
      setTimeout(() => setError(false), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-slate-900 rounded-2xl shadow-xl p-8 border border-slate-800">
        <div className="flex flex-col items-center mb-8">
          <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mb-4">
            <Lock className="w-8 h-8 text-blue-500" />
          </div>
          <h2 className="text-2xl font-bold text-white text-center">Restricted Access</h2>
          <p className="text-slate-400 text-center mt-2">Please enter the password to continue</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all placeholder-slate-500"
              placeholder="Enter password..."
              autoFocus
            />
          </div>
          
          {error && (
            <div className="text-red-400 text-sm text-center animate-pulse">
              Incorrect password. Please try again.
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-xl transition-colors duration-200 flex justify-center items-center gap-2"
          >
            Access Site
          </button>
        </form>
      </div>
    </div>
  );
};

export default PasswordScreen;
