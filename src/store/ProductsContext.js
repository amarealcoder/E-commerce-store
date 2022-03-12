import React, { createContext, useState, useEffect } from 'react';

const productsAPI = process.env.REACT_APP_PRODUCTSAPI_KEY;

export const ProductsContext = createContext();

export const ProductsProvider = (props) => {
  const [productItems, setProductItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // setIsLoading(true);

    fetch(productsAPI)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setProductItems(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
    // setIsLoading(false);
  }, []);

  return (
    <ProductsContext.Provider value={{ productItems, isLoading }}>
      {props.children}
    </ProductsContext.Provider>
  );
};
