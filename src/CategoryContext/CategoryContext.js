
import React, { createContext, useContext, useState } from 'react';
import { useQuery } from '@tanstack/react-query';

import { toast } from 'react-hot-toast';
import { UserContext } from './AuthContext';
import Loader from '../Components/Loder/Loader';



export const Category=createContext()
const CategoryContext = ({children}) => {
    const [modalData,setMOdalData] = useState([])
    const [categoryName, setCategoryName]=useState('')
    const [productSlice, setProductSlice] = useState(10)
    const {user} = useContext(UserContext)

    
  const {data: allProducts = [], isLoading:allProductsLoader} = useQuery({
    queryKey:["allProducts", ],
    queryFn: async ()=>{
      const res = await fetch('http://localhost:5000/allProducts');
      const data = await res.json();
      return data;
    }
  })

    
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
    return <Loader />;
  }

  if(bestSealLoad){
    return <Loader/>
  }

  if(loveLoad){
    return <Loader/>
  }


  if(allProductsLoader){
    return <Loader/>
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
    loveProduct,
    allProducts,
    productSlice,
    // setProductSlice,
    // allProductsLoader
  };

  return <Category.Provider value={userCategory}>{children}</Category.Provider>;
};

export default CategoryContext;
