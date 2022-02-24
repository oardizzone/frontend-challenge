import './input.scss';

const Input = ({ className, placeholder, onInput, value }) => {
    return (
        <div className="input__container" data-placeholder={placeholder}>
            <input className="input" onInput={onInput} value={value} />
        </div>
    );
};

export default Input;
