import { NavLink } from "react-router-dom";
import { FaHeadset } from "react-icons/fa";

const FloatIcon = () => {

    function helpLine() {
        const chatBtn = document.getElementById("chat-icon");
        chatBtn.classList.toggle("expanded");
    };

    return (
        <div id="chat-bot">
            <div className="icon" id="chat-icon" onClick={() => helpLine()}>
                <NavLink to="/" >
                    <div className="user"> Hi! </div>
                </NavLink>
                <FaHeadset className="text-4xl" />
            </div>
        </div>
    );
};

export default FloatIcon;