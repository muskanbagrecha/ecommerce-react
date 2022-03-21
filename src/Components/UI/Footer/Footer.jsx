import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>
        Made with <span className="code-symbol">&lt; / &gt;</span> by Muskan
        Bagrecha
      </p>
      <ul className="footer__list">
        <li>
          <a href="https://www.linkedin.com/in/muskan-bagrecha-82bbb8176">
            <i className="fa fa-linkedin" aria-hidden="true"></i>
          </a>
        </li>
        <li>
          <a href="https://twitter.com/HoejackBorseman">
            <i className="fa fa-twitter" aria-hidden="true"></i>
          </a>
        </li>
        <li>
          <a href="https://github.com/muskanbagrecha">
            <i className="fa fa-github" aria-hidden="true"></i>
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/hoejackborsemaan">
            <i className="fa fa-instagram" aria-hidden="true"></i>
          </a>
        </li>
      </ul>
      <p className="copyright">© Fashgram'22</p>
    </footer>
  );
};

export default Footer;
