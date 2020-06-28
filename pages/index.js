import Link from "next/link";
import Image from "components/Image";
import Layout from "components/Layout";
import Bio from "components/Bio";
import SEO from "components/Seo";
import { getSortedPosts } from "utils/posts";

export default function Home({ posts }) {
  return (
    <Layout posts={posts}>
      <SEO title="All posts" />
      <Bio />
      {posts.map(
        ({ frontmatter: { title, description, date, image }, slug }) => (
          <article
            key={slug + title + date}
            className="bg-white rounded shadow-2xl cursor-pointer sm:flex my-2 sm:p-3"
          >
            <Image
              alt={title}
              src={image}
              // previewSrc={`${image}?lqip`}
              className="w-full sm:w-48 sm:h-48 rounded object-cover "
            />
            <Link href={"/post/[slug]"} as={`/post/${slug}`}>
              <div className="mx-5 px-2">
                <header>
                  <h3 className="mb-2">
                    <a className="text-xl lg:text-2xl font-medium text-orange-600 no-underline">
                      {title}
                    </a>
                  </h3>
                  <span className="mb-3 text-xs">{date}</span>
                </header>
                <section>
                  <p className="mb-5 text-indigo-400 text-sm">{description}</p>
                </section>
              </div>
            </Link>
          </article>
        )
      )}
    </Layout>
  );
}

export async function getStaticProps() {
  const posts = getSortedPosts();

  return {
    props: {
      posts,
    },
  };
}
