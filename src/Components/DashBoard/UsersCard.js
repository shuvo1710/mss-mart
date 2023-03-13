import React, { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { UserContext } from "../../CategoryContext/AuthContext";
import UseAdmin from "../Hooks/UseAdmin";

const UsersCard = ({ userInfo, i }) => {
  const { user, logOut } = useContext(UserContext);
  const [isAdmin] = UseAdmin(userInfo?.email);

  return (
    <tr>
      <th>{i++}</th>
      <td>
        <img
          src={userInfo?.imageUrl}
          alt=""
          className="w-20 h-20 rounded-full"
        />
      </td>
      <td>{userInfo?.fullName}</td>
      <td>{userInfo?.email}</td>
      <td>
      {
        isAdmin ? <p className="text-xl font-semibold text-black">Admin</p> 
        :
        <div className="flex  items-center gap-8">
          <button className="btn bg-white text-black hover:bg-green-600 hover:text-white border-none hover:duration-300">Make Admin</button>
          <button className="btn bg-white text-black hover:bg-green-600 hover:text-white border-none hover:duration-300">
            <MdDelete className="" />
          </button>
        </div>
      }
       
      </td>
    </tr>
  );
};

export default UsersCard;
