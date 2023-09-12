import "./Footer.css"
import GitHub from "../../../public/github.png"
import Linkedin from "../../../public/linkedin.jpeg"
import Instagram from "../../../public/instagram.png"
import Harley from "../../../public/harley-davidson.png"

function Footer() {
    return (
        <footer>
            <div className="up-footer">
                <div className="links">
                    <h1>Motos</h1>
                    <a href="">Sportster™ S 2023</a>
                    <a href="">Low Rider ® S</a>
                    <a href="">Fat Bob ®</a>
                    <a href="">Road King ® Special</a>
                    <a href="">CVO™ Road Glide™ Limited</a>
                </div>
                <div className="links">
                    <h1>Acesso rápido</h1>
                    <a href="">Motos</a>
                    <a href="">Seminovas</a>
                    <a href="">Ofertas</a>
                    <a href="">Serviços</a>
                    <a href="">Peças e acessórios</a>
                    <a href="">MotorClothes</a>
                    <a href="">Test Ride</a>
                    <a href="">Sobre</a>
                </div>
                <div className="links">
                    <h1>Social</h1>
                    <div className="social">
                        <a href="https://github.com/DevDaniloSouza" target="_blank"><img src={GitHub} alt="GitHub" /></a>
                        <a href="https://www.linkedin.com/in/devdanilosouza/" target="_blank"><img src={Linkedin} alt="Linkedin" /></a>
                        <a href="https://www.instagram.com/danilopursino/" target="_blank"><img src={Instagram} alt="Instagram" /></a>
                    </div>
                </div>
            </div>
            <div>
                <div className="down-footer">
                    <img src={Harley} alt="Logo Harley-Davidoson" />
                    <div id="credits">
                        <p>Site desenvolvido por: <a  href="https://github.com/DevDaniloSouza" target="_blank">DevDaniloSouza</a></p>
                        <p>Inspirado na: <a target="_blank" href="https://theoneharley-davidson.com.br/">The One Harley-Davidson</a> - <span>©Todos os direitos reservados.</span></p>
                        <p>Acesse meu Portfólio: <a target="_blank" href="https://devdanilosouza.github.io/Portfolio/">devdanilosouza.github.io/Projetos/</a></p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer