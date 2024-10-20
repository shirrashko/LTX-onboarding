import { User } from "../../types/user.ts";
import "./Overview.scss";

interface OverviewProps {
  user: User;
}

function Overview({ user }: OverviewProps) {
  return (
    <div className="overview">
      <h3 className="title">About me</h3>
      <span className="content">
        Hi, I’m {user.firstName} {user.lastName}. I’m {user.age} years old and
        currently work as a {user.company?.title} in the{" "}
        {user.company?.department} department at {user.company?.name}. I
        graduated from {user.university}. I live in {user.address.city},{" "}
        {user.address.state}, and you can reach me at {user.email} or{" "}
        {user.phone}.
      </span>
    </div>
  );
}

export default Overview;
