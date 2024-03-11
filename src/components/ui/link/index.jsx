import NextLink from "next/link";

const Link = ({ href, children, className, ...props }) => {
  return (
    <NextLink href={href}>
      <a className={className} {...props}>
        {children}
      </a>
    </NextLink>
  );
};

export default Link;
