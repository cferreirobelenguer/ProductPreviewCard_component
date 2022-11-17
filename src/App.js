import './assets/css/style.css'
import {Card} from './components/Card'
import {CardResponsive} from './components/CardResponsive'
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <div>
      <div className="app_container">
        <Card></Card>
        <CardResponsive></CardResponsive>
      </div>
      
    </div>
  );
}

export default App;
