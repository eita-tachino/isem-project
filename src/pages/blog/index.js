import Header from "@/components/Header";
import Card from "@/components/Card";
import Hr from "@/components/Hr";
import { LinkButton } from "@/components/LinkButton";

import { Footer } from "@/components/Footer";
import { getSortedPosts } from "@/utils/getSortedPosts";

import { Client } from "@notionhq/client";

export default function BlogHomeDemo({ posts }) {
  const sortedPosts = getSortedPosts(posts);

  const featuredPosts = posts.filter((post) =>
    post.properties.Featured.rich_text.filter(
      (t) => t.plain_text === "Featured"
    )
  );

  return (
    <>
      <Header activeNav={"blog"} />
      <section id="hero" className="pt-8 pb-6">
        <h1 className="my-4 inline-block text-3xl font-bold sm:my-8 sm:text-6xl italic">
          Isem Blog
        </h1>
        <a
          target="_blank"
          href="/rss.xml"
          className="mb-6"
          aria-label="rss feed"
          title="RSS Feed"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mb-2 h-6 w-6 scale-110 fill-orange-500 sm:mb-3 sm:scale-125"
          >
            <path d="M19 20.001C19 11.729 12.271 5 4 5v2c7.168 0 13 5.832 13 13.001h2z"></path>
            <path d="M12 20.001h2C14 14.486 9.514 10 4 10v2c4.411 0 8 3.589 8 8.001z"></path>
            <circle cx="6" cy="18" r="2"></circle>
          </svg>
        </a>

        <p className="my-2 tracking-wider leading-6">
          聴き給え！知識の仮想の広間に進みたまえ。そこでは勇敢なる学者たちが集い、数と文字の難解な領域を従順に制する。このデジタルの聖域にて、数学と英語の芸に堪えたる知識の英雄たちは、知恵を求める冒険に旅立つ。対話的な挑戦と高潔なる導きを通じて、彼らは方程式の謎を解き、言語の秘密を解き放つ。思考を研ぎ澄まし、理解を広げ、霊魂を照らし出すがよい、この高貴なる自習のオンラインの住処にて。学問の英雄たちの仲間入りをし、学術的な勝利と言語の巧妙さを求める道を切り開くがよい。
        </p>
        <p className="my-2 tracking-wider leading-6">
          Read the blog posts or check{" "}
          <LinkButton
            className="hover:text-orange-500 underline underline-offset-4 decoration-dashed"
            href="https://github.com/satnaing/astro-paper#readme"
          >
            README
          </LinkButton>{" "}
          for more info.
        </p>
        {/* {
        // only display if at least one social link is enabled
        socialCount > 0 && (
          <div class="social-wrapper">
            <div class="social-links">Social Links:</div>
            <Socials />
          </div>
        )
      } */}
      </section>
      <Hr />
      {featuredPosts.length > 0 && (
        <>
          <section id="featured" className="pt-12 pb-6">
            <h2 className="text-2xl font-semibold tracking-wide text-orange-400">
              ピックアップ記事
            </h2>
            <ul>
              {featuredPosts.map((post) => (
                <Card
                  key={post.id}
                  href={`/posts/${post.id}`}
                  secHeading={true}
                  post={post}
                />
              ))}
            </ul>
          </section>
          <Hr />
        </>
      )}
      <section id="recent-posts">
        <h2 className="text-2xl font-semibold tracking-wide text-orange-400">
          最近の投稿
        </h2>
        <ul>
          {sortedPosts.map(
            (sortedPost, index) =>
              index < 4 && (
                <Card
                  key={sortedPost.id}
                  href={`/posts/${sortedPost.id}`}
                  post={sortedPost}
                  secHeading={false}
                />
              )
          )}
        </ul>
        <div className="my-8 text-center">
          <LinkButton href={`/posts`}>
            全投稿
            <svg xmlns="http://www.w3.org/2000/svg">
              <path d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z"></path>
            </svg>
          </LinkButton>
        </div>
      </section>
      <Footer />
    </>
  );
}

export const getStaticProps = async () => {
  const notion = new Client({
    auth: process.env.NOTION_SECRET,
  });

  const posts = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID,
    page_size: 5,
    filter: {
      property: "State",
      status: {
        equals: "Done",
      },
    },
  });

  return {
    props: {
      posts: posts.results,
    },
  };
};
