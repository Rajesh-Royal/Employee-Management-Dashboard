import React from "react";

const FormInputBox = ({
  label = "",
  icon = "₹",
  type = "text",
  placeholder = "$$",
  ariaLabel = "",
  name = "",
  value = "",
  textLeft,
  ...inputProps
}) => {
  return (
    <div className="flex flex-col text-gray-500 mt-8">
      {label ? <label className="dark:text-gray-200">{label}</label> : null}
      <div className="border max-w-xs w-full flex justify-between items-stretch mt-1">
        {icon ? (
          <button className="border px-2 py-1 bg-gray-200 text-gray-500 font-bold text-lg w-14">
            {icon}
          </button>
        ) : null}
        <input
          className={`focus:outline-none text-gray-400 ${
            !textLeft ? "text-center" : null
          } px-2 py-1  w-full font-medium appearance-none`}
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
