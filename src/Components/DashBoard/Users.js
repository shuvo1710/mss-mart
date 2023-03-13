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
    <div className="overflow-x-auto">
    <table className="table w-full">
      {/* head*/}
      <thead>
        <tr>
          <th>No.</th>
          <th>Picture</th>
          <th>Name</th>
          <th>Email</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
    
        
        {users?.map((userInfo, i) => <UsersCard key={userInfo?._id} userInfo={userInfo} i={i}></UsersCard>)}
        
      </tbody>
    </table>
  </div>
  );
};

export default Users;
