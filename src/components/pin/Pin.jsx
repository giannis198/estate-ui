import { Marker, Popup } from "react-leaflet";
import { Link } from "react-router-dom";
import "./pin.scss";
import "leaflet/dist/leaflet.css";

function Pin({ item }) {
  return (
    <Marker position={[item.latitude, item.longitude]}>
      <Popup>
        <div className="popupContainer">
          <img src={item.img} alt="" />
          <div className="textContainer">
            <Link to={`/${item.id}`}>{item.title}</Link>
            <span>{item.bedroom}&nbsp;bedroom</span>
            <b>$&nbsp;{item.price}</b>
          </div>
        </div>
      </Popup>
    </Marker>
  );
}

export default Pin;
