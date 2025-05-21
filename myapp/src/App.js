import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { KartlarProvider } from './context/KartlarContext';
import NavigationBar from './components/Navigation/NavigationBar';
import SearchFilter from './components/Search_Filter/SearchFilter';
import ElimdekiKartlar from './components/ElimdekiKartlar/ElimdekiKartlar';

function App() {
  return (
    <KartlarProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<NavigationBar />}>
            <Route index element={<SearchFilter />} />
            <Route path="elimdekikartlar" element={<ElimdekiKartlar />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </KartlarProvider>
  );
}

export default App;
