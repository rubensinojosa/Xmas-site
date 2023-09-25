import { Accessory } from '../../types/Accessory';
import './styles.css';

type Props = {
    acc: Accessory;
}

function AccessoryCard({ acc } : Props) {
    return (
        <div className="accessory-card">
            <div className="accessory-card__image">
                <img src={acc.image} alt={acc.image} />
            </div>

            <div className="accessory-card__content">
                <h4>{acc.name}</h4>
                <p>{acc.description}</p>
            </div>
        </div>
    );
}

export default AccessoryCard;