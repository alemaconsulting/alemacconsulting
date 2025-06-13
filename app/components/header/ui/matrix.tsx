import Image from 'next/image';

import { matrix } from '@/app/shared/constants';

export const Matrix = () => {
  return (
    <div className="hidden select-none lg:block lg:w-[33%]">
      <Image className="ml-auto" src={matrix} alt="" width={200} height={200} />
    </div>
  );
};
