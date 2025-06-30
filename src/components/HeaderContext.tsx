import { createContext, useContext, useState } from 'react';

const HeaderContext = createContext({
  hideHeader: false,
  setHideHeader: (value: boolean) => {},
});

export const HeaderProvider = ({ children }) => {
  const [hideHeader, setHideHeader] = useState(false);

  return (
    <HeaderContext.Provider value={{ hideHeader, setHideHeader }}>
      {children}
    </HeaderContext.Provider>
  );
};

export const useHeader = () => useContext(HeaderContext);
