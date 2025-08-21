import Hero from "./components/Hero";
import Categories from "./components/Categories";
import FeaturedProducts from "./components/FeatureProducts";
import Newsletter from "./components/Newsletter";

function Home() {
  return (
    <div className="max-w-[1440px] mx-auto px-[60px]">
      <Hero/>
      <Categories/>
      <FeaturedProducts/>
      <Newsletter/>
    </div>
  );
}
export default Home;
