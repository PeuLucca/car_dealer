import React, { useEffect, useState } from 'react';
import { useSignIn, useAuthUser } from 'react-auth-kit';
import { getAuth } from "../backend/api";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [isAuth, setIsAuth] = useState({ response: null, message: "" });

  const signIn = useSignIn();
  const authUser = useAuthUser();
  
  const navigate = useNavigate();

  const handleEmail = (event) => {
    setEmail(event.target.value);
  }

  const handlePassword = (event) => {
      setPassword(event.target.value);
  }

  const checkAuth = async (user) => {
    const authData = await getAuth(user);
    setIsAuth(authData);

    return (authData);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if( !email || !password ) {
      alert("Email/Password are empty. Please try again with the data requested.");
    } else {
      const auth = await checkAuth({ email, password });
      if ( auth.response === true ) {
        alert(`${auth.message}`);
        // create toker
        signIn({
          token: `${email}_${password}`,
          expiresIn: 3600,
          authState: { email: email },
        });

        navigate("/home")

      } else {
        alert(`${auth.message}`);
        setEmail("");
        setPassword("");
      }
    }
  }

  useEffect(() => {
    const user = authUser();
    console.log('Authenticated user:', user);
  }, [authUser]);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ width: '300px', padding: '20px', boxShadow: '0px 0px 10px 0px #aaa' }}>
        <h2 style={{ textAlign: 'center' }}>Login</h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '15px' }}>
            <input
              placeholder="Insira o Email"
              value={email}
              onChange={handleEmail}
              type="email"
              name="email"
              style={{ width: '100%', padding: '10px', boxSizing: 'border-box' }}
            />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <input
              placeholder="Insira a senha"
              type="password"
              value={password}
              onChange={handlePassword}
              name="password"
              style={{ width: '100%', padding: '10px', boxSizing: 'border-box' }}
            />
          </div>
          <div style={{ textAlign: 'center' }}>
            <button type="submit" style={{ height: '40px', backgroundColor: '#4CAF50', color: 'white', border: 'none', width: '100%', cursor: 'pointer' }}>Entrar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
