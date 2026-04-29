import { Input } from "@/app/types";

const FormBox = ({ input, className, defaultVal }: { input: Input; defaultVal?: any; className?: string }) => {
  return (
    <div className={`${className && className} relative flex flex-col gap-2`}>
      <label htmlFor={input.id} className="invisible absolute z-10 text-13 text-textSec">
        {input.label}
      </label>
      <input
        id={input.id}
        type={input.type}
        name={input.name}
        className="z-20 rounded-xl border border-border bg-card py-3 pl-5 pr-4 text-15"
        placeholder={input.placeholder}
        defaultValue={defaultVal ? defaultVal : ""}
        required
      />
    </div>
  );
};

export default FormBox;
