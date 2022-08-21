import React from 'react';
import CartProduct from './CartProduct';
import CartTotalItem from './CartTotalItem';

const Cart = () => {
    return (
        <div className="col-span-12 sm:col-span-12 md:col-span-5 lg:col-span-4 xxl:col-span-4">
            <div className="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4">
                <CartProduct />
                <CartTotalItem />
            </div>
        </div>
    );
};

export default Cart;