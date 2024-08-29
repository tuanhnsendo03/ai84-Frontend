import { FC, HTMLProps } from "react";
import { TemplateTheme } from "../ai-component-props";

interface LinkButtonProps extends HTMLProps<HTMLAnchorElement> {
  theme?: TemplateTheme;
}

const LinkButton: FC<LinkButtonProps> = ({
  theme,
  className,
  children,
  ...props
}) => {
  return (
    <a
      className={`text-sm font-semibold leading-6 ${
        theme === "dark" ? "text-ai-title-dark" : "text-ai-title-regular"
      } ${className ?? ""}`}
      {...props}
    >
      {children} <span aria-hidden="true">→</span>
    </a>
  );
};

export default LinkButton;
