import "./list.scss";
import Card from "../card/Card";

function List({ posts }) {
  return (
    <div className="list">
      {posts.length > 0 ? (
        posts.map((item) => (
          <Card className="listItem" key={item.id} item={item} />
        ))
      ) : (
        <p>No Posts</p>
      )}
    </div>
  );
}

export default List;
