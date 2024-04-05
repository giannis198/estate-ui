import Chat from "../../components/chat/Chat";
import List from "../../components/list/List";
import "./profilePage.scss";

function ProfilePage() {
  const user = {
    img: "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png",
    name: "John Doe",
    email: "john@gmail.com",
  };
  return (
    <div className="profilePage">
      <div className="details">
        <div className="wrapper">
          <div className="title">
            <h1>User Information</h1>
            <button>Update Profile</button>
          </div>
          <div className="info">
            <span>
              Avatar :
              <img src={user.img} alt="" />
            </span>

            <span>
              Username : <b>{user.name}</b>
            </span>
            <span>
              Email : <b>{user.email}</b>
            </span>
          </div>
          <div className="title">
            <h1>My List</h1>
            <button>Add New Post</button>
          </div>
          <List />
          <div className="title">
            <h1>Saved List</h1>
          </div>
          <List />
        </div>
      </div>
      <div className="chatContainer">
        <div className="wrapper">
          <Chat />
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
