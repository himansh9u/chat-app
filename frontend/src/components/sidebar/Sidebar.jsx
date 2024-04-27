import React from "react";
import SearchInput from "./SearchInput";
import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";

const Sidebar = () => {
    return (
        <div className="w-1/3 border-r border-slate-500 p-6 flex flex-col text-white">
            <SearchInput />
            <div className="border border-slate-400 px-3 my-4"></div>
            <Conversations />
            <LogoutButton />
        </div>
    );
};

export default Sidebar;
