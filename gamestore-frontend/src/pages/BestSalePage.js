import React from 'react';
import { useState, useEffect } from 'react';
import Card1 from '../comp/card1';


const BestSalePage = () => {

    const [bestSales, setBestSales] = useState([]);

    const fetchBestSales = async () => {
        try {
            const response = await fetch('http://localhost:8080/api/products/best-sales');
            if(response.ok){
                const data = await response.json();
                setBestSales(data);
            } 
            else {
                console.log('response fail')
            }
            
        } catch (error) {
            console.error('Error fetching best sales:', error);
        }
    };

    useEffect(() => {
        
        fetchBestSales();
    }, []);

    return (
        <div className='content-wrapper'>
            <h1>Best Sales</h1>
            <div className="best-sales-container">
                {
                    bestSales.map(()=>{
                        return (
                            <article>
                                <Card1 
                                    img={bestSales.image} 
                                    name={bestSales.name}
                                />
                            </article>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default BestSalePage;