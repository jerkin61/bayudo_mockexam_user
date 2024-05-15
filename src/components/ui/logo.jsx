import Image from "next/image";
import Link from "@components/ui/link";
import cn from "classnames";
import { siteSettings } from "@settings/site.settings";
import { useSettings } from "@contexts/settings.context";
import { useRouter } from "next/router";

const Logo = ({ className, whiteFont, ...props }) => {
  const { logo, siteTitle } = useSettings();
  return (
    <Link
      href={siteSettings.logo.href}
      className={cn("inline-flex", className)}
      {...props}
    >
      <span
        className="overflow-hidden relative"
        style={{
          width: siteSettings.logo.width,
          height: siteSettings.logo.height,
        }}
      >
        <Image
          src={whiteFont ? siteSettings.logo.darkUrl : siteSettings.logo.url}
          alt={siteTitle ?? siteSettings.logo.alt}
          width={250}
          height={250}
          objectFit="contain"
          loading="eager"
        />
      </span>
    </Link>
  );
};

export default Logo;
