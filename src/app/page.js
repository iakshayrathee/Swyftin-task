"use client";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import User from "../utilits/userContainer";

export default function Home() {
  const [online, setOnline] = useState(true);
  return (
    <div className="top-section flex">
      <div className="side-bar border-r-2 h-[106vh] w-[19vw] border-gray-200">
        <div className="side-top bg-[#F6F6F6] h-[11%] p-2">
          <div className="relative">
            <Input
              placeholder="Search a chat"
              className="bg-white text-xs w-[85%] rounded-2xl"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#EBEBEB"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-search absolute top-1/2 right-12 mt-auto transform -translate-y-1/2 "
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
            {/* link */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#b3b3ba"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-square-arrow-out-up-right absolute top-1/2 right-2 transform -translate-y-1/2 "
            >
              <path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6" />
              <path d="m21 3-9 9" />
              <path d="M15 3h6v6" />
            </svg>
          </div>
          <Button className="bg-transparent text-black h-3 w-12 hover:bg-transparent rounded-sm mt-2 text-xs border-black border-2">
            Leads
          </Button>
        </div>
        <div className="users">
          <User
            no="9140458478"
            name="ter erwe"
            time="11:54 AM"
            msg={"Hey PRADYUMN"}
          />
          <User
            no="2502211114"
            name="David"
            time="11:34 AM"
            green={true}
            msg={"You can come"}
          />
          <User
            no="9871848369"
            name="Ashima Ohri"
            time="3:54 AM"
            msg={"Greetings Ashima..."}
          />
          <User
            no="7980229739"
            name="Haidar Poutmi"
            time="12:25 AM"
            msg={"Greetings Haidar..."}
          />
          <User
            no="2035640799"
            name="Lipika Sethi"
            time="1/11/2024"
            msg={"Greetings Sanjay..."}
          />
          <User
            no="9818715517"
            name="Nikhil Aggarwal"
            time="1/11/2024"
            msg={"A Message"}
          />
          <User
            no="9897958043"
            name="Mahheep Singh"
            time="1/11/2024"
            msg={"Greetings Mahheep..."}
          />
        </div>
      </div>
      <div className="chat">
        <div className="single-user">
          <div className=" bg-[#F0F0F0] w-[80vw] py-1 flex items-center gap-3">
            <div className="ml-5">
              <Avatar>
                <AvatarImage src="https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>

            <span className="text-sm">+918929603459 (ter ewve)</span>
          </div>
        </div>
        <div className="h-[100vh] bg-opacity-60  bg-[url('https://i.pinimg.com/564x/8c/98/99/8c98994518b575bfd8c949e91d20548b.jpg')] bg-contain">
          {/* <div className="absolute inset-0 bg-white opacity-70 w-[81%] ml-72 mt-12 h-[90%] "></div> */}
          <div className="other-msg pt-4 ml-8 relative ">
            <div className="msg bg-[#E4E4E4] h-[5vh] p-1 px-3 w-56 rounded-xl">
              <span className="text-[11px]">Hi test</span>
            </div>

            <div className="details flex gap-[4.5rem] mt-1">
              <span className="text-[10px] text-[#5e5d5d]">Today 11:51 AM</span>
              <span className="text-[9px] bg-[#1AA4BA] h-3  text-white rounded-md px-1 flex justify-center items-center">
                Property Unknown
              </span>
            </div>
          </div>

          <Button className="bg-[#FFFFFF] left-[36vw] h-6  absolute top-[5rem] w-[4.5rem] hover:bg-[#FFFFFF] rounded-lg text-xs text-[#D3D3D3] border-[#D3D3D3] border-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-undo-2"
            >
              <path d="M9 14 4 9l5-5" />
              <path d="M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11" />
            </svg>{" "}
            <span className="-ml-1">Reply</span>
          </Button>
          <div className="my-msg float-right mr-3">
            <div className="border-2 bg-[#DCF8C6] -mt-1 text-black min-h-[35vh] w-[20vw] rounded-lg">
              <Image
                src="https://www.shutterstock.com/image-photo/portrait-labrador-puppy-peeking-muzzle-600nw-1998877433.jpg"
                width={500}
                height={400}
                alt="Picture of the author"
                className="p-2 rounded-lg h-[25vh]"
              />
              <div className="msg text-[11px] flex flex-col p-2 gap-2">
                <span>Hey PRADYUMN</span>
                <span>
                  {`We'd love to hear about your stay -`}
                  <span className="font-bold">the good, the great,</span>
                  and maybe even{" "}
                  <span className="font-bold">the just okay</span>
                </span>

                <span>
                  Your{" "}
                  <span className="font-bold">
                    feedback helps us make magic happen{" "}
                  </span>
                  for future guests.
                </span>
                <span className="font-bold">Blue Jay Hostels</span>
                <span className="font-extralight -mt-2 text-[#5e5d5d]">
                  powered by Swyftin
                </span>
              </div>
            </div>
            <div className="feedback flex gap-1 flex-col mt-1 ">
              <Button className="w-full h-5 bg-white hover:bg-white font-bold text-[12px] text-[#0DA4F4]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-undo-2"
                >
                  <path d="M9 14 4 9l5-5" />
                  <path d="M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11" />
                </svg>{" "}
                Poor
              </Button>
              <Button className="w-full h-5 bg-white hover:bg-white font-bold text-[12px] text-[#0DA4F4]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-undo-2"
                >
                  <path d="M9 14 4 9l5-5" />
                  <path d="M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11" />
                </svg>{" "}
                Average
              </Button>
              <Button className="w-full h-5 bg-white hover:bg-white font-bold text-[12px] text-[#0DA4F4]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-undo-2"
                >
                  <path d="M9 14 4 9l5-5" />
                  <path d="M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11" />
                </svg>{" "}
                Excellent
              </Button>
              <span className="text-[10px] text-[#5e5d5d] ml-[13.5rem]">
                Today 11:54 AM
              </span>
              <div className="other-info flex flex-col">
                <span className="text-[12px] text-[#5e5d5d] ml-[13.5rem] -mt-1 mb-2 border-[#a5a5f8] border-2 rounded-lg px-2 ">
                  Agent - Nikhil
                </span>

                <span className="flex gap-1 mt-4 text-[12px] bg-[#E9E9ED] ml-[9rem] text-[#5e5d5d]  border-[#9bcdff] border-2 rounded-lg px-1 py-[0.5px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    class="lucide lucide-map-pin"
                  >
                    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>{" "}
                  Send Property Location
                </span>
                <span className="text-[12px] flex gap-1 mt-1 bg-[#E9E9ED] text-[#5e5d5d] ml-[11.5rem]  border-[#9bcdff] border-2 rounded-lg px-1 py-[0.5px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-plus"
                  >
                    <path d="M5 12h14" />
                    <path d="M12 5v14" />
                  </svg>
                  {"  "} Send Template
                </span>
              </div>
            </div>
          </div>
          <div className=" bg-[#F0F0F0] w-[80vw] fixed h-[3.5rem]  bottom-0 gap-3">
            <div className="flex">
              <div className="emoji  ml-3 bg-[#D3D3D3] rounded-lg px-2 mt-2 flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-smile"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                  <line x1="9" x2="9.01" y1="9" y2="9" />
                  <line x1="15" x2="15.01" y1="9" y2="9" />
                </svg>
              </div>

              <Input
                placeholder="Message"
                className="bg-white w-[88%] rounded-lg mt-2 ml-1 text-sm"
              />
              <div className="clip pt-2 ml-3 bg-[#D3D3D3] rounded-lg p-2 mt-2 flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-paperclip"
                >
                  <path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48" />
                </svg>
              </div>
              <div className="share pt-3 ml-1 bg-[#06D755] rounded-lg p-2 mt-2 flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  class="lucide lucide-send"
                >
                  <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z" />
                  <path d="m21.854 2.147-10.94 10.939" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
