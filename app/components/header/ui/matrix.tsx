import Image from 'next/image';

import { matrix } from '@/app/shared/constants';

export const Matrix = () => {
  return (
    <div className="hidden select-none lg:block lg:w-[33%]">
      <Image alt="" className="ml-auto" height={200} src={matrix} width={200} />
    </div>
  );
};
