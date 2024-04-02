import Avatar from "./avatar";
import Date from "./date";
import CoverImage from "./cover-image";
import Link from "next/link";

export default function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <section className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-8">
        {coverImage && (
          <CoverImage title={title} coverImage={coverImage} slug={slug} />
        )}
        <div className="p-6">
          <h3 className="text-2xl font-semibold mb-2">
            <Link href={`/posts/${slug}`} legacyBehavior>
              <a className="hover:underline">{title}</a>
            </Link>
          </h3>
          <div className="text-gray-600 text-sm mb-4">
            <Date dateString={date} />
          </div>
          <div className="text-gray-800 text-lg mb-4" dangerouslySetInnerHTML={{ __html: excerpt }} />
          <div className="flex items-center mb-4">
            <Avatar author={author} />
            <div className="text-sm ml-2">{author.name}</div>
          </div>
          <Link href={`/posts/${slug}`} legacyBehavior>
            <a className="text-blue-600 hover:text-blue-800 underline transition-colors duration-200">Start Reading...</a>
          </Link>
        </div>
      </div>
    </section>
  );
}
