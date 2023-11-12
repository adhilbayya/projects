import FbLogo from "./logos/facebook.png";
import InstaLogo from "./logos/instagram.png";
import GitHubLogo from "./logos/github.png";
import TwitterLogo from "./logos/twitter.png";

export default function Footer() {
  return (
    <div className="footer-section">
      <div className="footer-social">
        <a href="https://www.facebook.com/adhil.m.vk">
          <img src={FbLogo} width="30px"></img>
        </a>
        <a href="https://www.instagram.com/__bayya_/">
          <img src={InstaLogo} width="30px"></img>
        </a>
        <a href="https://twitter.com/AdhilBayya">
          <img className="twitter-logo" src={TwitterLogo} width="30px"></img>
        </a>
        <a href="https://github.com/adhilbayya">
          <img className="github-logo" src={GitHubLogo} width="30px"></img>
        </a>
      </div>
    </div>
  );
}
