import Image from 'next/image';
const GalleryImage = ({ photo, imageProps }) => {
  const { width, height } = photo;
  const { src, alt, title, style, sizes, className, onClick } = imageProps;
  return (
    <div
      style={{
        width: style.width,
        height: style.height,
        aspectRatio: style.aspectRatio,
        display: style.display,
        boxSizing: style.boxSizing,
      }}>
      <Image
        src={src}
        alt={alt}
        title={title}
        sizes={sizes}
        width={width}
        height={height}
        className={className}
        onClick={onClick}
      />
    </div>
  );
};
export default GalleryImage;
