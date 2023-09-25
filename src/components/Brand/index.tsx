import SantaClaus from '../../assets/images/santa-claus.svg';

import './styles.css';

function Brand() {
    return (
        <div className="brand">
            <img src={SantaClaus} alt="Papai Noel" />
            <h3>Feliz Natal</h3>
        </div>
    );
}

export default Brand;