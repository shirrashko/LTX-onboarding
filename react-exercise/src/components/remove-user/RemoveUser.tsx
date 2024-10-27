import { removeUser } from "../../usersClientService";
import "./RemoveUser.scss";
import Swal from "sweetalert2";

interface RemoveUserProps {
  userId: string;
}

function RemoveUser({ userId }: RemoveUserProps) {
  const handleRemoveClick = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        removeUser(userId);
        Swal.fire("Deleted!", "The user has been removed.", "success");
      }
    });
  };

  return (
    <button className="remove-user-button" onClick={handleRemoveClick}>
      Remove User
    </button>
  );
}

export default RemoveUser;
