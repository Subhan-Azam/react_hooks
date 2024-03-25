// "use client";
// import Loader from "@/(components)/loader/loader";
// import { useEffect, useState } from "react";

// export default function ClientSideAPI() {
//   const [products, setProducts] = useState([]);
//   const [loader, setLoader] = useState(false);

//   const fetchProducts = async () => {
//     try {
//       setLoader(true);
//       let response = await fetch("https://fakestoreapi.com/products");
//       response = await response.json();
//       setProducts(response);
//       console.log(response);
//     } catch (error) {
//       console.log(error);
//     } finally {
//       setLoader(false);
//     }
//   };

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const onDeleteHandler = (id) => {
//     let filterProducts = products.filter((item) => item.id !== id);
//     setProducts(filterProducts);
//   };

//   return (
//     <div>
//       <h1>FakeAPI</h1>
//       {/* <button
//         style={{
//           border: "2px solid black",
//           padding: "10px 30px",
//           fontSize: "20px",
//           fontWeight: "bold",
//         }}
//         onClick={fetchProducts}
//       >
//         Fetch Data
//       </button> */}

//       {products.length ? (
//         <table>
//           <tr>
//             <td>ID</td>
//             <td>Image</td>
//             <td>Title</td>
//             <td>Description</td>
//           </tr>

//           {products.map((product) => {
//             return (
//               <tr>
//                 <td>{product.id}</td>
//                 <td>
//                   <img src={product.image} width={300} alt="" />
//                 </td>
//                 <td>{product.title}</td>
//                 <td>{product.description}</td>
//                 <td>
//                   <button onClick={() => onDeleteHandler(product.id)}>
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             );
//           })}
//         </table>
//       ) : (
//         loader && (
//           <div>
//             <Loader />
//           </div>
//         )
//       )}
//     </div>
//   );
// }


"use client";

import React, { useEffect, useState } from "react";
import Loader from "@/(components)/loader/loader";

export default function ClientSideAPI() {
  const [products, setProducts] = useState([]);
  const [loader, setLoader] = useState(false);
  const [newProduct, setNewProduct] = useState({
    id: "",
    title: "",
    description: "",
    image: "",
  });

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

  const handleInputChange = (e) => {
    // const { name, value } = e.target;
    const name = e.target.name;
    const value = e.target.value;
    setNewProduct((prevState) => ({
      ...prevState,
      [name]: value,
    }));
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
          value={newProduct.id}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={newProduct.title}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={newProduct.description}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={newProduct.image}
          onChange={handleInputChange}
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

// import Loader from "@/(components)/loader/loader";
// import { useEffect, useState } from "react";

// export default function ClientSideAPI() {
//   const [products, setProducts] = useState([]);
//   const [loader, setLoader] = useState(false);
//   const [editProductId, setEditProductId] = useState(null);
//   const [editedProduct, setEditedProduct] = useState({
//     id: "",
//     title: "",
//     description: "",
//     image: "",
//   });

//   const fetchProducts = async () => {
//     try {
//       setLoader(true);
//       let response = await fetch("https://fakestoreapi.com/products");
//       response = await response.json();
//       setProducts(response);
//       console.log(response);
//     } catch (error) {
//       console.log(error);
//     } finally {
//       setLoader(false);
//     }
//   };

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const deleteHandler = (id) => {
//     const filteredProducts = products.filter((item) => item.id !== id);
//     setProducts(filteredProducts);
//   };

//   const handleEdit = (product) => {
//     setEditProductId(product.id);
//     setEditedProduct({
//       id: product.id,
//       title: product.title,
//       description: product.description,
//       image: product.image,
//     });
//   };

//   const handleSaveEdit = () => {
//     // Perform save edit logic here, e.g., update the product in the database
//     // After saving, exit edit mode
//     setEditProductId(null);
//   };

//   const handleCancelEdit = () => {
//     // Exit edit mode without saving
//     setEditProductId(null);
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setEditedProduct((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   return (
//     <div>
//       <h1>FakeAPI</h1>
//       {loader ? (
//         <div>
//           <Loader />
//         </div>
//       ) : (
//         <table>
//           <thead>
//             <tr>
//               <th>ID</th>
//               <th>Image</th>
//               <th>Title</th>
//               <th>Description</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {products.map((product) => (
//               <tr key={product.id}>
//                 <td>{product.id}</td>
//                 <td>
//                   <img src={product.image} width={100} alt="" />
//                 </td>
//                 <td>
//                   {editProductId === product.id ? (
//                     <input
//                       type="text"
//                       name="title"
//                       value={editedProduct.title}
//                       onChange={handleInputChange}
//                     />
//                   ) : (
//                     product.title
//                   )}
//                 </td>
//                 <td>
//                   {editProductId === product.id ? (
//                     <input
//                       type="text"
//                       name="description"
//                       value={editedProduct.description}
//                       onChange={handleInputChange}
//                     />
//                   ) : (
//                     product.description
//                   )}
//                 </td>
//                 <td>
//                   {editProductId === product.id ? (
//                     <div>
//                       <button onClick={handleSaveEdit}>Save</button>
//                       <button onClick={handleCancelEdit}>Cancel</button>
//                     </div>
//                   ) : (
//                     <button onClick={() => handleEdit(product)}>Edit</button>
//                   )}
//                   <button onClick={() => deleteHandler(product.id)}>Delete</button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// }
