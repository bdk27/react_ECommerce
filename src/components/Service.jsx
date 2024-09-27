import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTruckFast,
  faGift,
  faHeadset,
} from "@fortawesome/free-solid-svg-icons";

function Service() {
  const list = [
    {
      icon: faTruckFast,
      title: "免運無限次",
      content: "下單選擇指定超商取貨，滿額即享免運",
    },
    {
      icon: faGift,
      title: "滿額贈品",
      content: "滿5,000元送500刷卡金(需登錄，限量 200 名)",
    },
    {
      icon: faHeadset,
      title: "24小時專員服務",
      content: "單筆消費滿 NT$1,000 可折抵 NT$50",
    },
  ];

  return (
    <>
      <div className="py-3">
        <ul className="flex flex-col items-start justify-between gap-3 md:flex-row">
          {list.map((item, index) => (
            <li key={index} className="flex items-center justify-between gap-1">
              <FontAwesomeIcon
                icon={item.icon}
                size="lg"
                className="pr-3 text-red-400"
              />
              <div>
                <h3 className="font-bold">{item.title}</h3>
                <p className="text-sm">{item.content}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Service;
