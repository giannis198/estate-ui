import { useState } from "react";
import "./chat.scss";

const user = {
  img: "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png",
  name: "John Doe",
  email: "john@gmail.com",
};

function Chat() {
  const [chat, setChat] = useState(null);
  return (
    <div className="chat">
      <div className="messages">
        <h1>Messages</h1>
        <div className="message" onClick={() => setChat(true)}>
          <img src={user.img} alt="" />
          <span>{user.name}</span>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint,
            corporis.
          </p>
        </div>
        <div className="message">
          <img src={user.img} alt="" />
          <span>{user.name}</span>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint,
            corporis.
          </p>
        </div>
        <div className="message">
          <img src={user.img} alt="" />
          <span>{user.name}</span>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint,
            corporis.
          </p>
        </div>
        <div className="message">
          <img src={user.img} alt="" />
          <span>{user.name}</span>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint,
            corporis.
          </p>
        </div>
        <div className="message">
          <img src={user.img} alt="" />
          <span>{user.name}</span>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint,
            corporis.
          </p>
        </div>
        <div className="message">
          <img src={user.img} alt="" />
          <span>{user.name}</span>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint,
            corporis.
          </p>
        </div>
        <div className="message">
          <img src={user.img} alt="" />
          {user.name}
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint,
            corporis.
          </p>
        </div>
        <div className="message">
          <img src={user.img} alt="" />
          <span>{user.name}</span>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint,
            corporis.
          </p>
        </div>
      </div>
      {chat && (
        <div className="chatBox">
          <div className="top">
            <div className="user">
              <img src={user.img} alt="" />
              {user.name}
            </div>
            <span className="close" onClick={() => setChat(null)}>
              X
            </span>
          </div>
          <div className="center">
            <div className="chatMessage">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil
                repudiandae suscipit vitae, laboriosam nostrum sunt nobis quas
                delectus dolore pariatur!
              </p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil
                repudiandae suscipit vitae, laboriosam nostrum sunt nobis quas
                delectus dolore pariatur!
              </p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil
                repudiandae suscipit vitae, laboriosam nostrum sunt nobis quas
                delectus dolore pariatur!
              </p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil
                repudiandae suscipit vitae, laboriosam nostrum sunt nobis quas
                delectus dolore pariatur!
              </p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil
                repudiandae suscipit vitae, laboriosam nostrum sunt nobis quas
                delectus dolore pariatur!
              </p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil
                repudiandae suscipit vitae, laboriosam nostrum sunt nobis quas
                delectus dolore pariatur!
              </p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil
                repudiandae suscipit vitae, laboriosam nostrum sunt nobis quas
                delectus dolore pariatur!
              </p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil
                repudiandae suscipit vitae, laboriosam nostrum sunt nobis quas
                delectus dolore pariatur!
              </p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil
                repudiandae suscipit vitae, laboriosam nostrum sunt nobis quas
                delectus dolore pariatur!
              </p>
              <span>1 hour ago</span>
            </div>
          </div>
          <div className="bottom">
            <textarea />
            <button>Send</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Chat;
