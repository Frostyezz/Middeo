import React from "react";
//@ts-ignore
import jazzicon from "@metamask/jazzicon";
import styles from "./AccountTab.module.scss";
import { Fade } from "@chakra-ui/react";

const AccountTab: React.FC<{ address: string }> = ({ address }) => {
  const avatarRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    const element = avatarRef.current;
    if (element && address) {
      const addr = address.slice(2, 10);
      const seed = parseInt(addr, 16);
      const icon = jazzicon(40, seed);
      if (element.firstChild) {
        element.removeChild(element.firstChild);
      }
      element.appendChild(icon);
    }
  }, [address, avatarRef]);

  return (
    <Fade in>
      <div className={styles.container}>
        <div className="flex items-center" ref={avatarRef} />
        <div className={styles.status}>
          <b>Connected with</b>
          <span className={styles.address}>
            {address.slice(0, 5)}...{address.slice(-4)}
          </span>
        </div>
      </div>
    </Fade>
  );
};

export default AccountTab;
