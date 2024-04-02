import cn from "classnames";
import Image from "next/image";
import Link from "next/link";

interface Props {
  title: string;
  coverImage: {
    node: {
      sourceUrl: string;
    };
  };
  slug?: string;
}

export default function CoverImage({ title, coverImage, slug }: Props) {
  // Wrap the Image component in a div to control its size more responsively
  const image = (
    <div className={cn("relative", {
      "w-full h-0 pb-[50%]": true, // Aspect ratio box
    })}>
      <Image
        layout="fill" // This makes the image fill the container, use with the aspect ratio box
        objectFit="cover" // This scales the image nicely to cover the area
        alt={`Cover Image for ${title}`}
        src={coverImage?.node.sourceUrl}
        className={cn("shadow-small rounded-lg", {
          "hover:shadow-medium transition-shadow duration-200": slug,
        })}
      />
    </div>
  );

  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link href={`/posts/${slug}`} aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  );
}

