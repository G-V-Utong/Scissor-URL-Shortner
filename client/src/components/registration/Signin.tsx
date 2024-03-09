import "./registration.scss";
import "../../style/components/_button.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Dispatch } from 'redux';
import {useDispatch } from 'react-redux'
import { LoginPayload, signin } from "../../redux/authSlice";


// Functional component for the Signin form
const Signin = () => {
    const dispatch: Dispatch<any> = useDispatch();
    const [state, setState ] = useState<LoginPayload>({
        password: "",
        usernameOrEmail: "",
      });
    
      // Handling form submission
      const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(signin(state));
      }
    
    //   // Handling input changes and updating the state
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setState({
        ...state,
        [e.target.name]: e.target.value
      })}
    //   // JSX for the Signin component
  return (
    <div>
      <div className="signin-form">
        <div className="signin-form__wrapper">
          <form className="form" onSubmit={handleSubmit}>
            <h1>Sign In</h1>

            <div className="form-containers">
              <input
                type="text"
                name="usernameOrEmail"
                value={state.usernameOrEmail}
                onChange={handleChange}
                id=""
                placeholder="Enter Username or Email"
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
            <div className="body__buttons">
            <button className="body__buttons__primary" type='submit'>Sign in</button>
            </div>
            </div>
            <p>Don't have an account? <Link to={"/signup"}><span>Sign up</span></Link></p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signin;
