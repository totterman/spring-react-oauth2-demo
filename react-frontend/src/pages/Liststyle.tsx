import { ReactElement } from 'react';

type Props = {
  children?: ReactElement;
};

export default function Liststyle({ children }: Props) {
  return <ul className="container mx-auto px-12 list-disc text-base text-slate-800">{children}</ul>;
}
