import React from "react";

const FormInputBox = ({
  label = "Label",
  icon = "₹",
  type = "text",
  placeholder = "$$",
  ariaLabel = "",
  name = "",
  value = "",
  ...inputProps
}) => {
  return (
    <div className="flex flex-col text-gray-500 mt-8">
      <label htmlFor="basic-pay" className="">
        {label}
      </label>
      <div className="border max-w-xs w-full flex justify-between items-stretch mt-1">
        <button className="border px-2 py-1 bg-gray-200 text-gray-500 font-bold text-lg w-14">
          {icon}
        </button>
        <input
          className="focus:outline-none text-gray-400 px-2 py-1 text-center w-full font-medium appearance-none"
          name={name}
          type={type}
          placeholder={placeholder}
          aria-label={ariaLabel}
          value={value}
          {...inputProps}
        />
      </div>
    </div>
  );
};

export default FormInputBox;
