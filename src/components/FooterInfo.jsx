export default function FooterInfo({ infoTitle, items }) {
  return (
    <div className="flex flex-col bg-white rounded-lg m-3">
      <h3 className="flex justify-center font-bold text-2xl text-dark-orange m-3">
        {infoTitle}
      </h3>
      {/* using map instead of children in order to apply the effect to all of the list item without manually doing it in app.jsx */}
      <ul className="flex flex-col mb-5">
        {items.map((item) => {
          // mx auto helps put the list in the middle in the mobile version since it puts margin on both sides
          return (
            <li className="mx-auto m-2 p-2 w-2/3 border text-center">{item}</li>
          );
        })}
      </ul>
    </div>
  );
}
