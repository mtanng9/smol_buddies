import stuffedAnimals from "../images/hero.png";

export default function Hero() {
  return (
    <div className="flex flex-col bg-white text-blue-background px-3">
      <img src={stuffedAnimals} alt="This will be one giant photo" />
      <h1 className="font-bold text-xl ">Back to School Buddies</h1>
      <p className="text-sm">Explore Our Newest Collection</p>
    </div>
  );
}
