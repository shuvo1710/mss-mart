import React from "react";
import { MdDelete } from "react-icons/md";

const UsersCard = ({ user }) => {
  console.log(user);
  return (
    <tr>
     <td>
     <img src={user?.imageUrl} alt="" loading="lazy" width={50} height={50}/>
     </td>
      <td>2</td>
      <td>3</td>
      <td>4</td>
    </tr>
  );
};

export default UsersCard;
