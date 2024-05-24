import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';

export default function AcmeLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white bg-slate-950`}
    >
      <GlobeAltIcon className="h-12 w-12 rotate-[15deg] bg-slate-950" />
      <p className="text-[44px]">Admin Panel</p>
    </div>
  );
}
