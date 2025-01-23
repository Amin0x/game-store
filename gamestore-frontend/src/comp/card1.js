import React from 'react';
import './card1.css';
import { height } from '@fortawesome/free-regular-svg-icons/faAddressBook';

const Card1 = ({ img, name, price }) => {
    return (
        <div className="card1">
            <div className="card1-content">
                <img src={img} alt="Card 1 Image" className="card1-image" />
                <div className='card1-bottom'>
                    <p className="card1-title">{name}</p>
                    <div className='card1-flags-price'>
                        <p className="card1-price">{price}</p>
                        <div className='card1-flags'>
                            <svg  style={{height: 32, width: 32}} fill="#000000" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" 
                                viewBox="0 0 512 512" >
                                <g>
                                    <g>
                                        <path d="M370.594,27.027c-35.744-17.93-74.3-27.025-114.596-27.025c-39.736,0-77.822,8.855-113.192,26.324
			c-3.666,1.811-5.902,5.623-5.692,9.705c0.205,4.082,2.822,7.654,6.652,9.085c38.907,14.498,75.157,33.978,107.739,57.891
			c1.806,1.331,3.932,1.991,6.063,1.991c2.131,0,4.257-0.66,6.063-1.991c32.102-23.563,67.761-42.823,105.987-57.241
			c3.807-1.431,6.403-4.993,6.614-9.055C376.447,32.65,374.231,28.848,370.594,27.027z M257.568,82.117
			c-25.919-18.37-53.949-34.098-83.645-46.955c52.828-19.701,113.186-19.471,165.834,0.64
			C310.612,48.529,283.067,64.047,257.568,82.117z"/>
                                    </g>
                                </g>
                                <g>
                                    <g>
                                        <path d="M416.609,56.643c-3.357-2.711-8.054-3.022-11.746-0.78c-24.893,15.098-63.394,39.801-105.422,71.739
			c-2.366,1.791-3.832,4.522-4.027,7.494c-0.19,2.962,0.911,5.863,3.022,7.944c14.843,14.678,28.786,30.666,41.442,47.526
			c58.391,77.862,81.294,138.815,89.478,180.687c-29.551-67.426-84.896-136.043-165.134-204.6c-3.832-3.282-9.475-3.282-13.307,0
			c-80.353,68.657-135.723,137.344-165.244,204.83c8.164-42.223,31.201-103.055,89.593-180.917
			c12.652-16.859,26.595-32.858,41.437-47.526c2.116-2.081,3.217-4.983,3.026-7.944c-0.195-2.972-1.661-5.703-4.028-7.494
			c-42.777-32.497-81.918-57.541-107.226-72.829c-3.667-2.221-8.32-1.911-11.671,0.74C35.284,104.419,0,177.498,0,256
			c0,62.404,22.712,122.526,63.949,169.271c1.164,1.321,2.616,2.291,4.202,2.862c0.435,1.641,1.276,3.172,2.481,4.432
			c48.811,51.228,114.642,79.433,185.365,79.433c71.118,0,139.625-29.956,187.951-82.184c1.381-1.491,2.266-3.332,2.586-5.283
			c1.881-0.55,3.602-1.641,4.928-3.202C490.499,375.214,512,316.503,512,256C512,178.198,477.231,105.539,416.609,56.643z
			 M62.283,389.962C35.179,350.791,20.491,304.136,20.491,256c0-69.847,30.361-135.022,83.56-179.937
			c22.832,13.998,54.84,34.739,89.933,60.843c-12.467,13.007-24.243,26.875-35.109,41.372
			C87.732,273.129,66.861,345.028,62.283,389.962z M255.998,491.507c-63.184,0-122.126-24.473-166.605-69.047
			c20.196-76.121,76.731-154.953,168.176-234.496c90.414,78.642,146.719,156.634,167.495,231.995
			C380.855,465.493,319.562,491.507,255.998,491.507z M356.266,178.268c-10.871-14.488-22.647-28.355-35.114-41.362
			c34.352-25.544,65.7-45.925,88.112-59.722c52.363,44.874,82.244,109.639,82.244,178.816c0,46.405-13.742,91.659-39.121,130.01
			C447.025,341.546,425.634,270.768,356.266,178.268z"/>
                                    </g>
                                </g>
                            </svg>
                            <svg width="32px" height="32px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 21C5 17.134 8.13401 14 12 14C15.866 14 19 17.134 19 21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
<svg fill="#000000" width="32px" height="32px" viewBox="-8 -8 72 72" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg"><title>world</title><path d="M59.25,12.42l-.83.27L54,13.08l-1.27,2-.91-.29L48.23,11.6l-.52-1.66L47,8.16l-2.23-2-2.63-.51-.06,1.2,2.58,2.52,1.26,1.48-1.42.75-1.15-.34-1.73-.73,0-1.39L39.42,8.2l-.75,3.29L36.38,12l.23,1.84,3,.57.52-2.93,2.46.37,1.14.67h1.84L46.8,15l3.34,3.38-.25,1.32-2.69-.34-4.64,2.34-3.34,4-.43,1.78H37.58l-2.23-1-2.17,1,.54,2.29.94-1.09,1.67,0-.12,2,1.38.4L39,32.67,41.2,32l2.57.4,3,.8,1.48.18,2.52,2.86,4.87,2.86-3.15,6-3.32,1.54-1.26,3.44-4.81,3.21-.51,1.85A28,28,0,0,0,59.25,12.42Z"/><path d="M39.22,42.63l-2-3.78L39.05,35l-1.87-.56-2.1-2.11-4.66-1L28.88,28v1.92H28.2l-4-5.44V20l-2.94-4.78-4.67.83H13.43l-1.59-1,2-1.6-2,.46A28,28,0,0,0,36,56a29,29,0,0,0,3.51-.25l-.29-3.39s1.29-5,1.29-5.2S39.22,42.63,39.22,42.63Z"/><path d="M18.41,9l5-.7,2.29-1.25,2.58.74,4.12-.23,1.42-2.22,2.05.34,5-.47,1.38-1.52,2-1.29,2.74.41,1-.15a27.91,27.91,0,0,0-33.51,7.49h0ZM37.18,2.78,40,1.21l1.84,1.06-2.66,2-2.54.26-1.14-.74ZM28.71,3,30,3.54,31.63,3l.9,1.56-3.82,1L26.88,4.5S28.67,3.35,28.71,3Z"/></svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card1;