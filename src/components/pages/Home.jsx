import Banner from "../organisms/Banner";
import MainProducts from "../organisms/MainProducts";

function Home() {
  return (
    <>
      <Banner />
      <div>
        <h2 className="mt-8 text-2xl">Nuevos productos</h2>
        <MainProducts />
      </div>
    </>
  );
}

export default Home;
