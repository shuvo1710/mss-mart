
import React, { createContext, useEffect, useState } from 'react';
import { useQuery } from 'react-query';
export const Category=createContext()
const CategoryContext = ({children}) => {
    const [modalData,setMOdalData] = useState([])
    const [categoryName, setCategoryName]=useState("")
    const [storeProduct, setStoreProduct]=useState([])
   
  const { data: storeProduct = [], isLoading } = useQuery({
    queryKey: ["allProduct", categoryName],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/allProduct?productType=${categoryName}`);
      const data = await res.json();
      return data;
    },
  });
  if (isLoading) {
    return <Loder />;
  }
  console.log(storeProduct);

  const userCategory = {
    setCategoryName,
    storeProduct,
    setMOdalData,
    modalData,
  };

  return <Category.Provider value={userCategory}>{children}</Category.Provider>;
};

export default CategoryContext;
