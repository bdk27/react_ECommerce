import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTruckFast,
  faGift,
  faMoneyBill,
  faHeadset,
  faCakeCandles,
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
        className="flex items-center justify-center"
        style={{
          background:
            "linear-gradient(to right, rgba(255, 228, 196, 0) 0%, rgba(255, 228, 196, 1) 50%, rgba(255, 228, 196, 0) 100%)",
        }}
      >
        <FontAwesomeIcon icon={faCakeCandles} />
        <p className="px-2 py-3 font-bold">
          Venus 歡慶<span className="px-1 text-red-500">10</span>
          周年! 登入就抽好禮
        </p>
      </div>

      <div className="py-5 shadow-sm">
        <div className="container mx-auto">
          <ul className="flex flex-col items-start justify-between gap-3 md:flex-row">
            {list.map((item, index) => (
              <li
                key={index}
                className="flex items-center md:w-1/4 md:text-center md:block"
              >
                <FontAwesomeIcon
                  icon={item.icon}
                  size="lg"
                  className="p-3 mx-3 text-white rounded-full shadow-md"
                  style={{ backgroundColor: item.color }}
                />
                <div>
                  <h3 className="py-1 font-bold">{item.title}</h3>
                  <p className="text-sm md:text-base">{item.content}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Service;
