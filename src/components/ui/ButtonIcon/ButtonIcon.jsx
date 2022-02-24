import './buttonIcon.scss';

const ButtonIcon = ({ children, onClick, disabled, toggled }) => {
    return (
        <button className={toggled ? `button-icon--toggled` : 'button-icon'} onClick={onClick} disabled={disabled}>
            {children}
        </button>
    );
};

export default ButtonIcon;
