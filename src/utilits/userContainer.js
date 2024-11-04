"use client";
import React, { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { Button } from "../components/ui/button";

const User = ({ no, name, msg, tick, green, time }) => {
  const [isActive, setIsActive] = useState(true);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div
      className={`flex user h-[15vh] ${
        isActive ? "bg-[#FFFFFF]" : "bg-[#E4E4E4]"
      } pt-2`}
      onClick={handleClick}
    >
      <div className="flex items-center ml-3">
        <Avatar>
          <AvatarImage src="https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
      <div className="info">
        <span className="text-[14px]">+91{no}</span>
        <span className="text-[10px]">{name}</span>
        <div className="flex items-center">
          {/* <span className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="17"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-image"
            >
              <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
              <circle cx="9" cy="9" r="2" />
              <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
            </svg>
            <span className="text-[12px]">Hey PRADYUMN</span>
          </span> */}
          <span className="text-[10px]">{msg}</span>

          <p
            className={`text-[12px] w-fit msg-prop
         ${green ? "msg-prop-alternate" : "msg-prop-default"}`}
          >
            {time}
          </p>
          {green && (
            <div className="bg-green-400 h-6 w-6   rounded-full flex items-center justify-center text-white">
              2
            </div>
          )}
        </div>
        <Button className="bg-transparent mb-2 text-black h-3 mt-1 w-12 hover:bg-transparent rounded-sm  text-[10px] border-black border-2">
          + Add
        </Button>
      </div>
    </div>
  );
};

export default User;
