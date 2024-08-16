export default function Header() {
  return (
    <header>
      <img src="" alt="logo" />
      <h1>SmolBuddies</h1>
      <nav>
        <div id="search">
          <input type="text" placeholder="search" />
        </div>
        <div id="nav-button">
          <button>New</button>
          <button>Animals</button>
          <button>Accessories</button>
          <button>Collections</button>
        </div>
        <div id="auth">
          <button>Log In/ Join</button>
        </div>
      </nav>
    </header>
  );
}
