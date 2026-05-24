import { IoMdClose } from "react-icons/io";
import Wrapper from "../layout/Wrapper";
import { useEffect } from "react";

type Props = {
  isShown: boolean;
  children: React.ReactNode;
  onClose: () => void;
};

const Modal = ({ children, onClose, isShown }: Props) => {
  useEffect(() => {
    document.body.style.overflow = isShown ? "hidden" : "";
    document.body.style.position = isShown ? "fixed" : "";

    return () => {
      document.body.style.overflow = "";
      document.body.style.position = "";
    };
  }, [isShown]);

  return (
    <div className="fixed bottom-0 left-0 right-0 top-0 z-50 grid place-items-center p-4">
      <div
        className="fixed bottom-0 left-0 right-0 top-0 cursor-pointer bg-black/50 backdrop-blur-[4px]"
        onClick={onClose}
      />
      <Wrapper className="relative z-30 max-w-xl rounded-2xl bg-White px-4 py-6 text-2xl sm:p-6 md:max-w-2xl md:px-8 md:py-10">
        <button
          aria-label="close"
          className="absolute right-0 top-0 p-4 text-DarkGrayishBlue hover:text-Primary"
          onClick={onClose}
        >
          <IoMdClose className="text-3xl" />
        </button>
        {children}
      </Wrapper>
    </div>
  );
};

export default Modal;
