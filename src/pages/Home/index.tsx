import Hero from "./components/Hero";
import Categories from "./components/Categories";
import FeaturedProducts from "./components/FeatureProducts";
import Newsletter from "./components/Newsletter";
import Metrics from "./components/Metrics";

function Home() {
  return (
    <div>
      <Hero/>
      <Metrics/>
      <Categories/>
      <FeaturedProducts/>
      <Newsletter/>
    </div>
  );
}
export default Home;
