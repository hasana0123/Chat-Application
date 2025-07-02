import React from "react";
import { Search, SquarePen } from "lucide-react";
import { Input } from "@/components/ui/input";


const Chatlist = () => {
  return (
    <div className="flex-3 bg-white rounded-[5px] px-3">
      {/* Chats(title) */}
      <div className="flex  items-center justify-between py-3">
        <h1 className="text-2xl">
          <strong>Chats</strong>
        </h1>

        <div className="flex rounded-[50%] justify-center items-center bg-gray-200 h-8 w-8">
          <SquarePen size={21} />
        </div>
      </div>

      {/* Searchbar */}

      <div className="relative flex items-center w-full max-w-md">
        <Search className="absolute left-3 text-gray-600 w-4 h-4" />
        <Input
          type="text"
          placeholder="Search Messenger"
          className="pl-10 rounded-[15px] bg-gray-100 focus-visible:ring-0 focus-visible:ring-offset-0"
        />
      </div>
    </div>
  );
};

export default Chatlist;
