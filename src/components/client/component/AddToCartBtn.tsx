import React from 'react'
import "../../../style/addToCart.css"
import { GiShoppingCart } from "react-icons/gi";
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

type Props = {}

const AddToCartBtn = (props: any) => {
    const navigate = useNavigate();
    const id = props.item?.item?.id ?? 0;
    const title = props.item?.item?.title ?? '';
    const img = props.item?.item?.image ?? '';
    const count = props.item?.count ?? 0;
    const amount = props.item?.item?.amount ?? 0;
    const unit = props.item?.item?.unit ?? "";
    const price = props.item?.item?.price ? props.item?.item?.price * count : 0;
    const filteredData = {
        id,
        title,
        img,
        price,
        unit,
        amount,
        count
    };
    let cartLength = [];
    cartLength.push(filteredData)
    const handleAddCart = () => {
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        const productIndex = cart.findIndex(item => item.id === id);
        if (productIndex !== -1) {
            cart[productIndex].price += price;
            cart[productIndex].count += count;
        } else {
            cart.push(filteredData);
        }
        localStorage.setItem("cart", JSON.stringify(cart));
        toast.success("Đã thêm sản phẩm này vào giỏ hàng")
        navigate(0)
    }
    return (
        <>
            <button className="CartBtn" onClick={handleAddCart}>
                <span className="IconContainer">
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512" fill="snow" className="cart"><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path></svg>
                </span>
                <p className="text">Thêm vào giỏ hàng</p>
            </button>
        </>
    )
}

export default AddToCartBtn