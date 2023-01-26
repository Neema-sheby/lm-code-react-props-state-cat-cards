interface catNumProp {
  numCat: number;
  numDog: number;
}

const Header: React.FC<catNumProp> = ({ numCat, numDog }) => (
  <header className="header__container">
    <h1 className="header__title header__welcome">Welcome to React!</h1>
    <h2 className="header__title">
      There are currently {numCat} Cats and {numDog} Dogs in this App
    </h2>
  </header>
);

export default Header;
