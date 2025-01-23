import React from "react";
import { useEffect, useState } from "react";
import LayoutCard from "../comp/layout-card";
import ProductsGroup from "../comp/prodcts-group";
import Slider from "react-slick";
import './index.css'
import Card1 from "../comp/card1";
import Card2 from "../comp/card2";
import Img1 from '../imgs/6a18d97cb9f3c3b02560373ea3c0edd6.jpeg'
import Img2 from '../imgs/5118aff5091cb3efec399c808f8c598f-2048x1152.webp'
import Img3 from '../imgs/red-dead-redemption-2-ultimate-e-1-qxqelrihc02wmcl5n6wk0ktv0k3opn7r5766fuh0t2.webp'
import BestGameContainer from "../comp/BestGameContaier";

const IndexPage = () => {

    const [children, setChildren] = useState([]);
    const [products, setProducts] = useState([]);

    const fetchData = async () => {
        try {
            const childrenResponse = await fetch("http://localhost:8080/category");
            const childrenData = await childrenResponse.json();
            setChildren(childrenData);

            const productsResponse = await fetch("http://localhost:8080/products");
            const productsData = await productsResponse.json();
            setProducts(productsData);
        } catch (error) {
            console.error("There was an error fetching the data!", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="am-container">
            <BestGameContainer bimg={Img2} img={Img3}/>
            <div className="q123">
                <h2>الالعاب الاكثر مبيعا</h2>
                <div className="cards-row">
                    <Card1 img={Img1} name={"مفتاح قرص Rockstar الخاص بلعبة Grand Theft Auto V Premium Online Edition"} price={120.99}/>
                    <Card1 img={Img1} name={"مفتاح قرص Rockstar الخاص بلعبة Grand Theft Auto V Premium Online Edition"} price={120.99}/>
                    <Card1 img={Img1} name={"مفتاح قرص Rockstar الخاص بلعبة Grand Theft Auto V Premium Online Edition"} price={120.99}/>
                    <Card1 img={Img1} name={"مفتاح قرص Rockstar الخاص بلعبة Grand Theft Auto V Premium Online Edition"} price={120.99}/>
                    <Card1 img={Img1} name={"مفتاح قرص Rockstar الخاص بلعبة Grand Theft Auto V Premium Online Edition"} price={120.99}/>
                    <Card1 img={Img1} name={"مفتاح قرص Rockstar الخاص بلعبة Grand Theft Auto V Premium Online Edition"} price={120.99}/>
                    <Card1 img={Img1} name={"مفتاح قرص Rockstar الخاص بلعبة Grand Theft Auto V Premium Online Edition"} price={120.99}/>
                </div>
            </div>


            <div className="q123">
                <h2>الكروت</h2>
                <div className="cards-row">
                    <Card1 img={Img1} name={"مفتاح قرص Rockstar الخاص بلعبة Grand Theft Auto V Premium Online Edition"} price={120.99}/>
                    <Card1 img={Img1} name={"مفتاح قرص Rockstar الخاص بلعبة Grand Theft Auto V Premium Online Edition"} price={120.99}/>
                    <Card1 img={Img1} name={"مفتاح قرص Rockstar الخاص بلعبة Grand Theft Auto V Premium Online Edition"} price={120.99}/>
                    <Card1 img={Img1} name={"مفتاح قرص Rockstar الخاص بلعبة Grand Theft Auto V Premium Online Edition"} price={120.99}/>
                    <Card1 img={Img1} name={"مفتاح قرص Rockstar الخاص بلعبة Grand Theft Auto V Premium Online Edition"} price={120.99}/>
                    <Card1 img={Img1} name={"مفتاح قرص Rockstar الخاص بلعبة Grand Theft Auto V Premium Online Edition"} price={120.99}/>
                    <Card1 img={Img1} name={"مفتاح قرص Rockstar الخاص بلعبة Grand Theft Auto V Premium Online Edition"} price={120.99}/>
                </div>
            </div>

            <div className="q123">
                <h2>البرامج</h2>
                <div className="cards-row">
                    <Card1 img={Img1} name={"مفتاح قرص Rockstar الخاص بلعبة Grand Theft Auto V Premium Online Edition "} price={120.99}/>
                    <Card1 img={Img1} name={"مفتاح قرص Rockstar الخاص بلعبة Grand Theft Auto V Premium Online Edition"} price={120.99}/>
                    <Card1 img={Img1} name={"مفتاح قرص Rockstar الخاص بلعبة Grand Theft Auto V Premium Online Edition"} price={120.99}/>
                    <Card1 img={Img1} name={"مفتاح قرص Rockstar الخاص بلعبة Grand Theft Auto V Premium Online Edition"} price={120.99}/>
                    <Card1 img={Img1} name={"مفتاح قرص Rockstar الخاص بلعبة Grand Theft Auto V Premium Online Edition"} price={120.99}/>
                    <Card1 img={Img1} name={"مفتاح قرص Rockstar الخاص بلعبة Grand Theft Auto V Premium Online Edition"} price={120.99}/>
                    <Card1 img={Img1} name={"مفتاح قرص Rockstar الخاص بلعبة Grand Theft Auto V Premium Online Edition"} price={120.99}/>
                </div>
            </div>
           
        </div>
    )
}

export default IndexPage;