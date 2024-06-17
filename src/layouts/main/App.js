import myImg from "../../assets/my-img.jpg";
import "../../layouts/main/App.css";

function App() {
  return (
    <div className="App">
      <div className="my-image">
        <img src={myImg} className="my-img" alg="img" />
        <h1>misho khutsishvili</h1>
        <h2>React Developer</h2>
      </div>
      <div className="info">
        <h3>my profile</h3>
        <ul>
          <li>Gmail: mishoxuco2001@gmail.com</li>
          <li> Phone: +995 551 13 56 97</li>
          <li>
            GitHub:
            <a className="github-link" href="https://github.com/khutso2001">
              github.com
            </a>
          </li>
          <li>
            Linkedin:
            <a
              className="linkedin-link"
              href="https://www.linkedin.com/in/misho-xucishvili-303743265/"
            >
              linkedin.com
            </a>
          </li>
        </ul>

        <h3>About me</h3>
        <p>
          Hello, I'm Misho, I want to tell you a little about myself. I am 23
          years old. I have 2 years of experience as a manager, along with that
          I worked as a service and bar manager, organizing events and camps
          both with my own and non-governmental organizations. 2 years of
          experience as a sales manager. I have developed teamwork and know how
          important it is. I am focused on work and progress
        </p>
      </div>
    </div>
  );
}

export default App;
