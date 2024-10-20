import { User } from "../../types/user";

type RowProps = {
  user: User;
};

function UserTableRow({ user }: RowProps) {
  return (
    <tr className="user-row">
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
    </tr>
  );
}

export default UserTableRow;
