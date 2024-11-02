import About from "../about/About";
import Banner from "../banner/Banner";

const Home = () => {
  return (
    <section className="bg-base-100">
      <div className="max-w-6xl mx-auto">
        <Banner></Banner>
        <About></About>
      </div>
    </section>
  );
};

Home.propTypes = {};

export default Home;
