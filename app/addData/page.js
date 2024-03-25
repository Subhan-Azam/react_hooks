"use client";

import React, { useEffect, useState } from "react";
import Loader from "@/(components)/loader/loader";

export default function AddData() {
  const [products, setProducts] = useState([]);
  const [loader, setLoader] = useState(false);
  const [newProduct, setNewProduct] = useState({});

  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState('');

  const fetchProducts = async () => {
    try {
      setLoader(true);
      let response = await fetch("https://fakestoreapi.com/products");
      response = await response.json();
      setProducts(response);
    } catch (error) {
      console.log(error);
    } finally {
      setLoader(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const onDeleteHandler = (id) => {
    const filteredProducts = products.filter((item) => item.id !== id);
    setProducts(filteredProducts);
  };

  const onAddHandler = () => {
    setProducts([...products, newProduct]);
    setNewProduct({
      id: "",
      title: "",
      description: "",
      image: "",
    });
  };

  return (
    <div>
      <h1>FakeAPI</h1>
      <div>
        <h2>Add Product</h2>
        <input
          type="text"
          name="id"
          placeholder="ID"
          value={id}
          onChange={(e) => {
            setId(e.target.value);
          }}
        />
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        <input
          type="file"
          accept="image/*"
          name="image"
          placeholder="Image URL"
          value={image}
          onChange={(e) => {
            setImage(e.target.files[0]);
          }}
        />
        <button onClick={onAddHandler}>Add Product</button>
      </div>

      {products.length ? (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Image</th>
              <th>Title</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>
                  <img src={product.image} width={100} alt="" />
                </td>
                <td>{product.title}</td>
                <td>{product.description}</td>
                <td>
                  <button onClick={() => onDeleteHandler(product.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        loader && <Loader />
      )}
    </div>
  );
}
