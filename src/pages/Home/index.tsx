import Hero from "../../components/home/Hero";
import Categories from "../../components/home/Categories";
import FeaturedProducts from "../../components/home/FeatureProducts";
import Newsletter from "../../components/home/Newsletter";
import Metrics from "../../components/home/Metrics";
import SectionWrapper from "../../layouts/SectionWrapper";
import NewBrand from "../../components/home/NewBrand";



function Home() {
  return (
    <div>
      <SectionWrapper>
        <Hero />
      </SectionWrapper>
      <SectionWrapper fullWidth className="bg-gray-100">
        <Metrics />
      </SectionWrapper>
      <SectionWrapper>
        <Categories />
      </SectionWrapper>
      <SectionWrapper fullWidth className="bg-gray-100">
        <FeaturedProducts />
      </SectionWrapper>
      <SectionWrapper>
        <NewBrand />
      </SectionWrapper>
      <SectionWrapper fullWidth className="bg-gray-800">
        <Newsletter />
      </SectionWrapper>
    </div>
  );
}
export default Home;
