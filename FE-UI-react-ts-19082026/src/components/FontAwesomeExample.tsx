import {
  faEnvelope,
  faHeart,
  faHouse,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function FontAwesomeExample() {
  return (
    <div className="flex items-center gap-6 p-8">
      <FontAwesomeIcon icon={faHouse} className="text-2xl text-blue-500" />

      <FontAwesomeIcon icon={faUser} className="text-2xl text-green-500" />

      <FontAwesomeIcon icon={faEnvelope} className="text-2xl text-purple-500" />

      <FontAwesomeIcon icon={faHeart} className="text-2xl text-red-500" />
    </div>
  );
}
