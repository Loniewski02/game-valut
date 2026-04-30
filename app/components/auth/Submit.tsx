type Props = { children: React.ReactNode };

const Submit = ({ children }: Props) => {
  return (
    <button
      type="submit"
      aria-label="submit-form"
      className="block w-full rounded-xl border border-transparent bg-Primary px-6 py-3 text-15 font-medium text-White transition hover:bg-PrimaryHover active:scale-95"
    >
      {children}
    </button>
  );
};

export default Submit;
