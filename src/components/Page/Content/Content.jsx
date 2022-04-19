import React from "react";
import { FaVideo, FaRegSmile } from "react-icons/fa";
import { BsFillTelephoneFill, BsTelegram, BsPaperclip } from "react-icons/bs";
import "./Icons.scss";
import "./Content.scss";

export const Content = () => {
    return (
        <div className="Page__Mainblock">
            <div className="Page__Name">
                <div className="Page__NameText">
                    Владимир Маяковский
                </div>
                <div className="Page__icons">
                    <div className="Page__icons_video">
                        <FaVideo />
                    </div>
                    <div className="Page__icons_tel">
                        <BsFillTelephoneFill />
                    </div>
                </div>
            </div>
            <div className="Page__Dialogs">
                Будет луна.<br />
                Есть уже<br />
                немножко.<br />
                А вот и полная повисла в воздухе.<br />
                Это Бог, должно быть,<br />
                дивной<br />
                серебряной ложкой<br />
                роется в звёзд ухе.
            </div>
            <div className="Page__Text">
                <input
                    className="Page__Input"
                    placeholder="Type your message here..." />

                <div className="Page__Icons">
                    <FaRegSmile className="Smile" />
                    <BsPaperclip className="Clipboard" />
                    <BsTelegram className="Edit" />
                </div>
            </div>
        </div>
    )
}