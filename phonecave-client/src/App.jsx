import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import SinglePhonePage from './pages/SinglePhonePage';
import { loadPhones, loadSinglePhone } from './services/phones';
import PhonesListPage from './pages/PhonesListPage';

const App = () => {
  const [phones, setPhones] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    loadPhones().then((data) => {
      setPhones(data.phones);
    });
  }, []);

  return (
    <div className="App" style={{ width: '400px', margin: '0 auto' }}>
      <Navbar />

      <div className="container" style={{ marginTop: '1rem' }}>
        <div className="row" style={{ margin: '0 auto' }}>
          <div className="col">
            <PhonesListPage phones={phones} />
          </div>

          <div className="col">
            {(!isLoading && (
              <Routes>
                {/* <Route
                path="/phones"
                element={<PhonesListPage phones={phones} />}
              /> */}
                <Route path="/phones/:id" element={<SinglePhonePage />} />
              </Routes>
            )) ||
              'Wait, it`s loading!'}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
