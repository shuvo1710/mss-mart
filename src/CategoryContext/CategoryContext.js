
import React, { createContext, useContext, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import Loder from '../Components/Loder/Loder';
import { toast } from 'react-hot-toast';
import { UserContext } from './AuthContext';



export const Category=createContext()
const CategoryContext = ({children}) => {
    const [modalData,setMOdalData] = useState([])
    const [categoryName, setCategoryName]=useState("")
    const {user} = useContext(UserContext)

    
    
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

const {data:productInfo = [], isLoading:emailVerifyLoading,refetch} = useQuery({

  queryKey: ['addGetCart', user?.email],
  queryFn: async () => {
      const res = await fetch(`http://localhost:5000/addGetCart?email=${user?.email}`)
      const data = await res.json();
      return data;
  }
})

const handlePostProductInfo=(email,products)=>{
  const postProductInfo={email,products}
  fetch('http://localhost:5000/addToCart',{
    method:"POST",
    headers:{
      'content-type':'application/json'
    },
    body:JSON.stringify(postProductInfo)
  })
  .then(res=>res.json())
  .then(data=>{
    refetch()
    toast.success('successFully data post addTo cart')
    
  })
}


const handleLoveCard =(email,products)=>{
  const product ={
    email,
    products
  }
  fetch('http://localhost:5000/loveProduct',{
    method:'POST',
    headers:{
      'content-type':'application/json'
    },
    body:JSON.stringify(product)
  })
  .then(res=>res.json())
  .then(data=>{
    loveRefetch()
    toast.success('love product add successFull')
  })
}

const {data:loveProduct, isLoading:loveLoad, refetch:loveRefetch} = useQuery({
  queryKey:['loveProduct', user?.email],
  queryFn: async ()=>{
    const res = await fetch (`http://localhost:5000/loveProduct?email=${user?.email}`)
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


  if(loveLoad){
    return <Loder/>
  }



 

  const userCategory = {
    setCategoryName,
    storeProduct,
    setMOdalData,
    modalData,
    bestSeals,
    handlePostProductInfo,
    productInfo,
    handleLoveCard,
    loveProduct
  };

  return <Category.Provider value={userCategory}>{children}</Category.Provider>;
};

export default CategoryContext;
