import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

export default function Loading() {
  return (
    <div className="loading-container">
      <div className="rotate">
        <FontAwesomeIcon className="loading-inner-circle" icon={faCircle} />
      </div>
      <div className="loading-text">Loading...</div>
    </div>
  );
}
