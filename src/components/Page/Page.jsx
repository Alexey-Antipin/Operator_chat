import "./Page.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";


export const Page = () => {
    return (
        <div className="Page">
            <div className="Page__Leftblock">
                1
            </div>
            <div className="Page__Mainblock">
                <div className="Page__Name">
                    Name: Владимир Маяковский
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
                    text: Пиши сообщение
                    <FontAwesomeIcon icon={faPenToSquare} />
                </div>
            </div>
            <div className="Page__Rightblock">
                3
            </div>
        </div>
    )
}