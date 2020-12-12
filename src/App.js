import React, { useState } from 'react';
import gimmel from './imgs/gimmel.png';
import shin from './imgs/shin.png';
import hay from './imgs/hay.png';
import nun from './imgs/nun.png';
import './App.css';

function App() {
    const imgs = [gimmel, hay, shin, nun];

    const [img, setImg] = useState(imgs[0]);

    const animation = () => {
        const spin = setInterval(function () {
            pickImg();
        }, 80);
        setTimeout(function () {
            clearInterval(spin);
        }, 1400);
    };

    const pickImg = () => {
        let i = Math.floor(Math.random() * 4);
        setImg(imgs[i]);
    };

    return (
        <div className="App">
            <h1>
                Happy Virtual <br />
                Hannukkah
            </h1>
            <div className="dreidel">
                <div className="stem"></div>
                <div className="body">
                    <img src={img} alt="" />
                </div>
                <div className="point"></div>
            </div>
            <button type="button" onClick={animation}>
                SPIN!
            </button>
        </div>
    );
}

export default App;
