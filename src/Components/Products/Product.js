import React from 'react';

const Product = ({ product }) => {
    const { quantity, productName, price } = product;
    return (
        <div className="bg-white md:py-4 md:px-4 py-2 px-0 shadow-md rounded-lg my-4 mx-4">
            <div className="flex justify-between px-4 items-center">
                <div className="text-lg font-semibold">
                    <p>
                        {productName} ({quantity})
                    </p>

                    <p className="text-gray-400 text-base text-start">
                        Tk {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    </p>
                </div>
                <div className="text-lg font-semibold">
                    {/* {products.find((product) => product.id === id).productQuantity > 0 ? ( */}
                    <button
                        // onClick={() => addProductHandler(id)}
                        className="focus:outline-none bg-purple-700 hover:bg-purple-800 text-white font-bold py-2 px-2 rounded-full inline-flex items-center"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                    </button>
                    {/* ) : ( */}
                    {/* <span
                            className=" rounded-full
            text-xs
             bg-red-600 md:text-sm text-white px-2 py-1"
                        >
                            Stock Out
                        </span>
                    )} */}
                </div>
            </div>
        </div>
    );
};

export default Product;