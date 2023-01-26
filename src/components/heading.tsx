interface headinProp {
  heading: string;
}

const Heading: React.FC<headinProp> = function ({ heading }) {
  return <h2 className="header__subtitle">{heading}</h2>;
};

export default Heading;
