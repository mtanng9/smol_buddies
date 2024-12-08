export default function PhotoAd({ img, alt, text }) {
  return (
    <div>
      <img src={img} alt={alt} />
      <div className="flex justify-center">
        <button className="bg-white text-blue-background p-3 rounded-3xl md:w-3/4 md:text-2xl">
          {text}
        </button>
      </div>
    </div>
  );
}
