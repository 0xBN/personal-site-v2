export const Slide = ({ image }) => {
  return (
    <div className='absolute z-0 opacity-100'>
      <img src={image} alt='' className='min-w-full' />
    </div>
  );
};
