import Catalog from "../../components/catalog/Catalog";
import HeroCatalog from "../../components/catalog/HeroCatalog";
import SectionWrapper from "../../layouts/SectionWrapper";

function Home() {
  return (
    <div>
        <SectionWrapper fullWidth className="bg-gray-100">
          <HeroCatalog />
        </SectionWrapper>
        <SectionWrapper>
          <Catalog/>
        </SectionWrapper>
    </div>
  );
}
export default Home;