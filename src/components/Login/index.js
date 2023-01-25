import "./login.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../Firebase/firebaseConfig";

import toastr from "toastr";
import "toastr/build/toastr.min.css";
export default function Login() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();
  let linkTo = "/";
  if (localStorage.getItem('new_plan') === "true") linkTo = "/main";

  if (localStorage.getItem("bathroom_login") === "true") {
    //navigate('/');
    window.location.href = "/main";
    //window.location.reload();
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    var { name, password } = document.forms[0];

    const q = query(collection(db, "user_data"));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      let data = doc.data();
      if (data.name === name.value && data.password === password.value) {
        localStorage.setItem("bathroom_login", true);
        localStorage.setItem("userId", doc.id);

        if (data.isOwner === 1) localStorage.setItem("bathroom_isOwner", true);
        else localStorage.setItem("bathroom_isOwner", false);
      }
    });
    if (localStorage.getItem("bathroom_login") === "true") {
      if (localStorage.getItem('new_plan') === "true") {
        window.location.href = "/main";
      }
      else {
        window.location.href = "/";
      }
      return;
    }

    toastr.options = {
      positionClass: "toast-top-right",
      hideDuration: 300,
      timeOut: 2000,
    };
    toastr.clear();
    setTimeout(() => toastr.error(`Username and password not correct`), 300);
    //navigate('/');
    // Find user login info
  };

  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <input
            className="textinput"
            type="text"
            name="name"
            required
            placeholder="Email address"
          />
        </div>
        <div className="input-container">
          <input
            className="textinput"
            type="password"
            name="password"
            required
            placeholder="Password"
          />
        </div>
        <div className="button-container">
          <input className="sumbit" type="submit" value="Login" />
        </div>
      </form>
    </div>
  );

  return (
    <div className="login">
      <div className="main_login">
        <Link to={linkTo} className="return">
          <i className="fa fa-arrow-left"></i>
          <span> Return to homepage</span>
        </Link>
        <div className="main_content">
          <div className="left_page">
            <img src="./logo3.png" alt="" />
            <div className="left_page_cotent">
              <h2>Welcome</h2>
              <p>Login to your account below</p>
              {isSubmitted ? (
                <div>User is successfully logged in</div>
              ) : (
                renderForm
              )}
            </div>
          </div>
          <div className="right_page">
            <div className='main_right'>
              <div className="first_title">
                <h1>Have you signed up?</h1>
                <p>
                  Applying for easy online access and save your bathroom design.
                </p>
              </div>
              <div className="second_title">
                <h3>Trade Account</h3>
                <a>Apply now</a>
              </div>
              <div className="three_title">
                <h3>Personal Account</h3>
                <p>For non-trade customers</p>
                <ul>
                  <li>Save and get a quote on your design.</li>
                  <li>See your past purchases</li>
                </ul>
                <Link to="/register">Register now</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
