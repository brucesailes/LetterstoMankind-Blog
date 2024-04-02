import Avatar from "./avatar";
import Date from "./date";
import CoverImage from "./cover-image";
import Link from "next/link";

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    // Add shadow and border here, with some rounded corners for a modern look
    <div className="bg-white rounded-lg overflow-hidden shadow-lg border border-gray-200 mb-8">
      <div className="mb-5">
        {coverImage && (
          <CoverImage title={title} coverImage={coverImage} slug={slug} />
        )}
      </div>
      <div className="px-6 py-4">
        <h3 className="text-3xl mb-3 leading-snug">
          <Link href={`/posts/${slug}`} legacyBehavior>
            <a className="hover:underline" dangerouslySetInnerHTML={{ __html: title }}></a>
          </Link>
        </h3>
        <div className="text-lg mb-4">
          <Date dateString={date} />
        </div>
        <div
          className="text-lg leading-relaxed mb-4"
          dangerouslySetInnerHTML={{ __html: excerpt }}
        />
         <Avatar author={author} />
      <div className="mt-4">
        <Link href={`/posts/${slug}`} legacyBehavior>
            <a className="text-blue-600 hover:text-blue-800 underline transition-colors duration-200">Start Reading...</a>
        </Link>
      </div>
      </div>
    </div>
  );
}
