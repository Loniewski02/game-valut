import { BiShow } from "react-icons/bi";
import { useState } from "react";

import { BiDotsHorizontal, BiEdit, BiHide, BiTrashAlt } from "react-icons/bi";

type Props = {
  byCurrentUser: boolean;
  isHidden: boolean;
  onDelete: () => void;
  onEdit: () => void;
  onHide: () => void;
};

const ReviewControls = ({ byCurrentUser, onDelete, isHidden, onEdit, onHide }: Props) => {
  const [isOpened, setIsOpened] = useState(false);

  const toggleMenuHadnler = () => setIsOpened((prev) => !prev);

  const deleteHandler = () => {
    setIsOpened(false);
    onDelete();
  };

  const editHandler = () => {
    setIsOpened(false);
    onEdit();
  };

  const hideHandler = () => {
    setIsOpened(false);
    onHide();
  };

  return (
    <>
      <button
        className="order-1 w-max self-end px-2 pb-1 text-2xl font-semibold leading-none tracking-wider text-GrayishBlue transition hover:text-Primary sm:p-2"
        aria-label="review option"
        onClick={toggleMenuHadnler}
      >
        <BiDotsHorizontal />
      </button>
      <div
        className={`${isOpened ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"} opacity-1 absolute bottom-0 right-0 z-30 flex w-max translate-y-full gap-2 rounded-xl border border-Gray bg-White p-4 transition`}
      >
        {byCurrentUser && !isHidden && (
          <>
            <button onClick={deleteHandler} className="text-lg text-red-700 transition-colors hover:text-red-500">
              <BiTrashAlt />
            </button>
            <button onClick={editHandler} className="text-lg transition-colors hover:text-Primary">
              <BiEdit />
            </button>
          </>
        )}
        <button onClick={hideHandler} className="text-lg transition-colors hover:text-Primary">
          {isHidden && <BiShow />}
          {!isHidden && <BiHide />}
        </button>
      </div>
    </>
  );
};

export default ReviewControls;
