import NextLink from "next/link";

const Link = ({ href, children, className, ...props }) => {
  return (
    <NextLink href={href}>
      <span className={className} {...props}>
        {children}
      </span>
    </NextLink>
  );
};

export default Link;
