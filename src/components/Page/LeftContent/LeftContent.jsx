import React from "react";
import { FaSearch, FaPlusCircle, FaEllipsisV, FaUserFriends, FaBox } from "react-icons/fa";
import { ImAddressBook } from "react-icons/im";
import { GiBackwardTime } from "react-icons/gi";
import "./Icons.scss";
import "./LeftContent.scss";

export const LeftContent = () => {
    return (
        <div className="Page__Leftblock">
            <div className="Page__Organization">
                <div className="Page__OrganizationName">
                    ГЛОБУС
                </div>
                <div className="Page__OrganizationIcons">
                    <button className="Page__OrganizationIconsButton">
                        <FaPlusCircle className="FaPlusCircle" />
                    </button>
                    <button className="Page__OrganizationIconsButton">
                        <FaEllipsisV className="FaEllipsisV" />
                    </button>
                </div>
            </div>
            <div className="Page__Search">
                <div className="Page__ImagePoisk">
                    <FaSearch className="FaSearch" />
                </div>
                <input
                    className="Page__InputSearch"
                    placeholder="Search Here..." />
            </div>
            <div className="Page__OrganizationInput">
                <GiBackwardTime className="GiBackwardTime" />
                <FaUserFriends className="FaUserFriends" />
                <ImAddressBook className="ImAddressBook" />
                <FaBox className="FaBox" />
            </div>
        </div>
    )
}