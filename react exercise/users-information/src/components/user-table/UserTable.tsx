import "../row/UserRow.scss";
import UserRow from "../row/UserRow";
import User from "../../types/user";
import "./UserTable.scss";

type UserTableProps = {
  users: User[];
};

function UserTable({ users }: UserTableProps) {
  return (
    <table className="user-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Age</th>
          <th>Location</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td colSpan={4}>
              <UserRow user={user} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default UserTable;
