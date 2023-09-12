import "./Header.css"
import Harley from "../../../public/harley-davidson.png"

function Header() {
    return (
      <header>
        <div className="header-up">
            <img src={Harley} alt="Harley-Davidson logo" id="logo" />
            <div className="up-nav">
                <a href="#">WhatsApp</a>
                <a href="#">Localização</a>
                <a href="#">Telefones</a>
            </div>
        </div>
        <nav>
            <a href="#">Motos</a>
            <a href="#">Seminovas</a>
            <a href="#">Ofertas</a>
            <a href="#">Serviços</a>
            <a href="#">Peças e acessórios</a>
            <a href="#">Motorclothes</a>
            <a href="#">Test ride</a>
            <a href="#">Sobre</a>
            <a href="#">Fale conosco</a>
        </nav>
      </header>
    )
}

export default Header