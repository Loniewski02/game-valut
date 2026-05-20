"use client";
import { useContext, useEffect } from "react";

import { MessagesContext } from "../../_providers/MessagesContext";

const Message = () => {
  const timeoutDuration = 5000;
  const { isShown, setIsShown, status, message } = useContext(MessagesContext);

  useEffect(() => {
    if (isShown) {
      const identifier = setTimeout(() => {
        setIsShown(false);
      }, timeoutDuration);

      return () => clearTimeout(identifier);
    }
  }, [isShown, status, message]);

  return (
    <div
      className={`${isShown ? "translate-x-0" : "translate-x-[150%]"} ${status === 200 ? "bg-[#89f0e2] text-DarkGrayishBlue" : "bg-red-500 text-White"}
 fixed  bottom-32 right-8 z-[2000] max-w-[330px] rounded-md px-6 py-4 font-bold transition-transform`}
    >
      <span className={`${status > 399 ? "inline" : "hidden "}`}>{`Error ${status}: `}</span>
      <span>{message}</span>
    </div>
  );
};

export default Message;
