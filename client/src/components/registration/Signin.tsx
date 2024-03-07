import "./registration.scss";
// import "../../styles/components/_button.scss";
// import { useState } from "react";
// import {useDispatch } from 'react-redux'
// import { signin } from "../../redux/authSlice";


// Functional component for the Signin form
const Signin = () => {
    // // Redux hook to dispatch actions
    // const dispatch = useDispatch();
    // // State to manage form input values
    // const [state, setState] = useState({
    //     email: "",
    //     password: "",
    //     confirmPassword: "",
    //   });
    
    //   // Handling form submission
    //   const handleSubmit = (e) => {
    //     e.preventDefault();
    //     // Dispatching signin action with user credentials
    //     dispatch(
    //       signin({
    //         password: state.password,
    //         email: state.email
    //       })
    //     )
    //   }
    
    //   // Handling input changes and updating the state
    //   const handleChange = (e) => {
    //     setState({
    //       ...state,
    //       [e.target.name]: e.target.value
    //     })
    //   }
    //   // JSX for the Signin component
  return (
    <div>
      <div className="signin-form">
        <div className="signin-form__wrapper">
          <form className="form">
            <h4>Sign In</h4>

            <div className="form-container">
              <input
                type="email"
                name="email"
                // value={state.email}
                id=""
                placeholder="Enter Email"
                required
              />
            </div>

            <div className="form-container">
              <input
                type="password"
                name="password"
                id=""
                placeholder="Enter Password"
                required
              />
            </div>

            <div className="form-container"> 
            <div className="body__buttons">
            <button className="body__buttons__primary">Sign in</button>
            </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signin;
