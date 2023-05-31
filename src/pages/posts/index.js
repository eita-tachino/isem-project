import { SITE } from "../../../config";
import { Posts } from "@/components/Posts";
import { getSortedPosts } from "@/utils/getSortedPosts";
import { getPageNumbers } from "@/utils/getPageNumbers";

import { Client } from "@notionhq/client";

const PostsHome = ({ posts }) => {
  const sortedPost = getSortedPosts(posts);

  const totalPages = getPageNumbers(sortedPost.length);

  const paginatedPosts = sortedPost.slice(0, SITE.postPerPage);

  return (
    <>
      <Posts
        posts={paginatedPosts}
        pageNum={1}
        totalPages={totalPages.length}
      />
    </>
  );
};

export default PostsHome;

export const getStaticProps = async () => {
  const notion = new Client({
    auth: process.env.NOTION_SECRET,
  });

  const response = await notion.databases.query({
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
      posts: response.results,
    },
    revalidate: 60,
  };
};
