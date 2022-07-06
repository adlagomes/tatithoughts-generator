import { FaRegHeart } from "react-icons/fa";
import "../styles/footer.css"
function Footer() {
  return (
    <div className="Footer">
      <footer>
        Feito com <FaRegHeart /> por{" "}
        <a
          href="https://www.linkedin.com/in/adlagomes/"
          target="_blank"
          rel="noreferrer"
        >
          Adla Gomes
        </a>{" "}
        - 2022
      </footer>
    </div>
  );
}

export default Footer;