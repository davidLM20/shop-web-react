import Hero from "./components/Hero";
import Categories from "./components/Categories";
import FeaturedProducts from "./components/FeatureProducts";
import Newsletter from "./components/Newsletter";

function Home() {
  return (
    <div>
      <Hero/>
      <Categories/>
      <FeaturedProducts/>
      <Newsletter/>
    </div>
  );
}
export default Home;
