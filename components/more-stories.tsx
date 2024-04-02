import PostPreview from "./post-preview";

export default function MoreStories({ posts }) {
  return (
    <section className="my-12 mx-auto max-w-6xl px-4">
      <h2 className="mb-12 text-4xl md:text-5xl font-bold tracking-tighter leading-tight text-center">
        More to Read
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {posts.map(({ node }) => (
          <PostPreview
            key={node.slug}
            title={node.title}
            coverImage={node.featuredImage}
            date={node.date}
            author={node.author}
            slug={node.slug}
            excerpt={node.excerpt}
          />
        ))}
      </div>
    </section>
  );
}

