
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Cardcarosol from './Components/hero/Cardcarosol';
import BookingForm from './Components/Bookingform/BookingForm';
import NavScrollExample from './Components/header/Header';
import TopHeader from './Components/header/TopHeader';
import Aboutus from './Components/About/Aboutus';
import OurServices from './Components/OurServices/OurServices';
function App() {
  return (
    <div className="App">
      <TopHeader/>
     <NavScrollExample/>
     <Cardcarosol/>
     <BookingForm/>
     <Aboutus/>
     <OurServices/>
    </div>
  );
}

export default App;
