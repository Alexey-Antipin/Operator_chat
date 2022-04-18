import "./Page.scss";
import { LeftContent } from "./LeftContent/LeftContent";
import { Content } from "./Content/Content";
import { RightContent } from "./RightContent/RightContent";

export const Page = () => {
    return (
        <div className="Page">
            <LeftContent />
            <Content />
            <RightContent />
        </div>
    )
}