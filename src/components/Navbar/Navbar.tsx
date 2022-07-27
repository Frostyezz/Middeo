import React from "react";
import { Link } from "react-router-dom";
import { Input, InputGroup, InputRightElement, Button } from "@chakra-ui/react";
import { PersonBadge, Search } from "react-bootstrap-icons";

import styles from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <img src="/logoo.png" alt="logo" />
      <ul>
        <div>
          <PersonBadge />
          <Link to="/">Posts</Link>
        </div>
        <div>
          <PersonBadge />
          <Link to="/">Posts</Link>
        </div>
        <div>
          <PersonBadge />
          <Link to="/">Posts</Link>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
