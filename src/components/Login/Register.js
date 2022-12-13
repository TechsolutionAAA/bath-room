import './login.css'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../Firebase/firebaseConfig";

import toastr from "toastr";
import "toastr/build/toastr.min.css";

export default function Register() {

    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    let linkTo = "/";
    if (localStorage.getItem('new_plan') === "true") linkTo = "/main";

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        var { firstname, lastname, postcode, email, password, passwordConfirm } = document.forms[0];

        if (firstname.value === "") {
            toastr.options = {
                positionClass: "toast-top-right",
                hideDuration: 300,
                timeOut: 2000,
            };
            toastr.clear();
            setTimeout(() => toastr.error(`Insert First Name!`), 300);
            return;
        }
        if (lastname.value === "") {
            toastr.options = {
                positionClass: "toast-top-right",
                hideDuration: 300,
                timeOut: 2000,
            };
            toastr.clear();
            setTimeout(() => toastr.error(`Insert Last Name!`), 300);
            return;
        }
        if (email.value === "") {
            toastr.options = {
                positionClass: "toast-top-right",
                hideDuration: 300,
                timeOut: 2000,
            };
            toastr.clear();
            setTimeout(() => toastr.error(`Insert Email Address!`), 300);
            return;
        }
        if (postcode.value === "") {
            toastr.options = {
                positionClass: "toast-top-right",
                hideDuration: 300,
                timeOut: 2000,
            };
            toastr.clear();
            setTimeout(() => toastr.error(`Insert Postcode!`), 300);
            return;
        }
        if (password.value === "") {
            toastr.options = {
                positionClass: "toast-top-right",
                hideDuration: 300,
                timeOut: 2000,
            };
            toastr.clear();
            setTimeout(() => toastr.error(`Insert User Password!`), 300);
            return;
        }

        if (password.value !== passwordConfirm.value) {
            toastr.options = {
                positionClass: "toast-top-right",
                hideDuration: 300,
                timeOut: 2000,
            };
            toastr.clear();
            setTimeout(() => toastr.error(`Password does not match!`), 300);
            return;
        }
        let data = {
            firstname: firstname.value,
            lastname: lastname.value,
            email: email.value,
            postcode: postcode.value,
            password: password.value,
            isOwner: 0
        }
        const docRef = await addDoc(collection(db, "user_data"), data);

        console.log("Document written with ID: ", docRef.id);

        toastr.options = {
            positionClass: "toast-top-right",
            hideDuration: 300,
            timeOut: 2000,
        };
        toastr.clear();
        setTimeout(() => toastr.success(`Sucessfully done`), 300);

        navigate('/login');
        // Compare user info
    };

    const renderForm = (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <div className='fullname'>
                    <div className="input-container">
                        <input className='textinput' type="text" name="firstname" required placeholder='First Name' />
                    </div>
                    <div className="input-container">
                        <input className='textinput' type="text" name="lastname" required placeholder='Last Name' />
                    </div>
                </div>
                <div className="input-container">
                    <input className='textinput' type="text" name="email" required placeholder='Email address' />
                </div>
                <div className="input-container">
                    <input className='textinput' type="text" name="postcode" required placeholder='Suburb / Postcode' />
                </div>
                <div className="input-container">
                    <input className='textinput' type="password" name="password" required placeholder='Password' />
                </div>
                <div className="input-container">
                    <input className='textinput' type="password" name="passwordConfirm" required placeholder='Confirm Password' />
                </div>
                <div className="button-container">
                    <input className="sumbit" type="submit" value="Register" />
                </div>
            </form>
        </div>
    );

    return (
        <div className="login">
            <div className='main_login'>
                <Link to={linkTo} className='return'>
                    <i className='fa fa-arrow-left'></i>
                    <span> Return to homepage</span>
                </Link>
                <div className='main_content'>
                    <div className='left_page'>
                        <img src='./logo3.png' alt="" />
                        <div className='left_page_cotent'>
                            <h2>Welcome</h2>
                            <p>Register your account below</p>
                            {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
                        </div>
                    </div>
                    <div className='right_page'>
                        <div className='main_right'>
                            <div className='first_title'>
                                <h1>Have you signed up?</h1>
                                <p>Applying for easy online access and save your bathroom design.</p>
                            </div>
                            <div className='second_title'>
                                <h3>Trade Account</h3>
                                <a>Apply now</a>
                            </div>
                            <div className='three_title'>
                                <h3>Personal Account</h3>
                                <p>For non-trade customers</p>
                                <ul>
                                    <li>Save and get a quote on your design.</li>
                                    <li>See your past purchases</li>
                                </ul>
                                <Link to='/login'>Login now</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}