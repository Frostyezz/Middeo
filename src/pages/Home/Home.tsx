import React from "react";
import styles from "./Home.module.scss";
import { Button } from "@chakra-ui/react";
import { BinocularsFill, FilePlusFill } from "react-bootstrap-icons";

const Home = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.hero}>
        <div className="flex col center-y animate__animated animate__fadeInUp">
          <h1>
            Find your new exciting <span>project</span> or{" "}
            <span>freelancer</span>
          </h1>
          <div className="flex row">
            <Button leftIcon={<BinocularsFill />} colorScheme="gray">
              Discover posts
            </Button>
            <Button leftIcon={<FilePlusFill />} colorScheme="blue">
              Create a post
            </Button>
          </div>
        </div>
        <img
          src="/working_girl.png"
          alt="working girl"
          className="animate__animated animate__fadeIn"
        />
      </div>
    </div>
  );
};

export default Home;
