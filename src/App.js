import "./App.css";
import Header from "./components/Header";
import Brand from "./components/brand";
import About from "./components/about";
import Section from "./components/section";
import BagSection from "./components/bag-section";
import Journal from "./components/journal";
import Instagram from "./components/instagram";
import Footer from "./components/footer";
import Men from "./components/men";

import React from 'react';
import {BrowserRouter, Route}  from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      
      <Header/>
      <Route path='/' exact render={(props)=>(
      <>
       <Brand  title="norway meets japan" subhead="visit the store" image="/bg.jpg"/>
      <Section
        subhead="the brand"
        mainhead=" No orwegian Rain State o of the art rainwear techno olo ogy meets high
          end tailo oring.."
        caption="Rainwear that combines cutting-edge technology with the finest
          tailoring. A conceptual approach to men's tailoring."
        extra="about the brand"
      />

      <About />
      <Section
        subhead="accessories"
        mainhead="Our small capsule co ollectio on o of accesso ories to o hammer ho ome o our waterpro oo of co oncept.."
        caption="A capsule colection of accessories that breaks down our concept of waterproofing."
      />
      <BagSection />
      <Section
        subhead="tokyo flagship"
        mainhead="Experience the sto ore"
        caption="You can see the inside of Norwegian Rain & T. Michael Tokyo Store online"
      />
      <Journal />
      <Instagram />
      </>
    )} />
    
    <Route path='/men' component={Men}/>

      <Footer />
      
    </div>
    
    
    </BrowserRouter>
  );
  
}

export default App;
