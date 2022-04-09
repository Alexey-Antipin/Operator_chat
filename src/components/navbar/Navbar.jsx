import { useState } from "react";
import "./Navbar.scss";

export const Navbar = () => {

    const [ComeOut, SetComeOut] = useState({ boolean: true })

    const changebutton = () => {
        SetComeOut(!ComeOut)
    }

    return (
        <div className="Navbar">
            {
                ComeOut ?
                    <button
                        className="Navbar__button"
                        onClick={() => changebutton()}>
                        Войти
                    </button>
                    :
                    <button
                        className="Navbar__button"
                        onClick={() => changebutton()}>
                        Выйти
                    </button>
            }
        </div>
    )
}