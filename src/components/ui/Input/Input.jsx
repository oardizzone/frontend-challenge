const Input = ({ className, placeholder, onInput, value }) => {
    return (
        <div className={`${className}__container`} data-placeholder={placeholder}>
            <input className={className} onInput={onInput} value={value} />
        </div>
    );
};

export default Input;
