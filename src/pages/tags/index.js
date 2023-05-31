import Header from "@/components/Header";
import Main from "@/layout/Main";
import Tag from "@/components/Tag";

import { getUniqueTags } from "@/utils/getUniqueTags";

import { Client } from "@notionhq/client";

const TagHome = ({ posts, size = "sm" }) => {
  let tags = getUniqueTags(posts);

  return (
    <>
      <Header activeNav={"tags"} />
      <Main pageTitle="Tags" pageDesc="All the tags used in posts.">
        <ul>
          {tags.map((tag, i) => (
            <Tag key={i} tag={tag.toLowerCase()} size="lg" />
          ))}
        </ul>
      </Main>
    </>
  );
};

export const getStaticProps = async () => {
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

  return {
    props: {
      posts: posts.results,
    },
  };
};

export default TagHome;
