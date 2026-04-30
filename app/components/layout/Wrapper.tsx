type Props = {
  className?: string;
  children: React.ReactNode;
};

const Wrapper = ({ className, children }: Props) => {
  return <div className={`mx-auto my-0 w-full max-w-7xl ${className && className}`}>{children}</div>;
};

export default Wrapper;
