import React from 'react';
import './App.css';
import logo from "../src/asserts/logo.png"
import no3 from "../src/asserts/3.png"
import no2 from "../src/asserts/2.png"
import no1 from "../src/asserts/1.png"

function App() {
  return (
    <>
    <div className='float'>
    <img src={no1}/>
    <div className="App">
    <img src={logo} className="App-logo" alt="logo" />
      <h2>C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</h2>
      <li>C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</li>
      <li>C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel. </li>
      <img src={no2}/>
      <p>Government of India has awarded the <span>"National Energy Conservation Award 2018".</span> Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.
</p>

</div>
</div>

<div className='partition'>
    <p>INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION. 
</p>
    <img src={no3}/>
    <p>Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors </p>
    <hr style={{border: "none", height: "1px", backgroundColor: "red"}}></hr>
    <h2>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</h2>
    <p>CHEMICALS & PROCESS POWER WATER & WASTE WATER OILS & GAS PHARMA SUGARS & DISTILLERIES PAPER & PULP MARINE & DEFENCE METAL & MINING FOOD & BEVERAGE PETROCHEMICAL & REFINERIES SOLAR BUILDING HVAC FIRE FIGHTING AGRICULTURE & RESIDENTIAL</p>
    </div>
    

    <footer className="App-footer">
        <div className="footer-content">
          <p><img width="24" height="24" src="https://img.icons8.com/material-outlined/24/FFFFFF/phone.png" alt="phone"/>
            <a href="tel:18002001234">Toll free: 1800 200 1234</a>
          </p>
          <p><img width="24" height="24" src="https://img.icons8.com/material-rounded/24/FFFFFF/facebook-new.png" alt="facebook-new"/>
            <a href="https://www.facebook.com/cripumps" target="_blank" rel="noreferrer">www.facebook.com/cripumps</a>
          </p>
          <p><img width="24" height="24" src="https://img.icons8.com/material-rounded/24/FFFFFF/internet.png" alt="internet"/>
            <a href="https://www.cripumps.com" target="_blank" rel="noreferrer">www.cripumps.com</a>
          </p>
        </div>
      </footer>

    </>


  );
}

export default App;