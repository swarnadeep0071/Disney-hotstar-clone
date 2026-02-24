import {useState} from "react";
import { signInWithPopup } from "firebase/auth";
import {auth,googleProvider} from "../firebase";


function Login({onLogin}){

    const [email,setEmail] = useState("");
    const [password, setPassword] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();
        onLogin({email});
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
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
            <input type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required 
            className="w-full bg-[#111827] text-white px-3 py-2 rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword (e.target.value)}
            required
            className="w-full bg-[#111827] text-white px-3 py-2 rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button type="submit"> Login  </button>
            </form>

            <hr className="my-4"/>

            <button
  onClick={handleGoogleLogin}
  className=" bg-[#4285F4] hover:bg-[#357ae8] text-white px-4 py-2 rounded mt-2"
>
  Continue With Google
</button>
                
            
        </div>
    );

}

export default Login;
