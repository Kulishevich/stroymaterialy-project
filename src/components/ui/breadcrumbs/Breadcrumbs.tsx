"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import cn from "clsx";
import s from "./Breadcrumbs.module.scss";
import { ArrowRightIcon } from "@/assets/icons";
import { Typography } from "../typography";

interface DynamicPath {
  href: string;
  name: string;
}

interface Props {
  className?: string;
  dynamicPath?: DynamicPath | DynamicPath[];
}

export const Breadcrumbs = ({ className, dynamicPath }: Props) => {
  const pathname = usePathname();
  const pathNames = pathname.split("/");

  function handlePathName(path: string) {
    switch (path) {
      case "":
        return { href: "/", name: "Главная" };
      case "shares":
        return { href: "/shares", name: "Акции" };
      case "delivery-payment":
        return { href: "/delivery-payment", name: "Доставка и оплата" };
      case "offer-contract":
        return { href: "/offer-contract", name: "Договор оферты" };
      case "privacy-policy":
        return { href: "/privacy-policy", name: "Политика конфиденциальности" };
      case "contacts":
        return { href: "/contacts", name: "Контакты" };
      case "news":
        return { href: "/news", name: "Новости" };
      default:
        break;
    }
  }

  return (
    <div className={s.container}>
      <ul className={cn(s.list, className)}>
        {pathNames.map((pathName, idx) => {
          const path = handlePathName(pathName);
          const isCurrentPage = pathname.split("/").pop() == pathName;
          const isNotEmpty = !!path && Boolean(idx);

          return (
            <li className={s.elem} key={idx}>
              {isNotEmpty && <ArrowRightIcon className={s.icon} />}
              <Typography
                as={Link}
                href={path?.href || "/"}
                className={cn(!isCurrentPage && s.link)}
                variant="body_4"
              >
                {path?.name}
              </Typography>
            </li>
          );
        })}

        {dynamicPath &&
          Array.isArray(dynamicPath) &&
          dynamicPath.map((item, idx) => {
            return (
              <li key={idx} className={s.li}>
                <ArrowRightIcon className={s.icon} />
                <Typography
                  as={Link}
                  href={item.href}
                  className={cn(idx + 1 !== dynamicPath.length && s.link)}
                  variant="body_4"
                >
                  {item.name}
                </Typography>
              </li>
            );
          })}

        {dynamicPath && !Array.isArray(dynamicPath) && (
          <li className={s.elem}>
            <ArrowRightIcon className={s.icon} />
            <Typography as={Link} href={dynamicPath.href} variant="body_4">
              {dynamicPath.name}
            </Typography>
          </li>
        )}
      </ul>
    </div>
  );
};
