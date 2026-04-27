"use client";

const Submit = ({ children }: { children: React.ReactNode }) => {
  return (
    <button
      type="submit"
      aria-label="submit-form"
      className="text-15 block w-full rounded-md bg-primary px-6 py-3 font-medium text-textDark transition hover:bg-primaryHover active:scale-95"
    >
      {children}
    </button>
  );
};

export default Submit;
