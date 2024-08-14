interface TypographyProps {
  text: string;
}

export const Heading1 = ({ text }: TypographyProps) => {
  return <h1 className="my-12 text-3xl font-bold">{text}</h1>;
};
