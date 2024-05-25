import "./App.css";
import {
  IoBatteryFull,
  IoCellular,
  IoLogoInstagram,
  IoWifi,
} from "react-icons/io5";
import { AiOutlineShopping, AiOutlineUser } from "react-icons/ai";
import { BiMoviePlay } from "react-icons/bi";
import {
  FaArrowLeft,
  FaBars,
  FaBorderAll,
  FaRegBookmark,
} from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import { MdOutlineVerified, MdShare } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import heroImage from "./assets/hero-image.png";
import profileImage from "./assets/profile.png";

// Define user profile data
const userProfile = {
  username: "Starchild 2.0 by Krissann Barretto",
  followers: "1M",
  subscribers: "222K",
  hobbies: ["Equalist", "Animale Lover, Happy Child"],
  description:
    "Social media- krissann@theplugmedia.in @theplugmedia.in Acting inquiries -teamkrissann@gmail.com@talentgram.agency",
  heroImage: heroImage,
  profileImage: profileImage,
};

function App() {
  return (
    <div className="main-container">
      <div className="status-bar">
        <p>9:41</p>
        <div className="flex">
          <IoCellular />
          <IoWifi />
          <IoBatteryFull />
        </div>
      </div>
      <div className="profile-header">
        <div>
          <FaArrowLeft />
        </div>
        <div>
          <h2>{userProfile.username}</h2>
          <span className="verified">
            <MdOutlineVerified />
          </span>
        </div>
        <div>
          <MdShare />
        </div>
      </div>
      <div className="hero-image">
        <img src={userProfile.heroImage} alt="hero-image" />
      </div>
      <div className="profile-section">
        <div className="profile">
          <img src={userProfile.profileImage} alt="profile-image" />
        </div>
        <div>
          <div className="profile-icon instagram">
            <IoLogoInstagram className="bold-icon" />
            <p>{userProfile.followers}</p>
          </div>
          <p>followers</p>
        </div>
        <div>
          <div className="profile-icon youtube">
            <FiYoutube className="bold-icon" />
            <p>{userProfile.subscribers}</p>
          </div>
          <p>subscribers</p>
        </div>
      </div>
      <div className="profile-name">
        <div>
          <h2>{userProfile.username}</h2>
        </div>
        <button>
          <FaPlus />
          Follow
        </button>
      </div>
      <p>Digital Creator</p>
      <div className="about">
        <div className="hobbies">
          {userProfile.hobbies.map((hoby) => {
            return (
              <p>{hoby}</p>
            );
          })}
        </div>
        <div className="social-media">{userProfile.description}</div>
      </div>
      <div className="icon-section">
        <div className="active">
          <BiMoviePlay />
        </div>
        <div>
          <AiOutlineShopping />
        </div>
        <div>
          <FaBorderAll />
        </div>
      </div>
      <div className="grid-section">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="bottom">
        <div>
          <FaBorderAll />
        </div>
        <div>
          <AiOutlineShopping />
        </div>
        <div>
          <FaRegBookmark />
        </div>
        <div>
          <AiOutlineUser />
        </div>
      </div>
    </div>
  );
}

export default App;
