interface TitleProps {
  title: string;
}

export function Title({ title }: TitleProps) {
  return (
    <h2 className={"mb-3 text-center text-2xl text-violet-400"}>{title}</h2>
  );
}
