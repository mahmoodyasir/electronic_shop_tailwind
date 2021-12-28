import React from 'react';
import hero from './images/svgs/intro.jpg'
import SingleProduct from "./SingleProduct";
import LastSection from "./LastSection";

const IntroSegment = () => {

    const products = [
        {id: 1, description: "Mens T-Shirt", image: 'https://m.media-amazon.com/images/I/81Ivn5DIxhL._AC_SL1500_.jpg'},
        {id: 2, description: "Slim Khaki Trouser", image: 'https://m.media-amazon.com/images/I/71tAufadHwS._AC_SL1500_.jpg'},
        {id: 3, description: "Nike Shoes", image: 'https://m.media-amazon.com/images/I/71Nly9vPapL._AC_SL1500_.jpg'},
        {id: 4, description: "Wrist Watch", image: 'https://m.media-amazon.com/images/I/71hhgeQCrOL._AC_SL1500_.jpg'},

    ];

    const f_products = [
        {id: 1, description: "Mens T-Shirt", image: 'https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_SL1500_.jpg'},
        {id: 2, description: "Slim Khaki Trouser", image: 'https://m.media-amazon.com/images/I/71z6gsI87bL._AC_SL1500_.jpg'},
        {id: 3, description: "Nike Shoes", image: 'https://m.media-amazon.com/images/I/71aARXewm6L._AC_SL1500_.jpg'},
        {id: 4, description: "Wrist Watch", image: 'https://m.media-amazon.com/images/I/717A+nwjBSL._AC_SL1000_.jpg'},

    ];

    return (
        <div>
            <div className="md:flex md:flex-row mt-20">
            <div className="md:w-2/5 flex flex-col justify-center items-center">
                <h2 className="font-serif text-5xl text-gray-600 mb-4 text-center md:self-start md:text-left">Electronics Shop</h2>
                <p className="uppercase text-gray-600 tracking-wide text-center md:self-start md:text-left">User Satisfaction Is Our Priority</p>
                <a href="#"
                   className="hover:text-purple-600 bg-gradient-to-r from-red-500 to-fuchsia-500 rounded-full py-4 px-8 text-gray-50 uppercase text-xl md:self-start my-5">Shop
                    Now</a>
            </div>
            <div className="md:w-3/5">
                <img src={hero} className="md:w-4/5 rounded-lg"/>
            </div>
        </div>

            <div>
                <div className="my-20">
                    <div className="flex flex-row justify-between my-5">
                        <h2 className="text-3xl">Laptop Collection</h2>
                        <a href="#" className="flex flex-row text-lg hover:text-purple-700">
                            View All
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-5 ml-1" fill="none" viewBox="0 0 24 24"
                                 stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                      d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                            </svg>
                        </a>
                    </div>

                    <div className="grid grid-flow-row grid-cols-1 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
                        {
                        products?.map((product, i) => (
                            <div key={i}>
                                <SingleProduct product={product}/>
                            </div>
                        ))

                    }
                    </div>


                </div>



                <div className="my-20">
                    <div className="flex flex-row justify-between my-5">
                        <h2 className="text-3xl">Gaming Keyboard Collection</h2>
                        <a href="#" className="flex flex-row text-lg hover:text-purple-700">
                            View All
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-5 ml-1" fill="none" viewBox="0 0 24 24"
                                 stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                      d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                            </svg>
                        </a>
                    </div>

                    <div className="grid grid-flow-row grid-cols-1 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
                        {
                            f_products?.map((product, i) => (
                            <div key={i}>
                                <SingleProduct product={product}/>
                            </div>
                        ))
                        }
                    </div>


                </div>
                <LastSection />
            </div>
        </div>

    );
};

export default IntroSegment;
