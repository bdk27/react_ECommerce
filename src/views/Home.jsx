import Header from "@/components/Header";
import SwiperBanner from "@/components/SwiperBanner";
import Introduction from "@/components/Introduction";
import Service from "@/components/Service";
import Product from "@/components/Product";

function Home() {
  return (
    <>
      <Header />
      <SwiperBanner />
      {/* <Service /> */}
      <div className="container mx-auto">
        <Introduction />
        <Product />
      </div>
    </>
  );
}

export default Home;
