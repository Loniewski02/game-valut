type Props = {
  className?: string;
  children: React.ReactNode;
};

const Wrapper: React.FC<Props> = ({ className, children }) => {
  return (
    <div className={`mx-auto my-0 w-full max-w-7xl ${className && className}`}>
      {children}
    </div>
  );
};

export default Wrapper;
