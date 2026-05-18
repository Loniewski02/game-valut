import ErrorSection from "./ErrorSection";
import LoadingIndicator from "./LoadingIndicator";

const FetchSection = ({
  isLoading,
  error,
  children,
}: {
  isLoading: boolean;
  error: {
    status: number;
    message: string;
  } | null;
  children: React.ReactNode;
}) => {
  return (
    <>
      {isLoading && !error && <LoadingIndicator className="mt-20" />}
      {!isLoading && error && <ErrorSection title={`${error.status}`} text={error.message} />}
      {!isLoading && !error && children}
    </>
  );
};

export default FetchSection;
