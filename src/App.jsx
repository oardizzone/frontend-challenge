import Form from './components/Form/Form';
import Card from './components/Card/Card';
import './app.scss';
import { useState, useRef, useEffect } from 'react';
import { formatDate } from './helpers';

const testOrders = [
    {
        id: 0,
        date: '2022. 2. 22 - 17:19',
        csomagpont: '1. számú posta - Pécs Légszeszgyár u 12./B',
        weight: 100
    },
    {
        id: 1,
        date: '2022. 2. 22 - 17:24',
        csomagpont: '2 sz. automata - Bécsi út Tesco',
        weight: 300
    }
];

function App() {
    const [orders, setOrders] = useLocalStorage('orders', testOrders);
    const [editingId, setEditingId] = useState(null);

    const formRef = useRef();

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const newOrder = {
            id: orders.length,
            date: formatDate(new Date()),
            csomagpont: formRef.current.address,
            weight: formRef.current.weight
        };

        if (editingId != null) {
            setOrders([...orders.map((order) => (order.id === editingId ? newOrder : order))]);
            setEditingId(null);
        } else {
            setOrders([...orders, newOrder]);
        }
        formRef.current.address = '';
        formRef.current.weight = '';
        formRef.current.clearSelect();
    };

    const handleEdit = (order) => {
        if (editingId !== order.id) {
            setEditingId(order.id);
            formRef.current.weight = order.weight;
            formRef.current.selectValue = order.csomagpont;
        } else {
            setEditingId(null);
            formRef.current.weight = '';
            formRef.current.clearSelect();
        }
    };

    const handleDelete = (order) => {
        setOrders([...orders.filter((o) => o.id !== order.id)]);
    };

    return (
        <div className="container">
            <h1 className="header">Megrendelő űrlap</h1>
            <Form ref={formRef} onSubmit={handleFormSubmit} />
            <h1 className="header">Megrendelések</h1>
            {orders.map((order) => (
                <Card
                    key={order.id}
                    order={order}
                    isEditing={editingId === order.id}
                    onDelete={() => {
                        handleDelete(order);
                    }}
                    onEdit={() => {
                        handleEdit(order);
                    }}
                />
            ))}
        </div>
    );
}

function useLocalStorage(key, initialValue) {
    const [value, setValue] = useState(() => {
        const persistentValue = window.localStorage.getItem(key);

        return persistentValue !== null ? JSON.parse(persistentValue) : initialValue;
    });

    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue];
}

export default App;
