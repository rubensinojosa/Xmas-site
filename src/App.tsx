import { accessory } from "./data/accessory";

import Button from "./components/Button"
import Navbar from "./components/Navbar"
import AccessoryCard from "./components/AccessoryCard";
import Footer from "./components/Footer";

import SendGiftXl from './assets/images/send-gift-xl.png';
import SendGiftLg from './assets/images/send-gift-lg.png';
import ReceiveGiftXl from './assets/images/receive-gift-xl.png';
import ReceiveGiftLg from './assets/images/receive-gift-lg.png';


function App() {

  return (
    <>
      <Navbar />

      <section className="hero">
        <div className="container">
          <div className="hero__info">
            <div className="hero__title">
              <h2>Feliz Natal e Feliz Ano Novo!</h2>
            </div>
            <div className="hero__text">
              <p>Nessas festas de fim de ano mande um presente para a pessoa amada e compartilhe a alegria do Natal.</p>
            </div>
            <div className="hero__btn">
              <Button />
            </div>
          </div>

          <picture className="hero__image">
            <source srcSet={SendGiftXl} media="(min-width: 1100px)" />
            <img src={SendGiftLg} alt="Presente" />
          </picture>
        </div>
      </section>

      <section id="accessories">
        <div className="container">
          <div className="accessories__title">
            <h2>Acessórios</h2>
            <p>Nessas festas de fim de ano mande um presente para a pessoa amada e compartilhe a alegria do Natal.</p>
          </div>

          <div className="accessories__content">
            {
              accessory.map(item => (
                <AccessoryCard key={item.id} acc={item} />
              ))
            }
          </div>
        </div>
      </section>

      <section id="donation">
        <div className="container">
          <picture className="donation__image">
            <source srcSet={ReceiveGiftXl} media="(min-width: 1100px)" />
            <img src={ReceiveGiftLg} alt="Doação" />
          </picture>

          <div className="donation__content">
            <h2>Comemore com muito amor!</h2>
            <p>Nestes feriados, festeje com muito amor e paz, oferecendo muitas bênçãos aos nossos entes queridos, amigos e vizinhos, desejando-lhes um Feliz Natal.</p>
            <div className="donation__btn">
              <Button />
            </div>
          </div>
        </div>
      </section>

      <Footer />

    </>
  )
}

export default App
