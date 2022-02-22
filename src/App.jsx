import Form from './components/Form/Form';
import Card from './components/Card/Card';
import './app.scss';

const formatDate = (dateObj) => {
    const year = dateObj.getFullYear();
    const month = dateObj.getMonth() + 1;
    const day = dateObj.getDate();
    const hours = dateObj.getHours();
    const mins = dateObj.getMinutes();

    return `${year}. ${month}. ${day} - ${hours}:${mins}`;
};

const testOrder = {
    id: 0,
    date: formatDate(new Date()),
    packagePoint: '1. számú posta - Pécs Légszeszgyár u 12./B',
    weight: 100
};

function App() {
    console.log(formatDate(new Date()));
    return (
        <div className="container">
            <h1 className="header">Megrendelő űrlap</h1>
            <Form />
            <h1 className="header">Megrendelések</h1>
            <Card order={testOrder} />
        </div>
    );
}

export default App;
