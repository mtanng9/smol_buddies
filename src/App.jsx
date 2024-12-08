import "./App.css";
import AdSpace from "./components/AdSpace";
import Header from "./components/Header";
import Hero from "./components/Hero";
import PhotoAd from "./components/PhotoAd";
import BestSellerComp from "./components/BestSellerComp";
import FooterInfo from "./components/FooterInfo";
import classicBear from "./images/classicBear.png";
import lovedDuck from "./images/lovedDuck.png";
import birdy from "./images/birdy.png";
import pengy from "./images/pengy.png";
import lavee from "./images/lavee.png";
import logoBear from "./images/logo-bear.png";
import insta from "./images/insta.png";
import facebook from "./images/facebook.png";

function App() {
  return (
    <>
      <AdSpace />
      <Header />
      <Hero />
      <div className="flex flex-col bg-blue-background p-3 mt-4 md:pb-10 lg:flex-row">
        <PhotoAd
          img={classicBear}
          alt="This will be a photo of a teddy bear"
          text="Adored Classics"
        />
        <PhotoAd
          img={lovedDuck}
          alt="This will be a photo of duck stuffies"
          text="Most loved"
        />
      </div>

      <div className="flex flex-col bg-white text-blue-background">
        <h2 className="flex justify-center font-bold text-4xl mt-4 md:text-5xl">
          Trending
        </h2>
        <div className="lg:flex lg:flex-row">
          <BestSellerComp
            para="Best Seller"
            img={birdy}
            alt="Photo of Shark"
            description="Birdy"
            price="$15"
          />
          <BestSellerComp
            para="Back in Stock"
            img={pengy}
            alt="Photo of Another Shark"
            description="Pengy"
            price="$15"
          />
          <BestSellerComp
            para="New Item"
            img={lavee}
            alt="Photo of Teddy Bear"
            description="Lavee"
            price="$15"
          />
        </div>
      </div>

      <div className="flex flex-col bg-blue-background mt-3">
        <h2 className="flex justify-center text-white font-bold text-4xl mt-4">
          Information
        </h2>
        <div className="lg:flex lg:flex-row lg:pr-5">
          <img src={logoBear} alt="Logo Picture" className="lg:w-1/4" />

          <FooterInfo
            infoTitle="Shopping"
            items={[
              "Need Help?",
              "Delivery",
              "Return",
              "Gift Options",
              "Safety Care",
            ]}
          ></FooterInfo>

          <FooterInfo
            infoTitle="About Us"
            items={["Our Story", "Store Locator", "Newsletter Sign Up"]}
          ></FooterInfo>

          <FooterInfo
            infoTitle="Legal"
            items={[
              "Privacy and Cookies",
              "Terms of Use",
              "Accessibility Statement",
            ]}
          ></FooterInfo>
        </div>

        <div className="lg:w-full">
          <div className="flex flex-col bg-white rounded-lg m-3 p-4 text-3xl lg:flex-row lg:justify-center lg:w-1/2 lg:ml-auto lg:rounded-full">
            <p className="font-bold text-blue-background mx-3 text-center">
              Join our smolBuddies!
            </p>

            <img src={insta} alt="insta logo" className="lg:size-10" />
            <img src={facebook} alt="facebook logo" className="lg:size-10" />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
