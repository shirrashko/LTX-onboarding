import { User } from "../../types/user.ts";
import "./CreatorCard.scss";
import defaultProfilePicture from "../../assets/default-profile-picture.svg";
import { useNavigate } from "react-router-dom";
import RemoveUser from "../remove-user/RemoveUser.tsx";
import { forwardRef } from "react";

interface CreatorCardProps {
  user: User;
}

const CreatorCard = forwardRef<HTMLDivElement, CreatorCardProps>(
  ({ user }, ref) => {
    const navigate = useNavigate();

    const handleDetailsClick = () => {
      localStorage.setItem("selectedUserId", user.id.toString());
      navigate(`/user-profile/${user.id}`);
    };

    return (
      <div className={`creator-card`} ref={ref}>
        <div className="creator-card-body">
          <div className="creator-posts-container">
            <div className="creator-post" />
            <div className="creator-post" />
            <div className="creator-post" />
          </div>
          <img
            className="creator-profile-image"
            src={user.image || defaultProfilePicture}
            alt={`${user.firstName} ${user.lastName}'s profile picture`}
          />
          <div className="creator-details-container">
            <div className="creator-info">
              <span className="creator-full-name">
                {user.firstName} {user.lastName}
              </span>
              <span className="creator-metadata">
                {user.age} | {user.address.city} {user.address.state}
              </span>
            </div>
            <span className="creator-contact-email">{user.email}</span>
            <button
              className="view-details-button"
              onClick={handleDetailsClick}
            >
              Details
            </button>
          </div>
        </div>
        <RemoveUser userId={user.id} />
      </div>
    );
  }
);

export default CreatorCard;
