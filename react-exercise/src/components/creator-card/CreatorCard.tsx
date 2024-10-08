import { User } from "../../types/user.ts"; // Import defaultUser
import "./CreatorCard.scss";
import defaultProfilePicture from "../../assets/default-profile-picture.svg";

interface CreatorCardProps {
  creatorData: User;
}
function CreatorCard({ creatorData }: CreatorCardProps) {
  return (
    <div className="creator-card">
      <div className="creator-posts-container">
        <div className="creator-post" />
        <div className="creator-post" />
        <div className="creator-post" />
      </div>
      <img
        className="creator-profile-image"
        src={creatorData.image || defaultProfilePicture}
        alt={`${creatorData.firstName} ${creatorData.lastName}'s profile picture`}
      />
      <div className="creator-details-container">
        <div className="creator-info">
          <span className="creator-full-name">
            {creatorData.firstName} {creatorData.lastName}
          </span>
          <span className="creator-metadata">
            {creatorData.age} | {creatorData.address.city}{" "}
            {creatorData.address.state}
          </span>
        </div>
        <span className="creator-contact-email">{creatorData.email}</span>
        <button className="view-details-button">Details</button>
      </div>
    </div>
  );
}

export default CreatorCard;
