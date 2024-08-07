import cn from "classnames";
import Image from "next/image";

const Avatar = ({ src, className, title, ...rest }) => {
  return (
    <div
      className={cn(
        "relative cursor-pointer w-10 h-10 overflow-hidden rounded-full border border-border-100",
        className
      )}
      {...rest}
    >
      <Image alt={title} src={src} layout="fill" priority={true} />
    </div>
  );
};

export default Avatar;
