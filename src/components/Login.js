import React, { useState } from "react";

function Login() {

  const [ user, setUser ] = useState({
    email: '',
    password: ''
  })

  return (
    <div>
      <form>
        <input 
        type="email" 
        name="email" 
        id="email" />
      </form>
      <input 
      type="password" 
      name="password"
      id="password" />
    </div>
  );
}

export default Login;
