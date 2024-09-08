import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faBagShopping,
  faBars,
  faBolt,
} from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const icons = [
    {
      name: faUser,
      size: "lg",
    },
    {
      name: faBagShopping,
      size: "lg",
    },
    {
      name: faBars,
      size: "lg",
    },
  ];

  return (
    <>
      {/* 手機版 */}
      <div className="md:hidden">
        <div className="container p-3 mx-auto shadow-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-center">
              {/* <FontAwesomeIcon icon={faFeatherPointed} /> */}
              <FontAwesomeIcon icon={faBolt} className="text-yellow-400" />
              <h1 className="ml-1 text-xl font-bold">SKYVOLT</h1>
            </div>

            <ul className="flex items-center justify-center gap-5">
              {icons.map((item, index) => (
                <li key={index}>
                  <FontAwesomeIcon icon={item.name} size={item.size} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* 電腦版 */}
      <div className="hidden md:block">
        <ul>
          <li>Home</li>
          <li>Collection</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
