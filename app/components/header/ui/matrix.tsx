import Image from 'next/image';

const Matrix = () => {
  return (
    <div className="hidden select-none lg:block lg:w-[33%]">
      <Image className="ml-auto" src="/assets/Matrix.svg" alt="" width={200} height={200} />
    </div>
  );
};

export default Matrix;
