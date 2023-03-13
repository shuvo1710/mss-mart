import { useQuery } from "@tanstack/react-query";
import React from "react";
import { UserContext } from "../../CategoryContext/AuthContext";
import Loader from "../Loder/Loader";
import UsersCard from "./UsersCard";

const Users = () => {
  const { data: users = [], isLoading } = useQuery({
    queryKey: ["userInfo"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/userInfo");
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="my-10 ">
     
      <table className="w-full">
        <thead className="text-start">
          <tr className="text-start">
            <th>Picture</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody className="w-full">
        
        {users?.map((user) => <UsersCard key={user?._id} user={user}></UsersCard>)}
      
        </tbody>
      </table>
    </div>
  );
};

export default Users;
