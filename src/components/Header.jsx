import logoBear from "../images/logo-bear.png";
import cartLogo from "../images/cart.png";
import loginLogo from "../images/login.png";

export default function Header() {
  return (
    <header className="flex flex-col bg-blue-background text-white">
      <div className="flex flex-row justify-center">
        <div className="flex flex-row">
          <img src={logoBear} alt="logo" className="size-16 w-28" />
          <h1 className="text-3xl font-bold my-auto">smolBuddies</h1>
        </div>
        <div className="hidden">
          <div id="auth">
            <img src={loginLogo} alt="logo" className="size-16" />
          </div>
          <div id="cart">
            <img src={cartLogo} alt="logo" className="size-16" />
          </div>
        </div>
      </div>

      <nav className="hidden">
        <div id="nav-button">
          <button>New</button>
          <button>Animals</button>
          <button>Accessories</button>
          <button>Collections</button>
        </div>
      </nav>
    </header>
  );
}
