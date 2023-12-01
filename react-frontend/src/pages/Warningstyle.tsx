type Props = {
  children?: string;
};
export default function Warningstyle({ children }: Props) {
  return (
    <div className="text-center p-5 text-xl">
      <h1 className="text-xl text-red-500">{children}</h1>
    </div>
  );
}
