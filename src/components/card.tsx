export function Card({
  title,
  value,
  meta,
}: {
  title: string;
  value: string;
  meta?: string;
}) {
  return (
    <div className="p-4 bg-white rounded-md shadow-sm border">
      <div className="text-sm text-slate-500">{title}</div>
      <div className="mt-2 text-2xl font-semibold">{value}</div>
      {meta && <div className="text-sm text-slate-400 mt-1">{meta}</div>}
    </div>
  );
}
