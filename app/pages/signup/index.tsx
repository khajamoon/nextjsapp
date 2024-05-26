// pages/signup/index.js
'use client'
import { useState } from 'react';
import Navbar from '../../components/Navbar';

const axios = require('axios');

 
export default function SignUp() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [welcomeMessage, setWelcomeMessage] = useState('');
  const [payload, setPayload] = useState<any>(null);
 
  const handleSignUp = () => {


      if (username &&password&&confirmPassword) {
          // Validate inputs
          if (password !== confirmPassword) {


              setWelcomeMessage(`your Password does not match, !`);
              return;

          }

          // Create payload
          const id = generateUniqueId(); // You need to implement this function
          const newPayload = { id, username, password };
          setPayload(newPayload);
          console.log(payload);
          const payloadData = {
            id: id,
            username,
            password
          };
           let data = JSON.stringify(payloadData)
    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'http://54.227.88.54:8000/api/user',
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };


    axios.request(config)
      .then((response:any) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error:any) => {
        console.log(error);
      });
          setUsername('')
          setPassword('')
          setConfirmPassword('')

          // Display welcome message
          setWelcomeMessage(`Welcome, ${username}!`);

      }
      else
      {
        setWelcomeMessage(`Input fileds must be fill  `);

      }
  };

    const generateUniqueId = () => {

       return Math.floor(Math.random() * 10000)

    }
 
  return (
    <div>
      <Navbar />
      <h1>Sign Up</h1>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <input
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <br />
      <button onClick={handleSignUp}>Sign Up</button>
      {welcomeMessage && <p>{welcomeMessage}</p>}
    </div>
  );
}

 