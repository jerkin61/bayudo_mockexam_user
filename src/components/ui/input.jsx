import cn from "classnames";
import React from "react";

const variantClasses = {
  normal:
    "bg-gray-100 border border-border-base rounded focus:shadow focus:bg-light focus:border-accent",
  solid:
    "bg-gray-100 border border-border-100 rounded focus:bg-light focus:border-accent",
  outline: "border border-border-base rounded focus:border-accent",
  line: "ps-0 border-b border-border-base rounded-none focus:border-accent",
};

const sizeClasses = {
  small: "text-sm h-10",
  medium: "h-12",
  big: "h-14",
};

const Input = React.forwardRef(
  (
    {
      className,
      label,
      name,
      error,
      children,
      variant = "normal",
      dimension = "medium",
      shadow = false,
      disabled = false,
      type = "text",
      inputClassName,
      ...rest
    },
    ref
  ) => {
    return (
      <div className={className}>
        {label && (
          <label
            htmlFor={name}
            className="block text-body-dark font-semibold text-sm leading-none mb-3"
          >
            {label}
          </label>
        )}
        <input
          id={name}
          name={name}
          type={type}
          ref={ref}
          className={cn(
            "px-4 flex items-center w-full appearance-none transition duration-300 ease-in-out text-heading text-sm focus:outline-none focus:ring-0",
            shadow && "focus:shadow",
            variantClasses[variant],
            sizeClasses[dimension],
            disabled && "bg-gray-100 cursor-not-allowed",
            inputClassName
          )}
          disabled={disabled}
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck="false"
          aria-invalid={error ? "true" : "false"}
          {...rest}
        />
        {error && <p className="my-2 text-xs text-red-500">{error}</p>}
      </div>
    );
  }
);

export default Input;
