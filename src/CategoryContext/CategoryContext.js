
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

const {data:bestSeals = [], isLoading: bestSealLoad} = useQuery({
  queryKey:["bestSeals"],
  queryFn: async ()=>{
    const res = await fetch('http://localhost:5000/bestSeal');
    const data = await res.json()
    return data;
  }
})


  if (isLoading) {
    return <Loder />;
  }

  if(bestSealLoad){
    return <Loder/>
  }

  // console.log(bestSeals);
 



  const userCategory = {
    setCategoryName,
    storeProduct,
    setMOdalData,
    modalData,
    bestSeals
  };

  return <Category.Provider value={userCategory}>{children}</Category.Provider>;
};

export default CategoryContext;
