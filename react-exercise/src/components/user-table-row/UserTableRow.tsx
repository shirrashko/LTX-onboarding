import { useNavigate } from "react-router-dom";
import { User } from "../../types/user";
import RemoveUser from "../remove-user/RemoveUser";

type RowProps = {
  user: User;
};

function UserTableRow({ user }: RowProps) {
  const navigate = useNavigate();

  const handleTDClick = () => {
    navigate(`/user-profile/${user.id}`);
  };

  return (
    <tr className="user-row">
      <td className="user-identifier" onClick={handleTDClick}>
        <img className="user-profile-picture" src={user.image} alt="Profile" />
        <span className="user-name">
          {user.firstName} {user.lastName}
        </span>
      </td>
      <td className="user-info" onClick={handleTDClick}>
        {user.email}
      </td>
      <td className="user-info" onClick={handleTDClick}>
        {user.age}
      </td>
      <td className="user-info" onClick={handleTDClick}>
        {user.address.city}, {user.address.state}
      </td>
      <td className="user-action">
        <RemoveUser userId={user.id} />
      </td>
    </tr>
  );
}

export default UserTableRow;
