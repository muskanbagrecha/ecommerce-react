import { createContext, useState, useEffect } from "react";

export const AddressContext = createContext([]);

export const AddressProvider = ({ children }) => {
  const [addressData, setAddress] = useState([
    {
      id: 1,
      address:
        "43, Ruby Compound, M.karve Road, Kalbadevi Mumbai, Maharashtra, 400002",
    },
    {
      id: 2,
      address:
        "2nd Floor, 63, Devkaran Mansion No 2, Princess Street, Kalbadevi, Mumbai, Maharashtra, 400002",
    },
    {
      id: 3,
      address: "75, Annie Besant Rd, Worli, Mumbai, Maharashtra, 400018",
    },
  ]);
  const addAddress = (newAddress) => {
    setAddress([...addressData, newAddress]);
  };

  const editAddress = (id, newAddress) => {
    setAddress(
      addressData.map((address) => {
        if (address.id === id) {
          return { ...addressData, address: newAddress };
        }
        return address;
      })
    );
  };
  return (
    <AddressContext.Provider value={{ addressData, addAddress, editAddress }}>
      {children}
    </AddressContext.Provider>
  );
};
