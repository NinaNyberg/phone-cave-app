import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import SinglePhonePage from './pages/SinglePhonePage';
import { loadPhones, loadSinglePhone } from './services/phones';
import PhonesListPage from './pages/PhonesListPage';

const App = () => {
  const [phones, setPhones] = useState([]);
  // const [phone, setPhone] = useState([]);

  // const { id } = useParams();
  // console.log(id);

  useEffect(() => {
    loadPhones().then((data) => {
      setPhones(data.phones);
    });
  }, []);

  // useEffect(() => {
  //   loadSinglePhone(id).then((data) => {
  //     console.log(data);
  //     setPhone(data);
  //   });
  // }, [id]);

  return (
    <div className="App">
      <Navbar />

      <div className="container">
        <div className="row">
          <div className="col">{/* <PhonesListPage phones={phones} /> */}</div>

          <div className="col">
            <Routes>
              <Route
                path="/phones"
                element={<PhonesListPage phones={phones} />}
              />
              <Route path="/phones/:id" element={<SinglePhonePage />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
