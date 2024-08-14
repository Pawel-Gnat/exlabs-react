import { cn } from '../../utils/classNames';

interface ButtonProps {
  text: string;
  onClick: () => void;
  disabled?: boolean;
  className?: string;
  ariaLabel?: string;
  ariaCurrent?: 'page' | undefined;
}

export const Button = ({
  text,
  onClick,
  disabled,
  className,
  ariaLabel,
  ariaCurrent,
}: ButtonProps) => {
  return (
    <button
      className={cn(
        `rounded-xl border p-4 shadow-2xl transition-colors duration-300 hover:bg-black hover:text-white focus:bg-black focus:text-white ${className} disabled:bg-inherit disabled:text-inherit disabled:transition-none`,
      )}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      aria-current={ariaCurrent}
    >
      {text}
    </button>
  );
};
