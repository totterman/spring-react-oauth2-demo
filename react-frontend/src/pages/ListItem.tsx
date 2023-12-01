type Props = {
  children?: string;
};
export default function ListItem({ children }: Props) {
  return <li className="text-base text-slate-800">{children}</li>;
}
