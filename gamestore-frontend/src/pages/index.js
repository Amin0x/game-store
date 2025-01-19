import React from "react";
import { useEffect, useState } from "react";
import LayoutCard from "../comp/layout-card";
import ProductsGroup from "../comp/prodcts-group";
import Slider from "react-slick";

const IndexPage = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        variableWidth: true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    };
    const [children, setChildren] = useState([]);
    const [products, setProducts] = useState([]);

    const fetchData = async () => {
        try {
            const childrenResponse = await fetch("http://localhost:8080/children");
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
            <div>
                <Slider {...settings}>
                    <div>
                        <div>
                            <img src="https://via.placeholder.com/92x124" alt="1" />
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src="https://via.placeholder.com/92x124" alt="1"/>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src="https://via.placeholder.com/92x124" alt="1"/>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src="https://via.placeholder.com/92x124" alt="1"/>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src="https://via.placeholder.com/92x124" alt="1"/>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src="https://via.placeholder.com/92x124" alt="1"/>
                        </div>
                    </div>
                </Slider>
            </div>
            <LayoutCard children={{ children }} />
            <ProductsGroup products={products} />
        </div>
    )
}

export default IndexPage;