import type { AnchorHTMLAttributes, ReactNode } from 'react';

type ButtonLinkProps = {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
} & AnchorHTMLAttributes<HTMLAnchorElement>;

export function ButtonLink({
  children,
  className = '',
  variant = 'primary',
  ...props
}: ButtonLinkProps) {
  return (
    <a
      className={`button-link button-link-${variant} ${className}`.trim()}
      {...props}
    >
      {children}
    </a>
  );
}
