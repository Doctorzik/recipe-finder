import Image from "next/image";
import cheveron from "@/public/assets/images/icon-chevron-down.svg"

export type Category = 0 | 5 | 10 | 15 | 20 | "";
export type Show = "open" | "close";

interface FilterRadiosProps {
  value: Category;
  onChange: (c: Category) => void;
  className?: string;
  show: Show;
  onShow: (s: Show) => void;
  text: string,
  name: string;
  options : {label : string, value : Category}[]
}



export default function FilterRadios({
  value,
  onChange,
  show,
  onShow,
  text,
  className = "",
  name,
  options
}: FilterRadiosProps) {
  return (
    <div className="flex flex-col  relative  ">
 
      <button
        type="button"
        onClick={() => onShow(show === "open" ? "close" : "open")}
        className="mb-2   flex flex-row"
      >
        <span>{text}</span>
        <Image src={cheveron} width={20} height={20} alt="Chevron" />
      </button>

      
      <div
        role="radiogroup"
        aria-label="Filter recipes by category"
        className={show === "open" ? `top-8 w-[130px] line-clamp-1 absolute ${className}` : "hidden"}
      >
        {options.map((opt) => {
          const selected = opt.value === value;
          return (
            <label
              key={opt.value}
              htmlFor={`${name}-cat-${opt.value}`}
              className={` flex flex-row gap-1 px-3 py-2 cursor-pointer select-none
                ${selected ? "bg-blue-600 text-white border-blue-600" : "bg-white text-gray-700 hover:bg-gray-50"}`}
            >
              
              <input
               
                id={`${name}-cat-${opt.value}`}  
                type="radio"
                name={name}
                value={opt.value}
                checked={selected}
                onChange={() => onChange(opt.value)}
                
                aria-checked={selected}
              />
              <span>{opt.label}</span>
            </label>
          );
        })}
      </div>
    </div>
  );
}
