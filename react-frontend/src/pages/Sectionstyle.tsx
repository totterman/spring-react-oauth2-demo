type Props = {
  children?: string;
};
export default function Sectionstyle({ children }: Props) {
  return <p className="container mx-auto px-8 text-base text-slate-800">{children}</p>;
}
