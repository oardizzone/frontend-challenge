import { useRef, useState } from 'react';

import Input from '../ui/Input/Input';
import Select from 'react-select';
import ButtonPrimary from '../ui/ButtonPrimary/ButtonPrimary';
import data from '../../data/points.json';

import './form.scss';

const Form = () => {
    const addresses = data.map((address) => ({ label: address.title, value: address.title }));

    const [weight, setWeight] = useState('');
    const [address, setAddress] = useState('');

    const handleWeightInput = (e) => {
        const pattern = /^[0-9\b]+$/;

        if (e.target.value === '' || pattern.test(e.target.value)) {
            setWeight(e.target.value);
        }
    };

    const handleAddressChange = (e) => {
        setAddress(e.value);
    };

    const formInputValid = parseInt(weight) > 0 && address !== '';

    return (
        <form className="form">
            <h2 className="form__header">Küldemény súlya</h2>
            <Input className="form__input" placeholder="gramm" onInput={handleWeightInput} value={weight} />
            <h2 className="form__header">Csomagpont</h2>
            <Select
                className="form__dropdown"
                classNamePrefix="form__dropdown"
                placeholder=""
                options={addresses}
                onChange={handleAddressChange}
            />
            <ButtonPrimary text="Mentés" disabled={!formInputValid} />
        </form>
    );
};

export default Form;
