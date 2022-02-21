import './buttonPrimary.scss';

const ButtonPrimary = ({ disabled, text, onClick }) => {
    return (
        <button className="button--primary" disabled={disabled} onClick={onClick}>
            {text}
        </button>
    );
};

export default ButtonPrimary;
