import "./registration.scss";
import "../../style/components/_button.scss";
import { Dispatch } from 'redux';
import { Link } from "react-router-dom";
import { useState } from "react";
import {useDispatch } from 'react-redux';
import { RegisterPayload, register } from "../../redux/authSlice";

// Functional component for the Signup form
const Signup = () => {
  // Redux hook to dispatch actions
  const dispatch: Dispatch<any> = useDispatch();

   // State to manage form input values
  const [state, setState] = useState<RegisterPayload>({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    username: ""
  });

    // Handling form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(register(state));
  }

  // Handling input changes and updating the state
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }
  
  // JSX for the Signup component
  return (
    <div>
      <div className="signin-form">
        <div className="signin-form__wrapper">
          <form className="form" onSubmit={handleSubmit}>
            <h1>Sign up</h1>
            <div className="form-containers">
              <input
                type="text"
                placeholder="Enter your first name"
                name="firstName"
                value={state.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-containers">
              <input
                type="text"
                placeholder="Enter your last name"
                name="lastName"
                value={state.lastName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-containers">
              <input
                type="email"
                name="email"
                value={state.email}
                id=""
                placeholder="Enter Email"
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-containers">
              <input
                type="text"
                name="username"
                value={state.username}
                id=""
                placeholder="Choose a unique username"
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-containers">
              <input
                type="password"
                name="password"
                id=""
                placeholder="Enter Password"
                value={state.password}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-containers">
              <input
                type="password"
                name="confirmPassword"
                id=""
                placeholder="Confirm Password"
                required
              />
            </div>

            <div className="form-containers">
              <div className="body__buttons">
                <button type='submit' className="body__buttons__primary">Sign Up</button>
              </div>
            </div>
            <p>Already have an account? <Link to={"/signin"}><span>Sign in</span></Link></p>
          </form>
          
        </div>
      </div>
    </div>
  );
};

export default Signup;
