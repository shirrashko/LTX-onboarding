import Topper from "../../components/topper/Topper";
import { User } from "../../types/user.ts";

interface UserProfileProps {
  user: User;
}

function UserProfile({ user }: UserProfileProps) {
  return (
    <div>
      <Topper />

      <img
        className="user-image"
        src={user.image}
        alt={`${user.firstName} ${user.lastName}'s profile picture`}
      />

      <h1>User Profile</h1>
    </div>
  );
}

export default UserProfile;
