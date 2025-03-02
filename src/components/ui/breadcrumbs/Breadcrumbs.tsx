import Link from "next/link";
import cn from "clsx";
import s from "./Breadcrumbs.module.scss";
import { ArrowRightIcon } from "@/assets/icons";
import { Typography } from "../typography";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { useTranslations } from "next-intl";

interface Props {
  className?: string;
}

export const Breadcrumbs = ({ className }: Props) => {
  const t = useTranslations("breadcrumbs");
  const { pathname } = useRouter();
  const dynamicPath = useSelector(
    (state: RootState) => state.breadcrumbs.breadcrumbs
  );

  if (
    !pathname ||
    pathname === "/" ||
    pathname === "/_error" ||
    pathname === "/404"
  )
    return null;

  const pathNames = pathname.split("/");

  function handlePathName(path: string) {
    switch (path) {
      case "":
        return { href: "/", name: t("home") };
      case "about":
        return { href: "/about", name: t("about") };
      case "contacts":
        return { href: "/contacts", name: t("contacts") };
      case "delivery-and-payment":
        return {
          href: "/delivery-and-payment",
          name: t("delivery_and_payment"),
        };
      case "regular-customer":
        return {
          href: "/regular-customer",
          name: t("regular_customer"),
        };
      case "shares":
        return { href: "/shares", name: t("shares") };
      case "for-business":
        return { href: "/for-business", name: t("for_business") };
      case "vacancies":
        return { href: "/vacancies", name: t("vacancies") };
      case "profile":
        return { href: "/profile", name: t("profile") };
      case "shopping-cart":
        return { href: "/shopping-cart", name: t("cart") };
      case "payment":
        return { href: "/payment", name: t("payment") };
      case "category":
        return { href: "/category", name: t("catalog") };
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
                  href={
                    item.is_subcategory
                      ? `/subcategory/${item.uuid}`
                      : `/category/${item.uuid}`
                  }
                  className={cn(s.link)}
                  variant="body_4"
                >
                  {item.name}
                </Typography>
              </li>
            );
          })}

        {/* {dynamicPath && !Array.isArray(dynamicPath) && (
          <li className={s.elem}>
            <ArrowRightIcon className={s.icon} />
            <Typography as={Link} href={dynamicPath.href} variant="body_4">
              {dynamicPath.name}
            </Typography>
          </li>
        )} */}
      </ul>
    </div>
  );
};
