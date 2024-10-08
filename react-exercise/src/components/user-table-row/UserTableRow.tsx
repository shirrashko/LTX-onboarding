import { User } from "../../types/user";

type RowProps = {
  user: User;
};

function Row({ user }: RowProps) {
  return (
    <div className="user-row">
      <div className="user-identifier">
        <img className="user-profile-picture" src={user.image} alt="Profile" />
        <div className="user-name">
          {user.firstName} {user.lastName}
        </div>
      </div>
      <div className="user-info">
        <div className="user-info-data">{user.email}</div>
        <div className="user-info-data">{user.age}</div>
        <div className="user-info-data">
          {user.address.city}, {user.address.state}
        </div>
      </div>
    </div>
  );
}

export default Row;
