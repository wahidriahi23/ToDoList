import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useNavigate } from 'react-router-dom';

const ToDo = () => {
    const navigate = useNavigate();
  return (
    <div className="bg">
    <main className="form-signin">
      <h1 className="h3">Login</h1>
      <form action="">
        <div className="form-floating">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            required=""
          />
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
            required=""
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>
        <div className="checkbox mb-3">
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              defaultValue={1}
              name="remember_me"
              id="rememberMeSwitch"
            />
            <label className="form-check-label" htmlFor="rememberMeSwitch">
              {" "}
              Remember me
            </label>
          </div>
        </div>
        <button className="w-100 btn btn-lg" type="submit" onClick={()=>navigate("/List")}>
          Sign in
        </button>
      </form>
    </main>
    </div>
  )
}

export default ToDo