import React from 'react';
import './category.css'
import { useEffect, useState } from 'react';
import Card2 from '../comp/card2';
import Spotfy from'../imgs/e6ed63d11bca412cc690c021bb0559c1.jpg'

const CategoryPage = () => {
    
    const [categoryPSG, setCategoryPSG] = useState([]);
    const [categoryItune, setCategoryItune] = useState([]);
    const [categoryCards, setCategoryCards] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/category?cat=cards')
            .then(response => response.json())
            .then(data => setCategoryCards(data))
            .catch(error => console.error('Error fetching categories:', error));
    }, []);

    useEffect(() => {
        fetch('http://localhost:8080/category?cat=psg')
            .then(response => response.json())
            .then(data => setCategoryPSG(prevCategories => [...prevCategories, ...data]))
            .catch(error => console.error('Error fetching another categories:', error));
    }, []);

    useEffect(() => {
        fetch('http://localhost:8080/category?cat=itune')
            .then(response => response.json())
            .then(data => setCategoryItune(prevCategories => [...prevCategories, ...data]))
            .catch(error => console.error('Error fetching another categories:', error));
    }, []);


    return (
        <div className='categories-wrapper'>
           <Card2 img={Spotfy} titlt={"اشتراك 6 اشهر مميز"} />
           <Card2 img={Spotfy} titlt={"اشتراك 6 اشهر مميز"} />
           <Card2 img={Spotfy} titlt={"اشتراك 6 اشهر مميز"} />
           <Card2 img={Spotfy} titlt={"اشتراك 6 اشهر مميز"} />
           <Card2 img={Spotfy} titlt={"اشتراك 6 اشهر مميز"} />
           <Card2 img={Spotfy} titlt={"اشتراك 6 اشهر مميز"} />
           <Card2 img={Spotfy} titlt={"اشتراك 6 اشهر مميز"} />
           <Card2 img={Spotfy} titlt={"اشتراك 6 اشهر مميز"} />
           <Card2 img={Spotfy} titlt={"اشتراك 6 اشهر مميز"} />
           <Card2 img={Spotfy} titlt={"اشتراك 6 اشهر مميز"} />
           <Card2 img={Spotfy} titlt={"اشتراك 6 اشهر مميز"} />
           <Card2 img={Spotfy} titlt={"اشتراك 6 اشهر مميز"} />
           <Card2 img={Spotfy} titlt={"اشتراك 6 اشهر مميز"} />
           <Card2 img={Spotfy} titlt={"اشتراك 6 اشهر مميز"} />
           <Card2 img={Spotfy} titlt={"اشتراك 6 اشهر مميز"} />
        </div>
    );
};

export default CategoryPage;