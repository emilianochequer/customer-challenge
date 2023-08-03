import { createContext, useContext, useState } from "react";
export const AppContext = createContext(null);

import PropTypes from "prop-types";

export const AppProvider = ({ children }) => {
  const [searchCriteria, setSearchCriteria] = useState({
    customerInfo: {
      firstName: "",
      lastName: "",
      ssn: "",
      phoneNumber: "",
      Id: "",
    },
    salesNumber: "",
    receiptNumber: "",
    quoteNumber: "",
    itemInformation: {
      manufacturer: "",
      itemNumber: "",
    },
    merchantServiceTransaction: "",
  });
  const [searchResult, setSeartchResult] = useState(undefined);
  const context = {
    searchCriteria,
    setSearchCriteria,
    searchResult,
    setSeartchResult,
  };

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
};

export function useAppContext() {
  const context = AppContext;
  if (!context) {
    console.error("There is an error with explorer context");
  }
  return useContext(context);
}

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
