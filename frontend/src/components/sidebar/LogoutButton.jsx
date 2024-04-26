import React from "react";
import { BiLogOut } from "react-icons/bi";

const LogoutButton = () => {
    return (
        <div className="mt-auto">
            <div className="mt-3">
                <BiLogOut className="w-6 h-6 text-white cursor-pointer" />                
            </div>
        </div>
    );
};

export default LogoutButton;
