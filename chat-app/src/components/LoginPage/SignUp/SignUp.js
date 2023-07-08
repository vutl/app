import React, { useState } from 'react';

function SignUp () {
  //const [username, setUsername] = useState('');
  //const [password, setPassword] = useState('');
  

//   const handleUsernameChange = (event) => {
//     setUsername(event.target.value);
//   };


//   const handlePasswordChange = (event) => {
//     setPassword(event.target.value);
//   };

  //Transfer data vao backend
  const handleSubmit = (event) => {
    const user ={
      username:'appdata',
      password:'tuananh0304'
    }
    event.preventDefault();
   fetch ('/api', {
    method:'POST',
    headers: {
      'Content-Type':'application/json'
    },
    body: JSON.stringify(user)
   }).then(respone => respone.json())
   .catch(error => {
    console.error(error);
   });
  }
    // Perform your desired logic, 
    //such as validating the credentials or making an API call to store the data

  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>

    </div>
  );
};

export default SignUp;