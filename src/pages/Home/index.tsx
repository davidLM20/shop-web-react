import Hero from "../../components/home/Hero";
import Categories from "../../components/home/Categories";
import FeaturedProducts from "../../components/home/FeatureProducts";
import Newsletter from "../../components/home/Newsletter";
import Metrics from "../../components/home/Metrics";
import SectionWrapper from "../../layouts/SectionWrapper";
import NewBrand from "../../components/home/NewBrand";
import PartnerBrands from "../../components/home/PartnerBrands";



function Home() {
  return (

    <div>
      {/*Solucion temporal de animacion*/}
      <style>{`
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }

          .animate-marquee {
            animation: marquee 20s linear infinite;
          }
      `}</style>

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
      <SectionWrapper fullWidth className="bg-gray-100">
        <PartnerBrands />
      </SectionWrapper>
      <SectionWrapper>
        <Newsletter />
      </SectionWrapper>
    </div>
  );
}
export default Home;
