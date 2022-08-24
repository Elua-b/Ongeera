import React from "react";
import "./Home.css";
// import FiPlay from 'react-icons/fi'
function Home() {
  return (
    <div className="Home">
      <div className="container1">
        <h1>Improve a fertilised Yield</h1>
        
        <div className="sent spcl">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium
          placeat beatae illum veritatis quos, debitis ut distinctio! Illo
          idacdvndjvnjvnf knvfmkbf kjnbfb Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Maiores beatae neque delectus autem nemo itaque vero
          dolore modi nulla doloremque cumque exercitationem error minima
          incidunt pariatur, fugiat suscipit ipsum! Deserunt.
        </div>
        <div className="buttons">
            <button className="ab-button">About Ongeera</button>
            <button className="wa-button" > <span><img className="watch" src="/watch.png" alt="" /></span> Watch Video</button>
        </div>
        <div className="cards">
            <div className="card-item">
                <div className="image">
                    <img src="/img1.png" className="img" alt="" />
                </div>
                <div className="words">
                    <h3>Natural Food</h3>
                    <p className="spcl">Nam porta neque vel</p>
                   <p className="spcl">lectus dictums</p>
                </div>
            </div>
            <div className="card-item">
                <div className="image">
                    <img src="/img1.png" className="img" alt="" />
                </div>
                <div className="words">
                    <h3>Natural Food</h3>
                    <p className="spcl">Nam porta neque vel</p>
                   <p className="spcl">lectus dictums</p>
                </div>
            </div> <div className="card-item">
                <div className="image">
                    <img src="/img1.png" className="img" alt="" />
                </div>
                <div className="words">
                    <h3>Natural Food</h3>
                    <p className="spcl">Nam porta neque vel</p>
                   <p className="spcl">lectus dictums</p>
                </div>
            </div>
        </div>
      </div>
      <div className="container2">
        <img src="/fertiliser.jpg" alt="" />
      </div>
    </div>
  );
}

export default Home;
