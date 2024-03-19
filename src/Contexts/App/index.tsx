import React, {useState, createContext, useContext} from 'react';

export const AppContext = createContext({});

type AppProviderProps = {
  children?: React.ReactNode;
};

export const useApp = () =>
  useContext<{
    showLoader?: boolean;
    setShowLoader?:(loader: boolean) => void;
  }>(AppContext);

export const AppProvider: React.FC<AppProviderProps> = ({children}) => {
  const [showLoader, setShowLoader] = useState(false);

  return (
    <AppContext.Provider
      value={{
        showLoader,
        setShowLoader,
      }}>
      {children}
    </AppContext.Provider>
  );
};
