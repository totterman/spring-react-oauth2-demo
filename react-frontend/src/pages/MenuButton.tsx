import { NavLink } from 'react-router-dom';

type Props = {
  callback: () => {};
  loading: boolean;
  children?: string;
};

export default function MenuButton({ callback, loading, children }: Props) {
  return (
    <button
      onClick={callback}
      className="whitespace-nowrap inline-flex items-right justify-center ml-auto px-4 py-2 w-18 border border-transparent rounded-md shadow-sm text-white bg-slate-900 hover:cursor-pointer"
      disabled={loading}
    >
      {loading ? '...' : children}
    </button>
  );
}
