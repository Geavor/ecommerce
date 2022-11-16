import useFetch from "../../hooks/useFetch";

const Products = () => {
  const { data, error, loading } = useFetch("public/products");

  if (loading) return <h1>Cargando...</h1>;
  if (error) return <h1>Error en la petición</h1>;

  console.log(data);

  return (
    <div>
      <h1>Productos</h1>
      <p>Explora todos nuestros productos</p>
      {data.length === 0 ? (
        <p>No existen productos</p>
      ) : (
        data.map((prod) => {
          <div key={prod.id}>{JSON.stringify(prod)}</div>;
        })
      )}
    </div>
  );
};

export default Products;
