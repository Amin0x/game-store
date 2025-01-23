import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BestGameContainer from '../comp/BestGameContaier';

import Img1 from '../imgs/6a18d97cb9f3c3b02560373ea3c0edd6.jpeg'
import Img2 from '../imgs/5118aff5091cb3efec399c808f8c598f-2048x1152.webp'
import Img3 from '../imgs/red-dead-redemption-2-ultimate-e-1-qxqelrihc02wmcl5n6wk0ktv0k3opn7r5766fuh0t2.webp'

const ProductViewPage = () => {
    const [product, setProduct] = useState('');
    const params = useParams();

    useEffect(() => {
        fetch('/api/products/' + params.id)
            .then(response => response.json())
            .then(data => {
                setProduct(data);
            })
            .catch(err => {
                console.error('Error fetching product:', err);
            });
    }, [params.id]);

    return (
        <div className="am-container produst-view-wrapper">
            <BestGameContainer bimg={Img2} img={Img3} />
            <div className='description'>
                <h1 className='title'>الوصف</h1>
                <p className='desc-body'>أمريكا، 1899. بدأت نهاية عصر الغرب المتوحش عندما طارد رجال القانون آخر العصابات الخارجة عن القانون المتبقية. أولئك الذين لم يستسلموا أو يخضعوا يتم قتلهم.

                    بعد فشل عملية سطو في بلدة بلاكووتر الغربية، أُجبر آرثر مورجان وعصابة فان دير ليند على الفرار. ومع تزايد عدد العملاء الفيدراليين وأفضل صائدي المكافآت في البلاد، يجب على العصابة السطو والسرقة والقتال في طريقها عبر قلب أمريكا الوعر من أجل البقاء.

                    مع تزايد الانقسامات الداخلية التي تهدد بتمزيق العصابة، يجب على آرثر الاختيار بين مُثُله العليا والولاء للعصابة التي ربته.

                    من مبدعي Grand Theft Auto V وRed Dead Redemption، Red Dead Redemption 2 هي قصة مترامية الأطراف عن الحياة في أمريكا في فجر العصر الحديث.</p>
            </div>
            <div className='video-section'>
                <h2>فيديو</h2>
                <div className="video-container">
                    <iframe 
                        width="853"
                        height="480"
                        src="https://youtube.com/embed/PnCX8npep7k"
                        title="Game Trailer"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </div>
            </div>
            <div>
                <div className='glass-card'>
                    <h3>الاصدار</h3>
                    <p>23/4/2024</p>
                </div>
                <div className='glass-card'>
                    <h3>الناشر</h3>
                    <p>Rockstar Games</p>
                </div>
                <div className='glass-card'>
                    <h3>الفئة</h3>
                    <p>مغامرات/اكشن</p>
                </div>
            </div>
        </div>
    );
};

export default ProductViewPage;