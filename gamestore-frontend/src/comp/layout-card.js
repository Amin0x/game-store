
import './layout-card.css';
import { useEffect, useState } from 'react';

const LayoutCard = ({ children }) => {
    
        const [data, setData] = useState([]);
        const [brand, setBrand] = useState(['google']);
        

        const getData = async () => {
            try {
                const response = await fetch('http://localhost:8080/category', {
                    method: 'get',
                });
                const data = await response.json();
                console.log(data);
                setData(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
            
        }

        useEffect(() => {
            getData();            
        }, []);


    return (
        <div className="am-category">
            <div className="wrap">

                {
                    data[0] !== undefined &&
                    (
                        <div className="box one">
                            <div className="date">
                                <h4>{data[0].name}</h4>
                            </div>
                            <h1>{data[0].name}</h1>
                            <div className="poster p1">
                                <h4>Z</h4>
                            </div>
                        </div>

                    )


                }

                {
                    data[1] !== undefined &&
                    (
                        <div className="box two">
                            <div className="date">
                                <h4>{data[1].name}</h4>
                            </div>
                            <h1>{data[1].name}</h1>
                            <div className="poster p2">
                                <h4>B</h4>
                            </div>
                        </div>
                    )

                }


                {
                    data[2] !== undefined &&
                    (
                        <div className="box three">
                            <div className="date">
                                <h4>{data[2].name}</h4>
                            </div>
                            <h1>{data[2].name}</h1>
                            <div className="poster p3">
                                <h4>G</h4>
                            </div>
                        </div>
                    )
                }


                {
                    data[3] !== undefined && (
                        <div className="box five">
                            <div className="date">
                                <h4>{data[3].name}</h4>
                            </div>
                            <h1>{data[3].name}</h1>
                            <div className="poster p4">
                                <h4>M</h4>
                            </div>
                        </div>
                    )
                }


                {
                    data[4] !== undefined && (
                        <div className="box six">
                            <div className="date">
                                <h4>{data[4].name}</h4>
                            </div>
                            <h1>{data[4].name}</h1>
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
                                <h4>{data[5].name}</h4>
                            </div>
                            <h1>{data[5].name}</h1>
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
                                <h4>{data[6].name}</h4>
                            </div>
                            <h1>{data[6].name}</h1>
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
                                <h4>{data[7].name}</h4>
                            </div>
                            <h1>{data[7].name}</h1>
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