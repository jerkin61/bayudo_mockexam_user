import cn from "classnames";
import React from "react";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

function QuillEditor({
  quillDefaultValue,
  changeQuillValue,
  name,
  quillClass,
  iteratedAsDiv,
  resetForm,
  setResetForm,
}) {
  console.log("namesss", iteratedAsDiv);
  const [value, setValue] = React.useState(!iteratedAsDiv && quillDefaultValue);
  const onChange = (value) => {
    setValue(value);
    changeQuillValue(name, value);
  };
  React.useEffect(() => {
    if (resetForm) {
      setValue("");
      const timeout = setTimeout(() => {
        setResetForm(false);
      }, 100);

      return () => clearTimeout(timeout);
    }
  }, [resetForm]);
  return (
    <ReactQuill
      theme="snow"
      value={value}
      onChange={(value) => onChange(value)}
      className={quillClass}
      style={{ whiteSpace: "nowrap" }}
    />
  );
}

const classes = {
  root: "px-4 h-12 flex items-center w-full rounded appearance-none transition duration-300 ease-in-out text-heading text-sm focus:outline-none focus:ring-0",
  normal:
    "bg-gray-100 border border-border-base focus:shadow focus:bg-light focus:border-accent",
  solid:
    "bg-gray-100 border border-border-100 focus:bg-light focus:border-accent",
  outline: "border border-border-base focus:border-accent",
  shadow: "focus:shadow",
  theme_blue: "flex-grow h-[50px] rounded-[10px] bg-[#e0ecf2]",
};
const Input = React.forwardRef(
  (
    {
      setResetForm,
      resetForm,
      iteratedAsDiv,
      quillClass,
      changeQuillValue,
      quillDefaultValue = "",
      longText,
      className,
      label,
      note,
      name,
      error,
      children,
      variant = "normal",
      shadow = false,
      type = "text",
      inputClassName,
      labelClass,
      ...rest
    },
    ref
  ) => {
    // const [quillContent, setQuillContent] = React.useState(quillDefaultValue);
    const rootClassName = cn(
      classes.root,
      {
        [classes.normal]: variant === "normal",
        [classes.solid]: variant === "solid",
        [classes.outline]: variant === "outline",
        [classes.theme_blue]: variant === "theme_blue",
      },
      {
        [classes.shadow]: shadow,
      },
      inputClassName
    );

    return (
      <div className={className}>
        <label htmlFor={name} className={labelClass}>
          {label}
        </label>

        {longText ? (
          <QuillEditor
            setResetForm={setResetForm}
            resetForm={resetForm}
            iteratedAsDiv={iteratedAsDiv}
            changeQuillValue={changeQuillValue}
            id={name}
            name={name}
            ref={ref}
            className={rootClassName}
            modules={{ toolbar: true }}
            formats={["bold", "italic", "link"]} // Customize formats if needed
            aria-invalid={error ? "true" : "false"}
            quillDefaultValue={quillDefaultValue}
            quillClass={quillClass}
            {...rest}
          />
        ) : (
          <input
            id={name}
            name={name}
            type={type}
            ref={ref}
            className={rootClassName}
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck="false"
            aria-invalid={error ? "true" : "false"}
            {...rest}
          />
        )}
        {note && <p className="mt-2 text-xs text-body">{note}</p>}
        {error && (
          <p className="my-2 text-xs text-start text-red-500">{error}</p>
        )}
      </div>
    );
  }
);

export default Input;
