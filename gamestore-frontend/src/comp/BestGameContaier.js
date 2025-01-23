import React from 'react';
import './BestGameContainer.css'


const BestGameContainer = ({img, bimg}) => {
    return (
        <div className="best-game-container">
            <img className='background-image' src={bimg} alt=''/>
            <div className="games-grid">
                <div className='start-pan'>
                    <img src={img} alt=''/>
                </div>
                <div className='end-pan'>
                    <div className='title'>
                        <p>
                        Red Dead Redemption 2 (PC) - حساب Steam - عالمي</p>
                    </div>
                    <div className='game-flags'>
                        <div className='flag-sperator'><i></i>Xbox</div>
                        <div className='flag-sperator'><i></i>Account</div>
                        <div className='flag-sperator'><i></i>Global</div>
                    </div>
                    <div className='price'>122.45</div>
                    <div>
                        <button className='button-24 btn-add-cart'>اضف الي السلة</button>
                        <button className='button-24 btn-view'>مشاهدة</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BestGameContainer;