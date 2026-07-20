import type {
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

/**
 * =========================================================
 * BUTTON
 * =========================================================
 *
 * Reusable base button untuk seluruh portfolio.
 *
 * Component ini otomatis mendukung seluruh atribut button
 * bawaan HTML, seperti:
 *
 * - className
 * - onClick
 * - disabled
 * - aria-label
 * - name
 * - value
 *
 * Contoh:
 *
 * <Button
 *   className="bg-fuchsia-500 px-4 py-2"
 *   onClick={handleClick}
 * >
 *   Open project
 * </Button>
 *
 * =========================================================
 */
function Button({
  children,
  type = "button",
  ...buttonProps
}: ButtonProps) {
  return (
    <button
      type={type}
      {...buttonProps}
    >
      {children}
    </button>
  );
}

export default Button;