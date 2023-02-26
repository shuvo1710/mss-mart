
import React, { createContext, useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import Loder from '../Components/Loder/Loder';
export const Category=createContext()
const CategoryContext = ({children}) => {
    const [modalData,setMOdalData] = useState([])
    const [categoryName, setCategoryName]=useState("")
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


  const userCategory = {
    setCategoryName,
    storeProduct,
    setMOdalData,
    modalData,
  };

  return <Category.Provider value={userCategory}>{children}</Category.Provider>;
};

export default CategoryContext;
