import React, { useState } from 'react';
import {useNavigate, Link} from 'react-router-dom';

function LoginPage () {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const info_customer = [{
    username_customer:'appdata',
    password_customer:'tuananh0304'
  },{
    username_customer: 'vutl',
    password_customer:'vudien6k1'
  }]

  
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };


  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    info_customer.map((user) => {
      if (user.username_customer === username && user.password_customer === password) {
         navigate('/Chat')
       }
     })
    // Perform your desired logic, 
    //such as validating the credentials or making an API call to store the data
  };

  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button type="submit">Login</button>
      </form>

      <Link to='/SignUp'>SignUp</Link>
    </div>
  );
};

export default LoginPage;