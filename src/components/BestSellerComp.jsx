export default function BestSellerComp({ para, alt, description, price }) {
  return (
    <div>
      <p>{para}</p>
      <img src="" alt={alt} />
      <p>{description}</p>
      <p>{price}</p>
    </div>
  );
}
