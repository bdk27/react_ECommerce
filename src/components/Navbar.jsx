function Navbar() {
  return (
    <>
      {/* 手機版 */}
      <div className="md:hidden">
        <div className="container p-3 mx-auto shadow-sm">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold">TSHOP</h1>
            <ul className="flex items-center justify-center">
              <li>language</li>
              <li>search</li>
              <li>user</li>
              <li>shop</li>
              <li>bar</li>
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
