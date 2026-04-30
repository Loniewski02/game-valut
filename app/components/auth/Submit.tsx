const Submit = ({ children }: { children: React.ReactNode }) => {
  return (
    <button
      type="submit"
      aria-label="submit-form"
      className="bg-Primary hover:bg-PrimaryHover text-White block w-full rounded-xl border border-transparent px-6 py-3 text-15 font-medium transition active:scale-95"
    >
      {children}
    </button>
  );
};

export default Submit;
