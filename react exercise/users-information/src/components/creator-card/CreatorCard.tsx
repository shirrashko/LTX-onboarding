import User from "../../types/user.ts";
import "./CreatorCard.scss";

interface CreatorCardProps {
  creatorData: User;
}

function CreatorCard({ creatorData }: CreatorCardProps) {
  return (
    <div className="creator-card">
      <div className="creator-posts-container" />
      <img
        className="creator-profile-image"
        src={creatorData.profilePicture}
        alt="Creator"
      />
      <div className="creator-details-container">
        <span className="creator-full-name">
          {creatorData.firstName} {creatorData.lastName}
        </span>
        <span className="creator-metadata">
          {creatorData.age} | {creatorData.address.city}{" "}
          {creatorData.address.state}
        </span>
        <span className="creator-contact-email">{creatorData.email}</span>
        <button className="view-details-button">Details</button>
      </div>
    </div>
  );
}

export default CreatorCard;
