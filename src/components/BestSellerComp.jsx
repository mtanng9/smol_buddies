export default function BestSellerComp({ para, img, alt, description, price }) {
  return (
    <div>
      <p className="text-xl font-bold mt-3">{para}</p>
      <img src={img} alt={alt} />
      <p className="flex justify-center ">{description}</p>
      <p className="flex justify-center text-dark-orange mb-3">{price}</p>
    </div>
  );
}
