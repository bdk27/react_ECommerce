import Header from "@/components/Header";
import SwiperBanner from "@/components/SwiperBanner";
import Service from "@/components/Service";

function Home() {
  return (
    <>
      <Header />
      <SwiperBanner />
      <div className="container mx-auto">
        <Service />
      </div>
    </>
  );
}

export default Home;
