import React from "react";
import { Button } from "@chakra-ui/react";

const MetaMaskButton: React.FC = () => {
  return (
    <Button
      leftIcon={
        <img
          src="/MetaMask.svg"
          alt="MetaMask Icon"
          style={{ width: 30, height: 30 }}
        />
      }
      colorScheme="orange"
      size="lg"
      onClick={() =>
        //@ts-ignore
        window.ethereum.request({ method: "eth_requestAccounts" })
      }
    >
      Connect with MetaMask
    </Button>
  );
};

export default MetaMaskButton;
