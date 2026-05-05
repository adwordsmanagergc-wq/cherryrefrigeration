"use client";

import Link from "next/link";
import { type AnchorHTMLAttributes, type ReactNode, type MouseEvent } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  onClick?: (e: MouseEvent<HTMLAnchorElement>) => void;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "onClick">;

const FORM_ID = "quote";

export function QuoteCta({ children, className, onClick, ...rest }: Props) {
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    // If the current page has an embedded quote form, scroll to it instead of
    // navigating to /get-a-quote. We deliberately do NOT autofocus a form
    // input — on mobile that opens the keyboard and yanks the viewport.
    if (typeof document !== "undefined") {
      const target = document.getElementById(FORM_ID);
      if (target) {
        e.preventDefault();
        const headerOffset = 80; // sticky header height
        const top = target.getBoundingClientRect().top + window.scrollY - headerOffset;
        window.scrollTo({ top, behavior: "smooth" });
      }
    }
    onClick?.(e);
  };

  return (
    <Link href="/get-a-quote" className={className} onClick={handleClick} {...rest}>
      {children}
    </Link>
  );
}
