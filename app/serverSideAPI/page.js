import BtnForServerSide from "@/(components)/btnForServerSide/btnForServerSide";
import Loader from "@/(components)/loader/loader";

const fetchProducts = async () => {
  let response = await fetch("https://fakestoreapi.com/products");
  response = await response.json();
  console.log(response);
  return response;
};

export default async function ServerSideAPI() {
  const products = await fetchProducts();
  const loader = false;

  return (
    <>
      <h1>FakeAPI</h1>
      {/* <BtnForServerSide /> */}
      <table>
        <tr>
          <td>ID</td>
          <td>Image</td>
          <td>Title</td>
          <td>Description</td>
        </tr>

        {products.length ? (
          products.map((product) => {
            return (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>
                  <img src={product.image} width={300} alt="" />
                </td>
                <td>{product.title}</td>
                <td>{product.description}</td>
              </tr>
            );
          })
        ) : loader ? (
          <div>
            <Loader />
          </div>
        ) : (
          <div>No Data Found</div>
        )}
      </table>
    </>
  );
}
