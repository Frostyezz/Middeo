import React from "react";
import web3 from "../web3";

interface Context {
  accounts: string[];
}

const AccountContext = React.createContext<Context>({ accounts: [] });

const AccountProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [accounts, setAccounts] = React.useState<string[]>([]);

  React.useEffect(() => {
    const checkInterval = setInterval(async () => {
      const accountsFound = await web3.eth.getAccounts();
      if (accounts.length !== accountsFound.length) setAccounts(accountsFound);
    }, 1000);

    return () => {
      clearInterval(checkInterval);
    };
  }, [accounts]);

  return (
    <AccountContext.Provider value={{ accounts }}>
      {children}
    </AccountContext.Provider>
  );
};

export { AccountContext, AccountProvider };
