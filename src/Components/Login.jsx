import { useState } from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../firebase";

function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin({ email });
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      onLogin({
        email: user.email,
        name: user.displayName,
        photoURL: user.photoURL,
        uid: user.uid,
      });
    } catch (err) {
      console.error("Google login error", err);
      alert("Google login failed");
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h1 className="login-title">Disney+ Hotstar Clone</h1>
        <p className="login-subtitle">
          Watch your favourite movies, shows and more.
        </p>

        <form onSubmit={handleSubmit} className="login-form">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="login-input"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="login-input"
          />

          <button type="submit" className="login-submit-btn">
            Login
          </button>
        </form>

        <div className="login-divider">
          <span>OR</span>
        </div>

        <button onClick={handleGoogleLogin} className="login-google-btn">
          Continue with Google
        </button>

        <p className="login-disclaimer">
          This is a demo clone for learning purposes only.
        </p>
      </div>
    </div>
  );
}

export default Login;