import Link from "next/link";
import { Client } from "@notionhq/client";

import Card from "@/components/Card";
import { getUniqueTags } from "@/utils/getUniqueTags";
import { getPostsByTag } from "@/utils/getPostsbyTag";

import Main from "@/layout/Main";

const TagPage = ({ posts, tag }) => {
  const tagPosts = getPostsByTag(posts, tag);

  return (
    <>
      <Main
        pageTitle={`Tag:${tag}`}
        pageDesc={`All the articles with the tag "${tag}".`}
      >
        <ul>
          {tagPosts.map((tpost) => (
            <Card key={tpost.id} href={`/posts/${tpost.id}`} post={tpost} />
          ))}
        </ul>
      </Main>
    </>
  );
};

export const getStaticPaths = async () => {
  const notion = new Client({
    auth: process.env.NOTION_SECRET,
  });

  const posts = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID,
    filter: {
      property: "State",
      status: {
        equals: "Done",
      },
    },
  });

  const data = posts.results;

  const tags = getUniqueTags(data);

  return {
    paths: tags.map((tag) => ({ params: { tag: tag.toLowerCase() } })),
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const notion = new Client({
    auth: process.env.NOTION_SECRET,
  });

  const posts = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID,
    filter: {
      property: "State",
      status: {
        equals: "Done",
      },
    },
  });

  const tag = params.tag.toLowerCase();
  // const tag = params.tag

  return {
    props: {
      posts: posts.results,
      tag,
    },
  };
};

export default TagPage;
