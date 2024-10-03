// import venus_logo from "@/assets/img/venus_logo.png";
import flower from "@/assets/img/flower.png";
import wind from "@/assets/img/www.png";
import spring from "@/assets/img/sss.png";

function Introduction() {
  return (
    <>
      <div className="flex justify-between my-5">
        <div className="hidden md:block">
          <img src={wind} alt="wind" className="w-[300px]" />
        </div>

        <div className="flex flex-col items-center justify-center text-center md:w-1/3">
          {/* <img src={flower} alt="flower" className="w-[70px] md:w-[100px]" /> */}
          <h1 className="mb-5 text-2xl font-bold md:text-4xl font-dancing-script">
            Unleash the beauty and strength within you.
          </h1>
          <p className="mb-3 text-sm md:text-base">
            我們的品牌源於經典藝術中的維納斯，她象徵著愛與美，我們致力於幫助每位女性展現自己獨特的魅力。
          </p>
          <p className="text-sm md:text-base">
            無論是服飾、鞋子、包包還是香水，Venus都提供精心挑選的時尚精品，讓你在每個場合都能自信閃耀。我們相信，美麗不僅來自外表，更來自內心的自我欣賞與愛護。
          </p>
        </div>

        <div className="hidden md:block">
          <img src={spring} alt="spring" className="w-[270px]" />
        </div>
      </div>
    </>
  );
}

export default Introduction;
