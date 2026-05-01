import Image from "next/image";

type Props = { width: number; height: number; alt: string; src: string; main?: boolean };

const Hero = ({ width, height, alt, src, main }: Props) => {
  return (
    <>
      <Image
        width={width}
        height={height}
        alt={alt}
        src={src}
        className="absolute left-0 top-0 h-full w-full object-cover"
      />
      {main ? (
        <div className="absolute bottom-0 left-0 right-0 top-0 z-20 bg-[linear-gradient(45deg,_rgba(0,0,0,0.98)_0%,_rgba(0,0,0,0.94)_22%,_rgba(0,0,0,0.78)_42%,_rgba(3,18,52,0.68)_62%,_rgba(12,52,128,0.42)_82%,_rgba(38,92,190,0.16)_100%)]" />
      ) : (
        <div className="absolute left-0 top-0 z-10 h-full w-full bg-gradient-to-t from-black via-black/80 to-transparent" />
      )}
    </>
  );
};

export default Hero;
