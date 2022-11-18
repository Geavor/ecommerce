import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="logo flex">
      <Link to="/">
        <img src="/eCommerce.svg" alt="Logo eCommerce" />
      </Link>
    </div>
  );
};

export default Logo;
