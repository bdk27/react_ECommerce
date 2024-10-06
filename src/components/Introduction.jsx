import wind from "@/assets/img/wind.png";
import spring from "@/assets/img/spring.png";

function Introduction() {
  return (
    <>
      <div className="flex justify-between my-5">
        <div className="hidden md:block">
          <img src={wind} alt="wind" className="w-[250px] lg:w-[300px]" />
        </div>

        <div className="flex flex-col items-center justify-center text-center md:w-1/3">
          <h1 className="mb-5 text-xl font-bold text-lightKhaki md:text-3xl lg:text-4xl font-dancing-script">
            "Unleash the beauty and strength within you."
          </h1>
          <p className="text-sm lg:text-base">
            無論是何種商品，Venus都提供精心挑選的時尚精品，讓你在每個場合都能自信閃耀。我們相信，美麗不僅來自外表，更來自內心的自我欣賞與愛護
          </p>
        </div>

        <div className="hidden md:block">
          <img src={spring} alt="spring" className="w-[220px] lg:w-[270px]" />
        </div>
      </div>
    </>
  );
}

export default Introduction;
