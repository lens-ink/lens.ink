import { ReactNode } from "react";

const Button = ({
  children,
  onClick,
}: {
  children: ReactNode;
  onClick(): void;
}) => {
  return (
    <>
      <button
        onClick={() => onClick()}
        className="group h-8 mt-2 w-32 px-4 border-lensDark border-2 relative text-lensDark ring-lensDark hover:bg-rose-400 focus:ring-offset-1 focus:ring-2"
      >
        <span className="absolute bottom-0 left-0 w-full h-full md:h-0 bg-green-200 group-hover:h-full group-hover:transition-all duration-500"></span>
        <span className="absolute left-0 right-0 m-auto top-0 bottom-0 z-10">{children}</span>
      </button>
    </>
  );
};

export default Button;
