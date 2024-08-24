import "./App.css";
import AdSpace from "./components/AdSpace";
import Header from "./components/Header";
import Hero from "./components/Hero";
import PhotoAd from "./components/PhotoAd";
import BestSellerComp from "./components/BestSellerComp";
import FooterInfo from "./components/FooterInfo";

function App() {
  return (
    <>
      <AdSpace />
      <Header />
      <Hero />
      <div>
        <PhotoAd
          alt="This will be a photo of a teddy bear"
          text="Adored Classics"
        />
        <PhotoAd
          alt="This will be a photo of shark stuffies"
          text="Discover our most loved"
        />
      </div>

      <div>
        <h2>Trending</h2>
        <BestSellerComp
          para="Best Seller"
          alt="Photo of Shark"
          description="description of shark"
          price="$25"
        />
        <BestSellerComp
          para="Best Seller"
          alt="Photo of Another Shark"
          description="description of another shark"
          price="$25"
        />
        <BestSellerComp
          para="Back in Stock"
          alt="Photo of Teddy Bear"
          description="description of Teddy Bear"
          price="$25"
        />
      </div>

      <div>
        <img src="" alt="Logo Picture" />

        <FooterInfo infoTitle="Shopping">
          <ul>
            <li>Need Help?</li>
            <li>Delivery</li>
            <li>Return</li>
            <li>Gift Options</li>
            <li>Safety Care</li>
          </ul>
        </FooterInfo>

        <FooterInfo infoTitle="About Us">
          <ul>
            <li>Our Story</li>
            <li>Store Locator</li>
            <li>Newsletter Sign Up</li>
          </ul>
        </FooterInfo>

        <FooterInfo infoTitle="Legal">
          <ul>
            <li>Privacy and Cookies</li>
            <li>Terms of Use</li>
            <li>Accesibility Statement</li>
          </ul>
        </FooterInfo>

        <div>
          <p>Join Our SmolBuddies</p>
          <img src="" alt="social media logo 1" />
          <img src="" alt="social media logo 2" />
        </div>
      </div>
    </>
  );
}

export default App;
