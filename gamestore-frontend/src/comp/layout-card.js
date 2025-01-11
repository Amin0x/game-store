

const LayoutCard = ({ children }) => {
    return (
        <div class="conatiner">
            <div class="wrap">

                {
                    children !== undefined && children.length > 0 &&
                        children.map((child, index) => (
                            <div class="box one">
                                <div class="date">
                                    <h4>6/29/18</h4>
                                </div>
                                <h1>CREATIVITY</h1>
                                <div class="poster p1">
                                    <h4>Z</h4>
                                </div>
                            </div>
                            )
                        )
                    
                    
                }

                <div class="box two">
                    <div class="date">
                        <h4>6/29/18</h4>
                    </div>
                    <h1>DISCOVER</h1>
                    <div class="poster p2">
                        <h4>B</h4>
                    </div>
                </div>

                <div class="box three">
                    <div class="date">
                        <h4>6/29/18</h4>
                    </div>
                    <h1>IMAGINE</h1>
                    <div class="poster p3">
                        <h4>G</h4>
                    </div>
                </div>

                <div class="box five">
                    <div class="date">
                        <h4>6/29/18</h4>
                    </div>
                    <h1>SPIRIT</h1>
                    <div class="poster p4">
                        <h4>M</h4>
                    </div>
                </div>

                <div class="box six">
                    <div class="date">
                        <h4>6/29/18</h4>
                    </div>
                    <h1>DESIGN</h1>
                    <div class="poster p5">
                        <h4>N</h4>
                    </div>
                </div>

                <div class="box seven">
                    <div class="date">
                        <h4>6/29/18</h4>
                    </div>
                    <h1>CONQUER</h1>
                    <div class="poster p6">
                        <h4>K</h4>
                    </div>
                </div>

                <div class="box eight">
                    <div class="date">
                        <h4>6/29/18</h4>
                    </div>
                    <h1>SUCCESS</h1>
                    <div class="poster p7">
                        <h4>Q</h4>
                    </div>
                </div>

                <div class="box nine">
                    <div class="date">
                        <h4>6/29/18</h4>
                    </div>
                    <h1>UNFORGETTABLE</h1>
                    <div class="poster p8">
                        <h4>L</h4>
                    </div>
                </div>

                <div class="box ten">
                    <div class="date">
                        <h4>6/29/18</h4>
                    </div>
                    <h1>AMAZING</h1>
                    <div class="poster p9">
                        <h4>J</h4>
                    </div>
                </div>

                <div class="box eleven">
                    <div class="date">
                        <h4>6/29/18</h4>
                    </div>
                    <h1>LOVE</h1>
                    <div class="poster p10">
                        <h4>H</h4>
                    </div>
                </div>

                <div class="box tlv">
                    <div class="date">
                        <h4>6/29/18</h4>
                    </div>
                    <h1>LEARN</h1>
                    <div class="poster p11">
                        <h4>W</h4>
                    </div>
                </div>

                <div class="box thirteen">
                    <div class="date">
                        <h4>6/29/18</h4>
                    </div>
                    <h1>YEP</h1>
                    <div class="poster p12">
                        <h4>S</h4>
                    </div>
                </div>

                <div class="box ftn">
                    <div class="date">
                        <h4>6/29/18</h4>
                    </div>
                    <h1>SMILE</h1>
                    <div class="poster p13">
                        <h4>E</h4>
                    </div>
                </div>

                <div class="box fith">
                    <div class="date">
                        <h4>6/29/18</h4>
                    </div>
                    <h1>CODE</h1>
                    <div class="poster p14">
                        <h4>R</h4>
                    </div>
                </div>

                <div class="box sith">
                    <div class="date">
                        <h4>6/29/18</h4>
                    </div>
                    <h1>CARDS</h1>
                    <div class="poster p15">
                        <h4>U</h4>
                    </div>
                </div>

                <div class="box sevth">
                    <div class="date">
                        <h4>6/29/18</h4>
                    </div>
                    <h1>FLEXBOX</h1>
                    <div class="poster p16">
                        <h4>A</h4>
                    </div>
                </div>

            </div>
        </div>

    );
}

export default LayoutCard;