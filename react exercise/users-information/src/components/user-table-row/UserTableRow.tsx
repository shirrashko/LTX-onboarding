import { User } from "../../types/user";

type RowProps = {
  user: User;
};

function Row({ user }: RowProps): JSX.Element {
  return (
    <div className="user-row">
      <div className="user-identifier">
        <img className="user-profile-picture" src={user.image} alt="Profile" />
        <div className="user-name">
          {user.firstName} {user.lastName}
        </div>
      </div>
      <div className="user-info">
        <div className="user-info-table">{user.email}</div>
        <div className="user-info-table">{user.age}</div>
        <div className="user-info-table">
          {user.address.city}, {user.address.state}
        </div>
      </div>
    </div>
  );
}

export default Row;
