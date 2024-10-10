import "../user-table-row/UserTableRow.scss";
import UserTableRow from "../user-table-row/UserTableRow.tsx";
import { User } from "../../types/user";
import "./UserTable.scss";

type UserTableProps = {
  users: User[];
};

function UserTable({ users }: UserTableProps): JSX.Element {
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
              <UserTableRow user={user} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default UserTable;
