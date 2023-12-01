type Props = {
  header?: string;
  children?: string;
};
export default function Pagestyle({ header, children }: Props) {
  return (
    <div className="text-center p-5 text-xl">
      <h1 className="text-xl text-slate-900">{header}</h1>
      <p className="text-base text-slate-800">{children}</p>
    </div>
  );
}
