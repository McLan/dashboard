import './App.css';
import DataTable from 'react-data-table-component';

const columns = [
  { name: 'Currency', selector: row => row.currency, sortable: true,},
  { name: 'Price', selector: row => row.price, sortable: true,},
  { name: 'Owned', selector: row => row.owned, sortable: true,},
  { name: 'Value', selector: row => row.value, sortable: true,},
  { name: 'Buy price', selector: row => row.buyPrice, sortable: true,},
  { name: 'PnL', selector: row => row.pnl, sortable: true,},
];

const data = [
  { id: 1, currency:'ZEN', price:10, owned:84, value:100, buyPrice:5, pnl:1+1 },
  { id: 2, currency:'FLUX', price:20, owned:2000, value:100, buyPrice:5, pnl:1+1 },
  { id: 3, currency:'EGLD', price:30, owned:19, value:100, buyPrice:5, pnl:1+1 },
  { id: 4, currency:'CRO', price:40, owned:10, value:100, buyPrice:5, pnl:1+1 },
  { id: 5, currency:'DIVI', price:50, owned:10, value:100, buyPrice:5, pnl:1+1 },
  { id: 6, currency:'THETA', price:60, owned:10, value:100, buyPrice:5, pnl:1+1 },
  { id: 7, currency:'SAND', price:70, owned:10, value:100, buyPrice:5, pnl:1+1 },
  { id: 8, currency:'CKB', price:80, owned:10, value:100, buyPrice:5, pnl:1+1 },
  { id: 9, currency:'UTK', price:90, owned:10, value:100, buyPrice:5, pnl:1+1 },
  { id: 9, currency:'MINA', price:90, owned:10, value:100, buyPrice:5, pnl:1+1 },
  { id: 9, currency:'ANKR', price:90, owned:10, value:100, buyPrice:5, pnl:1+1 },
  { id: 9, currency:'MANA', price:90, owned:10, value:100, buyPrice:5, pnl:1+1 },
  { id: 9, currency:'AXS', price:90, owned:10, value:100, buyPrice:5, pnl:1+1 },
  { id: 9, currency:'DOT', price:90, owned:10, value:100, buyPrice:5, pnl:1+1 },
  { id: 9, currency:'ITHEUM', price:90, owned:10, value:100, buyPrice:5, pnl:1+1 },
  { id: 9, currency:'ITHEUM', price:90, owned:10, value:100, buyPrice:5, pnl:1+1 },
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <DataTable columns={columns} data={data} //selectableRows 
            />
      </header>
    </div>
  );
}

export default App;
