import React from "react";
import { FaMobileAlt, FaPhotoVideo } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { ImSphere, ImCross } from "react-icons/im";
import "./Icons.scss";
import "./RightContent.scss";

export const RightContent = () => {
    return (
        <div className="Page__Rightblock">
            <div className="Page__CloseRightblock">
                <button className="Page__CloseButton">
                    <ImCross className="ImCross" />
                </button>
            </div>
            <div className="Page__Avatar">
                <div className="Page__Image">Face not found</div>
                <div className="Page__Name__text"> Владимир Маяковский</div>
            </div>
            <div className="Page__Name__MainInfo">
                <div className="Page__Name__Info"><ImSphere /> Russia, Kirov </div>
                <div className="Page__Name__Info"><FaMobileAlt /> 999-999-999 </div>
                <div className="Page__Name__Info"><FiMail />Vladimir@gmail.com</div>
            </div>
            <div className="Page__Media">
                <div className="Page__Media__Word">Media</div>
                <div className="Page__Media__List">
                    <div><FaPhotoVideo className="FaPhotoVideo" /></div>
                    <div><FaPhotoVideo className="FaPhotoVideo" /></div>
                    <div><FaPhotoVideo className="FaPhotoVideo" /></div>
                    <div><FaPhotoVideo className="FaPhotoVideo" /></div>
                </div>
            </div>
        </div>
    )
}