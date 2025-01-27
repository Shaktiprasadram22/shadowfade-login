import { useState } from "react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

const AuthCard = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="w-full max-w-md p-8 rounded-lg bg-auth-card backdrop-blur-auth border border-auth-border">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">
          {isLogin ? "Welcome back" : "Create account"}
        </h1>
        <p className="text-gray-300">
          {isLogin
            ? "Enter your credentials to access your account"
            : "Fill in the details below to get started"}
        </p>
      </div>

      {isLogin ? <LoginForm /> : <SignupForm />}

      <div className="mt-6 text-center">
        <p className="text-gray-400">
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-white hover:text-purple-400 transition-colors"
          >
            {isLogin ? "Sign up" : "Log in"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default AuthCard;