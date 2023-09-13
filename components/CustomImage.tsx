import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  priority?: string;
};

// Images for the blog posts
export default function CustomImage({ src, alt, priority }: Props) {
  const prty = priority ? true : false;
  return (
    <div className="w-full h-full rounded-xl my-6">
      <Image src={src} alt={alt} width={650} height={650} priority={prty} className="mx-auto" />
    </div>
  );
}
