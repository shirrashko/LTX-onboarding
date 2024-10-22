import { useNavigate } from "react-router-dom";
import { User } from "../../types/user";
import RemoveUser from "../remove-user/RemoveUser";

type RowProps = {
  user: User;
};
function UserTableRow({ user }: RowProps) {
  const navigate = useNavigate();
  const handleRowClick = () => {
    navigate(`/user-profile/${user.id}`);
  };
  return (
    <tr
      className="user-row"
      onClick={handleRowClick}
      style={{ cursor: "pointer" }}
    >
      <td className="user-identifier">
        <img className="user-profile-picture" src={user.image} alt="Profile" />
        <span className="user-name">
          {user.firstName} {user.lastName}
        </span>
      </td>
      <td className="user-info">{user.email}</td>
      <td className="user-info">{user.age}</td>
      <td className="user-info">
        {user.address.city}, {user.address.state}
      </td>
      <RemoveUser userId={user.id} />
    </tr>
  );
}
export default UserTableRow;
