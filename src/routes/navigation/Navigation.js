import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext } from "react";
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import "./Navigation.scss";

const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="navigatioLogo__container" to="/home">
          <CrownLogo className="navigatio__logo" />
        </Link>
        <div className="navigation__links">
          <Link className="link" to="shop">
            Shop
          </Link>
          {currentUser ? (
            <span className="link" onClick={signOutUser}>
              Sign out
            </span>
          ) : (
            <Link className="link" to="/auth">
              Sign in
            </Link>
          )}
          <CartIcon />
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
