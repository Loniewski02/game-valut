import { Input } from "@/types";

type Props = { input: Input; defaultVal?: any; className?: string; notRequied?: boolean };

const FormBox = ({ input, className, defaultVal, notRequied }: Props) => {
  return (
    <div className={`${className && className} relative flex w-full flex-col gap-2`}>
      <label htmlFor={input.id} className="sr-only">
        {input.label}
      </label>
      <input
        id={input.id}
        type={input.type}
        name={input.name}
        className="z-20 rounded-xl border border-Gray bg-White py-3 pl-5 pr-4 text-15 text-DarkGrayishBlue placeholder:text-GrayishBlue"
        placeholder={input.placeholder}
        defaultValue={defaultVal ? defaultVal : ""}
        required={notRequied ? false : true}
      />
    </div>
  );
};

export default FormBox;
