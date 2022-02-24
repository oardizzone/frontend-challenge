import ButtonIcon from '../ui/ButtonIcon/ButtonIcon';
import { ReactComponent as DeleteIcon } from './../../svg/Delete.svg';
import { ReactComponent as EditIcon } from './../../svg/Edit.svg';

import './card.scss';

const Card = ({ order, onEdit, onDelete, isEditing }) => {
    return (
        <section className="card">
            <div className="card__information--date">
                <h2 className="card__header">Dátum</h2>
                <p className="card__text">{order.date}</p>
            </div>
            <div className="card__information--csomagpont">
                <h2 className="card__header">Csomagpont neve</h2>
                <p className="card__text">{order.csomagpont}</p>
            </div>
            <div className="card__information--weight">
                <h2 className="card__header">Küldemény súlya</h2>
                <p className="card__text">{order.weight} gramm</p>
            </div>
            <div className="card__control">
                <ButtonIcon onClick={onDelete} disabled={isEditing}>
                    <DeleteIcon />
                </ButtonIcon>
                <ButtonIcon onClick={onEdit} toggled={isEditing}>
                    <EditIcon />
                </ButtonIcon>
            </div>
        </section>
    );
};

export default Card;
