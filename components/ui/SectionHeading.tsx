import type { HTMLAttributes, ReactNode } from "react";

type EyebrowProps = HTMLAttributes<HTMLParagraphElement> & {
  children: ReactNode;
};

type DisplayHeadingProps = HTMLAttributes<HTMLHeadingElement> & {
  children: ReactNode;
  as?: "h1" | "h2" | "h3";
};

export function Eyebrow({ children, className = "", ...props }: EyebrowProps) {
  return (
    <p className={`ui-eyebrow ${className}`.trim()} {...props}>
      {children}
    </p>
  );
}

export function DisplayHeading({
  children,
  className = "",
  as: Tag = "h2",
  ...props
}: DisplayHeadingProps) {
  return (
    <Tag className={`ui-display ${className}`.trim()} {...props}>
      {children}
    </Tag>
  );
}
