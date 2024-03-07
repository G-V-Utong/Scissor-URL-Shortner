import "./registration.scss";
// import "../../styles/components/_button.scss";
// import { useState } from "react";
// import {useDispatch } from 'react-redux'
// import { register } from "../../redux/authSlice";

// Functional component for the Signup form
const Signup = () => {
//   // Redux hook to dispatch actions
//   const dispatch = useDispatch();

//    // State to manage form input values
//   const [state, setState] = useState({
//     email: "",
//     password: "",
//     confirmPassword: "",
//     firstName: "",
//     lastName: ""
//   });

//     // Handling form submission
//   const handleSubmit = (e) => {
//       e.preventDefault();
//       // Dispatching register action with user registration details
//       dispatch(
//         register({
//           firstName: state.firstName,
//           lastName: state.lastName,
//           password: state.password,
//           email: state.email
//         })
//       )
//   }

//   // Handling input changes and updating the state
//   const handleChange = (e) => {
//     setState({
//       ...state,
//       [e.target.name]: e.target.value
//     })
//   }
  
  // JSX for the Signup component
  return (
    <div>
      <div className="signin-form">
        <div className="signin-form__wrapper">
          <form className="form">
            <h4>Sign up</h4>
            <div className="form-container">
              <input
                type="text"
                placeholder="Enter your first name"
                name="firstName"
                // value={state.firstName}
                // onChange={handleChange}
                required
              />
            </div>
            <div className="form-container">
              <input
                type="text"
                placeholder="Enter your last name"
                name="lastName"
                // value={state.lastName}
                // onChange={handleChange}
                required
              />
            </div>

            <div className="form-container">
              <input
                type="email"
                name="email"
                // value={state.email}
                id=""
                placeholder="Enter Email"
                // onChange={handleChange}
                required
              />
            </div>

            <div className="form-container">
              <input
                type="password"
                name="password"
                id=""
                placeholder="Enter Password"
                // value={state.password}
                // onChange={handleChange}
                required
              />
            </div>

            <div className="form-container">
              <input
                type="password"
                name="confirmPassword"
                id=""
                placeholder="Confirm Password"
                required
              />
            </div>

            <div className="form-container">
              <div className="body__buttons">
                <button className="body__buttons__primary">Sign Up</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
