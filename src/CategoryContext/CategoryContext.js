import React, { createContext, useEffect, useState } from 'react';
export const Category=createContext()
const CategoryContext = ({children}) => {
    const [categoryName, setCategoryName]=useState("")
    const [storeProduct, setStoreProduct]=useState([])
    useEffect(()=>{
        fetch(`http://localhost:5000/allData?productType=${categoryName}`)
        .then(res=> res.json())
        .then(data=> setStoreProduct(data))
    },[categoryName])

    const userCategory={
        setCategoryName,
        storeProduct

    }
    return (
        <Category.Provider value={userCategory}>
            {children}
        </Category.Provider>
    );
};

export default CategoryContext;