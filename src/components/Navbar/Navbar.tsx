import React from "react";
import { Link } from "react-router-dom";
import { LayersFill } from "react-bootstrap-icons";
import { AccountContext } from "../../contexts/AccountContext";

import styles from "./Navbar.module.scss";
import MetaMaskButton from "../MetaMaskButton/MetaMaskButton";
import AccountTab from "../AccountTab/AccountTab";

const Navbar = () => {
  const { accounts } = React.useContext(AccountContext);

  return (
    <nav className={styles.nav}>
      <div className="flex row items-center pointer">
        <LayersFill />
        <h1>Middeo</h1>
      </div>
      <div className="flex row">
        <Link to="/">Posts</Link>
        <Link to="/">My Posts</Link>
        <Link to="/">My Candidatures</Link>
      </div>
      {accounts.length ? (
        <AccountTab address={accounts[0]} />
      ) : (
        <MetaMaskButton />
      )}
    </nav>
  );
};

export default Navbar;
