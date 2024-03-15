"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function ClientSide() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await axios
      .get("https://fakestoreapi.com/products/1")
      .then((res) => {
        console.log(res);
        setProducts([res.data]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h1>Client Side Rendering</h1>
      {products.map((item, index) => {
        return <p key={index}>{item.title}</p>;
      })}
    </div>
  );
}

// "use client";
// import axios from "axios";
// import React, { useEffect, useState } from "react";

// export default function ClientSide() {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     await axios
//       .get("https://fakestoreapi.com/products/1")
//       .then((res) => {
//         console.log(res);
//         setProducts([res.data]); // Wrap res.data in an array
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   return (
//     <div>
//       <h1>Client Side Rendering</h1>
//       {products.map((item, index) => {
//         return <p key={index}>{item.title}</p>;
//       })}
//     </div>
//   );
// }
