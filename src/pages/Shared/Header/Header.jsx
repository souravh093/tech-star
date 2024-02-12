import React from "react";
import Container from "../../../components/shared/Container";
import Logo from "../../../components/utilsComponents/Logo";
import Search from "../../../components/utilsComponents/Search";
import { RiUser3Fill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-gray-950 py-2">
      <Container className={"flex items-center justify-between"}>
        <div className="flex items-center gap-10">
          <Logo />
          <div>
            <Search />
          </div>
        </div>
        <div className="flex items-center gap-3">
          <RiUser3Fill className="text-[#D2151C] text-3xl" />
          <Link to={"/account/login"} className="text-gray-50">
            <h3>Account</h3>
            <p className="text-sm text-gray-300">Register or Login</p>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default Header;
