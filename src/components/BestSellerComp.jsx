export default function BestSellerComp({ para, img, alt, description, price }) {
  return (
    <div className="pl-5 md:pl-10">
      <p className="text-xl font-bold mt-3 md:text-2xl">{para}</p>
      <img src={img} alt={alt} />
      <p className="flex justify-center md:text-xl">{description}</p>
      <p className="flex justify-center text-dark-orange mb-3 md:text-lg md:font-semibold">
        {price}
      </p>
    </div>
  );
}
