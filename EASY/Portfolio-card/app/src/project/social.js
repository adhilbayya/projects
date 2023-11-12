import EmailLogo from "./logos/emailblack.png";
import LinLogo from "./logos/linkedin.png";
export default function Social() {
  return (
    <div className="social-section">
      <div>
        <a href="mailto:adhilvk445@gmail.com">
          <button className="email">
            <img src={EmailLogo} width="10px"></img>
            &nbsp;Email
          </button>
        </a>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/adhil-mohammed-a36859254/">
          <button className="linkdin">
            <img src={LinLogo} width="10px"></img>
            &nbsp;Linkdin
          </button>
        </a>
      </div>
    </div>
  );
}
