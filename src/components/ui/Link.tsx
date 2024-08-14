import { Link as RouterLink } from 'react-router-dom';

interface LinkProps {
  text: string;
  to: string;
}

export const Link = ({ text, to }: LinkProps) => {
  return (
    <RouterLink
      className="text-md mx-auto mt-2 w-fit rounded-xl border px-6 py-2 shadow-2xl transition-colors duration-300 hover:bg-black hover:text-white focus:bg-black focus:text-white md:mx-0"
      to={to}
    >
      {text}
    </RouterLink>
  );
};
