import React, { useContext, useState } from "react";

const mainContext = React.createContext();
const updateContext = React.createContext();

export const mainC = () => {
  return useContext(mainContext);
};
export const upCont = () => {
  return useContext(updateContext);
};

const PProperties = ({ children }) => {
  const [properties, setProperties] = useState({
    isBold: false,
    isItalic: false,
    isQuote: false,
    isLink: false,
    isBullet: false,
    isList: false,
    isPic: false,
    isCode: false,
    isBraket: false,
  });

  const toggleItalic = () => {
    setProperties((prev) => {
      return { ...prev, isItalic: !prev.isItalic };
    });
  };

  const toggleBold = () => {
    setProperties((prev) => {
      return { ...prev, isBold: !prev.isBold };
    });
  };

  const toggleQuote = () => {
    setProperties((prev) => {
      return { ...prev, isQuote: !prev.isQuote };
    });
  };
  const toggleLink = () => {
    setProperties((prev) => {
      return { ...prev, isLink: !prev.isLink };
    });
  };
  const bullet = () => {
    setProperties((prev) => {
      return { ...prev, isBullet: !prev.isBullet };
    });
  };
  const toggleList = () => {
    setProperties((prev) => {
      return { ...prev, isList: !prev.isList };
    });
  };
  const pic = () => {
    setProperties((prev) => {
      return { ...prev, isPic: !prev.isPic };
    });
  };
  const Code = () => {
    setProperties((prev) => {
      return { ...prev, isCode: !prev.isCode };
    });
  };
  const Bracket = () => {
    setProperties((prev) => {
      return { ...prev, isBraket: !prev.isBraket };
    });
  };

  return (
    <mainContext.Provider value={properties}>
      <updateContext.Provider
        value={{
          toggleBold,
          toggleItalic,
          toggleQuote,
          toggleLink,
          bullet,
          toggleList,
          pic,
          Code,
          Bracket,
        }}
      >
        {children}
      </updateContext.Provider>
    </mainContext.Provider>
  );
};

export default PProperties;
