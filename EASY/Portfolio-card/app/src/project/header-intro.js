import Profile from "./Me.jpg";

export default function Header() {
  return (
    <header className="head-section">
      <img className="profile-pic" src={Profile}></img>
      <h3 className="profile-name">Adhil Mohmd</h3>
      <p className="profile-definition">Software Developer</p>
      <small className="profile-site">adhilbayya.website</small>
    </header>
  );
}
