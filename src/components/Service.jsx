import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTruckFast,
  faGift,
  faMoneyBill,
  faHeadset,
} from "@fortawesome/free-solid-svg-icons";

function Service() {
  const list = [
    {
      icon: faTruckFast,
      color: "#e1af7a",
      title: "免運無限次",
      content: "下單選擇指定超商取貨，滿額即享免運",
    },
    {
      icon: faGift,
      color: "#f3d08c",
      title: "滿額贈品",
      content: "滿 2,000 元送 9 折現金抵用券，單筆最高贈 300 元",
    },
    {
      icon: faMoneyBill,
      color: "#afb6a4",
      title: "限時優惠",
      content: "指定商品輸入折扣碼，限時 75 折",
    },
    {
      icon: faHeadset,
      color: "#d5c6a9",
      title: "線上客服",
      content: "24 小時專員服務",
    },
  ];

  return (
    <>
      <div
        className="py-5 md:py-10"
        style={{
          background:
            "linear-gradient(to bottom, rgba(247, 236, 224, 1) 0%, rgba(247, 236, 224, .5) 50%, rgba(247, 236, 224, 0) 100%)",
        }}
      >
        <ul className="container flex flex-col items-start justify-center mx-auto md:flex-row md:flex-wrap">
          {list.map((item, index) => (
            <li
              key={index}
              className="flex items-center gap-2 w-full mt-3 md:text-center md:w-1/2 lg:w-[250px] lg:block relative
                     after:hidden lg:after:block lg:after:content-['|'] lg:after:absolute lg:after:right-0 lg:after:top-0  lg:after:text-gray-400 
                     last:after:hidden"
            >
              <FontAwesomeIcon
                icon={item.icon}
                size="lg"
                className="p-3 ml-3 text-sm text-white rounded-full shadow-md md:text-base md:m-0"
                style={{ backgroundColor: item.color }}
              />
              <div>
                <h3 className="py-1 text-sm font-bold text-left lg:text-center md:text-base">
                  {item.title}
                </h3>
                <p className="text-sm md:text-base">{item.content}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Service;
