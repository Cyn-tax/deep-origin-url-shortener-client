import React, { useState } from 'react';
import { login, signUp } from '../api/authApi'; // Import your login and signup API functions
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface User {
  email: string;
  password: string;
}

interface Props {
  setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

const LoginForm: React.FC<Props> = ({ setLoggedIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signupEmail, setSignUpEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      const response = await login({ email, password });
      setLoggedIn(true);
      localStorage.setItem("user", JSON.stringify(response));
    } catch (error: any) {
      setError(error.message);
    }
  };

  const handleSignUp = async () => {
    try {
      await signUp({ email: signupEmail, password: signupPassword });
      toast.success("SignUp Successfully");
      setSignUpEmail("");
      setSignupPassword("");
    } catch (error: any) {
      setError(error.message);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-xl">
      <h1 className="text-3xl mb-6">Welcome to the Dashboard</h1>
      <div className="mb-6">
        <h2 className="text-xl mb-2">Login</h2>
        <input className="border rounded w-full px-3 py-2" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input className="border rounded w-full px-3 py-2 mt-2" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4" onClick={handleLogin}>Login</button>
      </div>
      <div>
        <h2 className="text-xl mb-2">Sign Up</h2>
        <input className="border rounded w-full px-3 py-2" required type="email" placeholder="Email" value={signupEmail} onChange={(e) => setSignUpEmail(e.target.value)} />
        <input className="border rounded w-full px-3 py-2 mt-2" type="password" placeholder="Password" value={signupPassword} onChange={(e) => setSignupPassword(e.target.value)} />
        <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4" onClick={handleSignUp}>Sign Up</button>
      </div>
      {error && <p className="text-red-500 mt-4">{error}</p>}
      <ToastContainer />
    </div>
  );
};

export default LoginForm;
