import { Input } from "@/app/types";

const FormBox = ({
  input,
  className,
  defaultVal,
}: {
  input: Input;
  defaultVal?: any;
  className?: string;
}) => {
  return (
    <div className={`${className && className} relative flex flex-col gap-2`}>
      <label htmlFor={input.id} className="text-13 invisible absolute z-10 text-textSec">
        {input.label}
      </label>
      <input
        id={input.id}
        type={input.type}
        name={input.name}
        className="text-15 z-20 rounded-[4px] border border-border bg-card py-3 pl-5 pr-4"
        placeholder={input.placeholder}
        defaultValue={defaultVal ? defaultVal : ""}
        required
      />
    </div>
  );
};

export default FormBox;
