
import './layout-card.css';

const LayoutCard = ({ children }) => {
    return (
        <div className="conatiner">
            <div className="wrap">

                {
                    children[0] !== undefined &&
                        (
                            <div className="box one">
                                <div className="date">
                                    <h4>6/29/18</h4>
                                </div>
                                <h1>CREATIVITY</h1>
                                <div className="poster p1">
                                    <h4>Z</h4>
                                </div>
                            </div>
                            
                        )
                    
                    
                }

                {
                    children[1] !== undefined &&
                    (
                        <div className="box two">
                    <div className="date">
                        <h4>6/29/18</h4>
                    </div>
                    <h1>DISCOVER</h1>
                    <div className="poster p2">
                        <h4>B</h4>
                    </div>
                </div>
                    )

                }


                {
                    children[2] !== undefined && 
                    (
                        <div className="box three">
                    <div className="date">
                        <h4>6/29/18</h4>
                    </div>
                    <h1>IMAGINE</h1>
                    <div className="poster p3">
                        <h4>G</h4>
                    </div>
                </div>
                    )
                }

                
                {
                    children[3] !== undefined && (
                        <div className="box five">
                    <div className="date">
                        <h4>6/29/18</h4>
                    </div>
                    <h1>SPIRIT</h1>
                    <div className="poster p4">
                        <h4>M</h4>
                    </div>
                </div>
                    )
                }
                

                {
                    children[4] !== undefined && (
                        <div className="box six">
                    <div className="date">
                        <h4>6/29/18</h4>
                    </div>
                    <h1>DESIGN</h1>
                    <div className="poster p5">
                        <h4>N</h4>
                    </div>
                </div>
                    )
                }
                

                {
                    children[5] !== undefined && (
                        <div className="box seven">
                    <div className="date">
                        <h4>6/29/18</h4>
                    </div>
                    <h1>CONQUER</h1>
                    <div className="poster p6">
                        <h4>K</h4>
                    </div>
                </div>
                    )
                }
                
                {
                    children[6] !== undefined && (
                        <div className="box eight">
                    <div className="date">
                        <h4>6/29/18</h4>
                    </div>
                    <h1>SUCCESS</h1>
                    <div className="poster p7">
                        <h4>Q</h4>
                    </div>
                </div>
                    )
                }
                
                {
                    children[7] !== undefined && (
                        <div className="box nine">
                    <div className="date">
                        <h4>6/29/18</h4>
                    </div>
                    <h1>UNFORGETTABLE</h1>
                    <div className="poster p8">
                        <h4>L</h4>
                    </div>
                </div>
                    )
                }
             

            </div>
        </div>

    );
}

export default LayoutCard;