import GiftIcon from '../../assets/images/gift-icon.svg';

import './styles.css';

function Button() {
    return (
        <button className="btn">
            <img src={GiftIcon} alt="Presente" />
            Fazer doação
        </button>
    );
}

export default Button;