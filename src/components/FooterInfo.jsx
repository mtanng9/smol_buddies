export default function FooterInfo({ infoTitle, children }) {
  return (
    <div>
      <h3>{infoTitle}</h3>
      {children}
    </div>
  );
}
