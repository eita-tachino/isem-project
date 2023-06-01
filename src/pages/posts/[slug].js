import { Client } from "@notionhq/client";
import { Posts } from "@/components/Posts";
import PostDetails from "@/components/PostDetails";
import { getSortedPosts } from "@/utils/getSortedPosts";
import { getPageNumbers } from "@/utils/getPageNumbers";
import { SITE } from "../../../config";

import { v4 as uuidv4 } from "uuid";
import { validate as uuidValidate } from "uuid";

const PostSlug = ({
  paginatedPosts,
  currentPage,
  totalPages,
  post,
  page,
  childBlocks,
}) => {
  if (post) {
    return <PostDetails post={post} childBlocks={childBlocks} />;
  }

  return (
    <Posts
      posts={paginatedPosts}
      pageNum={currentPage}
      totalPages={totalPages}
    />
  );
};

export async function getStaticPaths() {
  const notion = new Client({
    auth: process.env.NOTION_SECRET,
  });

  const data = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID,
    filter: {
      property: "State",
      status: {
        equals: "Done",
      },
    },
  });

  const posts = data.results;

  const postResult = posts.map((post) => ({
    params: { slug: post.id },
  }));

  const pagePaths = getPageNumbers(posts.length).map((pageNum) => ({
    params: { slug: String(pageNum) },
  }));

  return {
    paths: [...postResult, ...pagePaths],
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const notion = new Client({
    auth: process.env.NOTION_SECRET,
  });

  const data = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID,
    // page_size: 5,
    filter: {
      property: "State",
      status: {
        equals: "Done",
      },
    },
  });
  const posts = data.results;
  const post = posts.find((post) => post.id === slug);
  // const page = await notion.pages.retrieve({
  //   page_id: post.id,
  // });

  // slugがNotionのUUIDであるか判定する
  // const isUUID =
  //   /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[0-9a-f]{4}-[0-9a-f]{12}$/.test(
  //     slug
  //   );
  const isUUID = uuidValidate(slug);
  let page = null;
  let childBlocks = [];
  if (isUUID) {
    // slugがUUIDの場合、Notionからpageを取得する
    page = await notion.pages.retrieve({
      page_id: slug,
    });
  }

  if (isUUID) {
    const { results } = await notion.blocks.children.list({
      block_id: slug,
      page_size: 100,
    });
    childBlocks = await Promise.all(
      results.map(async (block) => {
        if (block.has_children) {
          const children = await notion.blocks.children.list({
            block_id: block.id,
            page_size: 100,
          });
          return { ...block, children };
        }
        return block;
      })
    );
  }

  const sortedPosts = getSortedPosts(posts);
  const totalPages = getPageNumbers(sortedPosts.length);
  const currentPage = totalPages.includes(parseInt(slug, 10))
    ? parseInt(slug, 10)
    : 0;
  const lastPost = (currentPage + 1) * SITE.postPerPage;
  const startPost = currentPage * SITE.postPerPage;
  const paginatedPosts = sortedPosts.slice(startPost, lastPost);

  if (!post) {
    return {
      props: {
        paginatedPosts,
        currentPage,
        totalPages: totalPages.length,
      },
    };
  } else {
    return {
      props: {
        posts,
        paginatedPosts,
        currentPage,
        totalPages: totalPages.length,
        post,
        page: page || null,
        childBlocks: childBlocks || null,
      },
      revalidate: 60,
    };
  }
}

export default PostSlug;
