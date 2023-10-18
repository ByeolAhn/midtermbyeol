import React, { useState } from "react";
import "./addproduct.css"
export default function AddProduct() {
    const [formData, setFormData] = useState({
        name: "",
        description: "",
        category: "",
        quantity: "",
        price: "",
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(
            `Name: ${formData.name}, Description: ${formData.description}, Category: ${formData.category}, Quantity: ${formData.quantity}, Price: ${formData.price}`
        );
        console.log(`Name: ${formData.name}, Description: ${formData.description}, Category: ${formData.category}, Quantity: ${formData.quantity}, Price: ${formData.price}`)
    };
    return (
        <form onSubmit={handleSubmit} className="addproduct">
            <label className="addproduct__text" htmlFor="name">
                Name:
            </label>
            <input
                type="text"
                id="name"
                className="addproduct__input"
                name="name"
                value={formData.name}
                onChange={handleChange}
            />
            <label className="addproduct__text" htmlFor="description">
                Description:
            </label>
            <textarea
                type="text"
                id="description"
                className="addproduct__textarea"
                name="description"
                value={formData.description}
                onChange={handleChange}
            />
            <label className="addproduct__text" htmlFor="category">
                Category:
            </label>
            <input
                type="text"
                id="category"
                className="addproduct__input"
                name="category"
                value={formData.category}
                onChange={handleChange}
            />
            <label className="addproduct__text" htmlFor="quantity">
                Quantity:
            </label>
            <input
                type="text"
                id="quantity"
                className="addproduct__input"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
            />
            <label className="addproduct__text" htmlFor="price">
                Price:
            </label>
            <input
                type="text"
                id="price"
                className="addproduct__input"
                name="price"
                value={formData.price}
                onChange={handleChange}
            />
            <button className="addproduct__button" type="submit">
                SUBMIT
            </button>
            <button className="addproduct__button">
                CANCEL
            </button>

        </form>
    );
}