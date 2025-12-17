export function Card({ title, children }) {
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
      {title && <h3 className="font-semibold mb-4">{title}</h3>}
      {children}
    </div>
  );
}
