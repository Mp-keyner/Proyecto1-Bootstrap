import React from 'react'
import ReactDOM from 'react-dom'
import { Header, Body} from './componets/App'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'

////////////////////////////////////////////////////////
// desarrollado por keyner de la hoz 
////////////////////////////////////////////////////////


const root = ReactDOM.createRoot(document.getElementById('page'));
root.render(<>
    <Header/>
    <Body/>
</>
);
