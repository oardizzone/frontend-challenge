import { useState, useRef, forwardRef, useImperativeHandle } from 'react';

import Input from '../ui/Input/Input';
import Select from 'react-select';
import ButtonPrimary from '../ui/ButtonPrimary/ButtonPrimary';
import data from '../../data/points.json';

import './form.scss';

const Form = ({ onSubmit }, ref) => {
    const addresses = data.map((address) => ({ label: address.title, value: address.title }));

    const [weight, setWeight] = useState('');
    const [address, setAddress] = useState('');

    const selectRef = useRef();

    useImperativeHandle(ref, () => ({
        set selectValue(value) {
            selectRef.current.setValue({ label: value, value: value });
        },

        set weight(value) {
            setWeight(value);
        },

        set address(value) {
            setAddress(value);
        },

        get address() {
            return address;
        },

        get weight() {
            return parseInt(weight);
        },

        clearSelect() {
            selectRef.current.clearValue();
        }
    }));

    const handleWeightInput = (e) => {
        const pattern = /^[0-9\b]+$/;

        if (e.target.value === '' || pattern.test(e.target.value)) {
            setWeight(e.target.value);
        }
    };

    const handleAddressChange = (e) => {
        if (!e) {
            return;
        }
        setAddress(e.value);
    };

    const formInputValid = parseInt(weight) > 0 && address !== '';

    return (
        <form className="form" onSubmit={onSubmit} data-testid="form">
            <h2 className="form__header">Küldemény súlya</h2>
            <Input className="form__input" placeholder="gramm" onInput={handleWeightInput} value={weight} />
            <h2 className="form__header">Csomagpont</h2>
            <Select
                className="form__dropdown"
                classNamePrefix="form__dropdown"
                placeholder=""
                options={addresses}
                onChange={handleAddressChange}
                ref={selectRef}
            />
            <ButtonPrimary text="Mentés" disabled={!formInputValid} />
        </form>
    );
};

export default forwardRef(Form);
