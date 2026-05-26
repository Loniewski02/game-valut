type Props = {
  onClick: () => void;
};

const PaginationButton = ({ onClick }: Props) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="mx-auto mt-10 block w-max text-15 font-semibold text-Primary transition hover:text-PrimaryHover"
    >
      load more...
    </button>
  );
};

export default PaginationButton;
