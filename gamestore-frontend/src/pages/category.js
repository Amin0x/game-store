import React from 'react';
import './category.css'
import { useEffect, useState } from 'react';

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
        <div>
            {
                categoryCards.map((card) => {
                    return (
                        <div>{card.name}</div>
                    )
                })
            }

            {
                categoryItune.map((itune) => {
                    return (
                        <div>{itune.name}</div>
                    )
                })
            }

            {
                categoryPSG.map((psg) => {
                    return (
                        <div>{psg.name}</div>
                    )
                })
            }
        </div>
    );
};

export default CategoryPage;