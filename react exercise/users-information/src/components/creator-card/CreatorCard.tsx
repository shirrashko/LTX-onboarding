import User from "../../types/User";
import "./CreatorCard.scss";

interface CreatorCardProps {
  creatorData: User;
}

function CreatorCard(creatorCardProps: CreatorCardProps) {
  return (
    <div className="creator-card">
      <div className="posts-preview" />
      <img
        className="creator-image"
        src={creatorCardProps.creatorData.profilePicture}
        alt="Creator"
      />
      <span className="creator-name">
        {creatorCardProps.creatorData.firstName}{" "}
        {creatorCardProps.creatorData.lastName}
      </span>
      <span className="creator-secondary-details">
        {creatorCardProps.creatorData.age} |{" "}
        {creatorCardProps.creatorData.address.city}{" "}
        {creatorCardProps.creatorData.address.state}
      </span>
      <span className="creator-email">
        {creatorCardProps.creatorData.email}
      </span>
      <button className="creator-details">Details</button>
    </div>
  );
}

export default CreatorCard;
