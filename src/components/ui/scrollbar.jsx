import cn from "classnames";
import "overlayscrollbars/overlayscrollbars.css";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";

const Scrollbar = ({ options, children, style, className, ...props }) => {
  return (
    <OverlayScrollbarsComponent
      options={{
        className: cn("os-theme-thin-dark", className),
        scrollbars: {
          autoHide: "scroll",
        },
        ...options,
      }}
      style={style}
      {...props}
    >
      {children}
    </OverlayScrollbarsComponent>
  );
};

export default Scrollbar;
