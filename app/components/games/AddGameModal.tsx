import { IoMdClose } from "react-icons/io";
import { useEffect } from "react";
import Image from "next/image";
import { BiSearch } from "react-icons/bi";

import Wrapper from "../layout/Wrapper";
import Button from "../ui/Button";
import FormBox from "../ui/FormBox";

import img from "@/public/assets/witcher-3-cover.jpg";
import { ADD_GAME_INPUT } from "@/app/utils/constant";

type Props = {
  onClose: () => void;
  isShown: boolean;
};

const Item = () => {
  return (
    <>
      <div className="mb-2 flex items-center justify-between py-2 last:mb-0">
        <div className="flex items-center gap-2">
          <Image className="h-12 w-12 rounded-xl object-cover" width={50} height={100} alt="2" src={img.src} />
          <h4 className="text-base font-semibold tracking-tight">The witcher 3: Wild Hunt</h4>
        </div>
        <button className="rounded-lg border border-Primary bg-Primary px-6 py-1 text-15 font-semibold text-White transition first-letter:uppercase hover:bg-PrimaryHover active:scale-95">
          add
        </button>
      </div>
    </>
  );
};

const AddGameModal = ({ onClose, isShown }: Props) => {
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
        <h3 className="mb-2 text-2xl font-semibold first-letter:uppercase">add game</h3>
        <p className="mb-2 text-15 leading-tight text-GrayishBlue first-letter:uppercase">
          search for a game by title and add it to our library.
        </p>
        <div className="flex gap-2">
          <FormBox input={ADD_GAME_INPUT} />
          <Button>
            <BiSearch className="text-xl text-White" />
          </Button>
        </div>
        <div className="mt-6 max-h-[300px] overflow-y-scroll scroll-smooth rounded-2xl bg-LightGray/50 p-2">
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
        </div>
      </Wrapper>
    </div>
  );
};

export default AddGameModal;
