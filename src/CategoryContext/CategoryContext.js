import React, { createContext, useEffect, useState } from 'react';
import { useQuery } from 'react-query';
export const Category=createContext()
const CategoryContext = ({children}) => {
    const [modalData,setMOdalData] = useState([])
    const [categoryName, setCategoryName]=useState("")
    const [storeProduct, setStoreProduct]=useState([])
    useEffect(()=>{
        fetch(`http://localhost:5000/allProduct`)
        .then(res=> res.json())
        .then(data=> setStoreProduct(data))
    },[categoryName])
    

    // const {data:allProduct = [], isLoading} = useQuery({
    //     queryKey: ['allProduct'],
    //     queryFn: async ()=>{
    //         const res = await fetch('http://localhost:5000/allProduct')
    //         const data = await res.json()
    //         return data;
    //     }
    // })
    // console.log(allProduct)

    const userCategory={
        setCategoryName,
        storeProduct,
        setMOdalData,
        modalData
    }
    
    return (
        <Category.Provider value={userCategory}>
            {children}
        </Category.Provider>
    );
};

export default CategoryContext;