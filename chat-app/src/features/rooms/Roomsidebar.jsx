import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Archive,
  LogOut,
  MessageCircle,
  MessageCircleMore,
  Store,
} from "lucide-react";
import React from "react";

const Roomsidebar = () => {
  return (
    <div className="flex flex-col gap-1 p-1">
      <ScrollArea className="h-[75vh]">
        <div className="h-10 w-10 bg-gray-100 flex justify-center items-center rounded-[5px] hover:bg-gray-300">
          <MessageCircle fill="black" />
        </div>

        <div className="h-10 w-10 bg-gray-100 flex justify-center items-center rounded-[5px]  hover:bg-gray-300">
          <Store />
        </div>

        <div className="h-10 w-10 bg-gray-100 flex justify-center items-center rounded-[5px]  hover:bg-gray-300">
          <MessageCircleMore />
        </div>

        <div className="h-10 w-10 bg-gray-100 flex justify-center items-center rounded-[5px]  hover:bg-gray-300">
          <Archive />
        </div>

        <div className="w-full">
          <hr className="my-4 h-px bg-gray-300 border-0" />
        </div>

        <div className="flex flex-col gap-2 justify-center items-center">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </ScrollArea>
      <div className="w-full">
        <hr className="my-4 h-px bg-gray-300 border-0" />
      </div>

      <div className="flex justify-center items-center">
        <Avatar>
          <AvatarImage src="https://i.imgur.com/QhpdnSd.jpeg" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>

      <div className="h-10 w-10 bg-gray-100 flex justify-center items-center rounded-[5px] hover:bg-gray-300">
        <LogOut />
      </div>
    </div>
  );
};

export default Roomsidebar;
