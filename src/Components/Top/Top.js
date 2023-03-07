import { useEffect } from 'react';

const Top = () => {
   useEffect(()=>{
    window.scrollTo(0,0)
   },[])
   return null;
};

export default Top;