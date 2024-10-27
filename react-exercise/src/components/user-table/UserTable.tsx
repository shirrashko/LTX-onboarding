import "../user-table-row/UserTableRow.scss";
import UserTableRow from "../user-table-row/UserTableRow.tsx";
import { User } from "../../types/user.ts";
import "./UserTable.scss";

type UserTableProps = {
  users: User[];
};

function UserTable({ users }: UserTableProps) {
  return (
    <div className="user-table-container">
      <table className="user-table">
        <thead>
          <tr>
            <th className="identifier-header" id="header-name">
              Name
            </th>
            <th className="info-header" id="header-email">
              Email
            </th>
            <th className="info-header" id="header-age">
              Age
            </th>
            <th className="info-header" id="header-location">
              Location
            </th>
            <th className="action-header" id="header-action">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <UserTableRow key={user.id} user={user} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserTable;
