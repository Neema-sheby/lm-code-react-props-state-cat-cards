import { ReactNode } from "react";

interface btnProp {
  className: string;
  children: ReactNode;
}

const Button: React.FC<btnProp> = ({ className, children }) => {
  return <button className={className}>{children}</button>;
};

export default Button;
