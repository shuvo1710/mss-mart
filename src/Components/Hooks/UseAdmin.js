import { useEffect, useState } from "react"

const UseAdmin=email=>{
    const [isAdmin, setIsAdmin]=useState(false)
    const [adminLoading, setAdminLoading]=useState(true)

    useEffect(()=>{
        if(email){
            fetch(`https://mss-mart-server.vercel.app/allUser?email=${email}`)
            .then(res=> res.json())
            .then(data=>{
                
               setIsAdmin(data.isAdmin)
               setAdminLoading(false)
            })
        }
    },[email])
    return [isAdmin, adminLoading]
}

export default UseAdmin;