import Form from './components/Form/Form';
import Card from './components/Card/Card';
import './app.scss';

const testOrder = {
    id: 0,
    date: Date.now(),
    packagePoint: '1. számú posta - Pécs Légszeszgyár u 12./B',
    weight: 100
};

function App() {
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
