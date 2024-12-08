import logoBear from "../images/logo-bear.png";
import cartLogo from "../images/cart.png";
import loginLogo from "../images/login.png";

export default function Header() {
  return (
    <header className="flex flex-col bg-blue-background text-white lg:pb-5">
      <div className="flex flex-row justify-center lg:justify-between">
        <div className="flex flex-row">
          <img
            src={logoBear}
            alt="logo"
            className="size-16 w-28 md:size-32 md:w-40"
          />
          <h1 className="text-3xl font-bold my-auto md:text-5xl">
            smolBuddies
          </h1>
        </div>
        <div className="hidden lg:flex">
          <div id="auth">
            <img src={loginLogo} alt="logo" className="size-32" />
          </div>
          <div id="cart">
            <img src={cartLogo} alt="logo" className="size-32" />
          </div>
        </div>
      </div>

      <nav className="hidden lg:flex lg:w-full lg:justify-center lg:space-x-20 lg:text-3xl">
        <button className="hover:text-dark-orange">New</button>
        <button className="hover:text-dark-orange">Animals</button>
        <button className="hover:text-dark-orange"> Accessories</button>
        <button className="hover:text-dark-orange">Collections</button>
      </nav>
    </header>
  );
}
