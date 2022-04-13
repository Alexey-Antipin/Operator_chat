import { useState } from "react";
import { Link } from "react-router-dom";
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import 'firebase/compat/auth';
import "./Navbar.scss";

export const Navbar = () => {

    const [ComeOut, SetComeOut] = useState({ boolean: true })

    const SignIn = () => {
        SetComeOut(false)
        console.log("Come from system")
    }

    const SignOut = () => {
        firebase.auth().signOut()
        SetComeOut(true)
        console.log("Exit from system")
    }

    return (
        <div className="Navbar">
            {
                ComeOut ?
                    <button
                        className="Navbar__button"
                        onClick={() => SignOut()}>
                        <Link to="/Login">Выйти</Link>
                    </button>
                    :
                    <button
                        className="Navbar__button"
                        onClick={() => SignIn()}>
                        <Link to="/Auth">Войти</Link>
                    </button>
            }
        </div>
    )
}