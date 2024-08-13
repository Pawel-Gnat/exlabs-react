interface TypographyProps {
  text: string;
}

export const Heading1 = ({ text }: TypographyProps) => {
  return <h1 className="mb-4 text-3xl font-bold">{text}</h1>;
};
