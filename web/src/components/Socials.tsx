import { site } from "@/lib/site";
import { IconFacebook, IconInstagram, IconTiktok, IconWhatsapp } from "./Icons";

/** Solo se muestran las redes con URL definida (las que quedan en "#" se ocultan) */
export const socialLinks = [
  { label: "Facebook", href: site.socials.facebook, Icon: IconFacebook },
  { label: "Instagram", href: site.socials.instagram, Icon: IconInstagram },
  { label: "TikTok", href: site.socials.tiktok, Icon: IconTiktok },
  { label: "WhatsApp", href: site.socials.whatsapp, Icon: IconWhatsapp },
].filter((s) => s.href && s.href !== "#");

export default function Socials({ className = "", itemClassName = "" }: { className?: string; itemClassName?: string }) {
  return (
    <ul className={className}>
      {socialLinks.map(({ label, href, Icon }) => (
        <li key={label}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className={`grid size-10 place-items-center rounded-full transition duration-300 hover:-translate-y-0.5 ${itemClassName}`}
          >
            <Icon className="size-5" />
          </a>
        </li>
      ))}
    </ul>
  );
}
