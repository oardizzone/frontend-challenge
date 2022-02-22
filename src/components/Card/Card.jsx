import ButtonIcon from '../ui/ButtonIcon/ButtonIcon';
import { ReactComponent as DeleteIcon } from './../../svg/Delete.svg';
import { ReactComponent as EditIcon } from './../../svg/Edit.svg';

import './card.scss';

const Card = ({ order }) => {
    return (
        <section className="card">
            <div className="card__information">
                <h2 className="card__header">Dátum</h2>
                <p className="card__text">{order.date}</p>
            </div>
            <div className="card__information">
                <h2 className="card__header">Csomagpont neve</h2>
                <p className="card__text">{order.packagePoint}</p>
            </div>
            <div className="card__information">
                <h2 className="card__header">Küldemény súlya</h2>
                <p className="card__text">{order.weight} gramm</p>
            </div>
            <div className="card__control">
                <ButtonIcon>
                    <DeleteIcon />
                </ButtonIcon>
                <ButtonIcon>
                    <EditIcon />
                </ButtonIcon>
            </div>
        </section>
    );
};

export default Card;
