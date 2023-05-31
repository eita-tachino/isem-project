import Link from "next/link";

export const LinkButton = ({
  href,
  className,
  ariaLabel,
  title,
  disabled = false,
  children,
}) => {
  return (
    <Link
      href={disabled ? "#" : href}
      tabIndex={disabled ? "-1" : "0"}
      className={`group inline-block ${className}`}
      aria-label={ariaLabel}
      title={title}
      aria-disabled={disabled}
    >
      {children}
      <slot />
    </Link>
  );
};
