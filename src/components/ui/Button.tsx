import { cn } from '@/utils/classNames';

interface ButtonProps {
  ariaCurrent?: 'page' | undefined;
  ariaLabel?: string;
  className?: string;
  disabled?: boolean;
  onClick: () => void;
  text: string;
}

export const Button = ({
  ariaCurrent,
  ariaLabel,
  className,
  disabled,
  onClick,
  text,
}: ButtonProps) => {
  return (
    <button
      aria-current={ariaCurrent}
      aria-label={ariaLabel}
      className={cn(
        `rounded-xl border p-4 shadow-2xl transition-colors duration-300 hover:bg-black hover:text-white focus:bg-black focus:text-white ${className} disabled:bg-inherit disabled:text-inherit disabled:transition-none`,
      )}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
