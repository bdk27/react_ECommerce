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
      title: "免運無限次",
      content: ["下單選擇指定超商取貨，滿額即享免運"],
    },
    {
      icon: faGift,
      title: "滿額贈品",
      content: [
        "滿 2,000 元送 9 折現金抵用券，單筆最高贈 300 元",
        // "滿 5,000 元送 500 刷卡金(限量 200 名)",
      ],
    },
    {
      icon: faMoneyBill,
      title: "限時優惠",
      content: ["指定商品輸入折扣碼，限時 75 折"],
    },
    {
      icon: faHeadset,
      title: "24/7",
      content: ["24小時專員服務"],
    },
  ];

  return (
    <>
      <div className="py-5 bg-lightBrown">
        <div className="container mx-auto">
          <ul className="flex flex-col items-start justify-between gap-3 md:flex-row">
            {list.map((item, index) => (
              <li
                key={index}
                className="flex items-center md:text-center md:block"
              >
                <FontAwesomeIcon
                  icon={item.icon}
                  size="lg"
                  className="p-3 mx-3 bg-white rounded-full text-mainBrown"
                />
                <div>
                  <h3 className="py-1 font-bold">{item.title}</h3>
                  <ul>
                    {item.content.map((subItem, subIndex) => (
                      <li key={subIndex} className="text-sm md:text-base">
                        {subItem}
                      </li>
                    ))}
                  </ul>
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
