import Roomsidebar from "@/features/rooms/Roomsidebar";
import React from "react";
import Chatlist from "./Chatlist";
import Messagearea from "./Messagearea";

const Chatroom = () => {
  return (
    <div className="flex p-4 bg-gray-100 h-screen gap-4">
      {/* Sidebar */}
      <div className="flex-0.8 ">
        <Roomsidebar />
      </div>

      {/* Chatlist */}
      <Chatlist/>
    

      {/* Message Area */}

      <Messagearea/>
     
    </div>
  );
};

export default Chatroom;
