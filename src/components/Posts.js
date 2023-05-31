import Main from "../layout/Main";
import Header from "@/components/Header";
import Card from "@/components/Card";
import { Footer } from "@/components/Footer";
import { LinkButton } from "@/components/LinkButton";

export const Posts = ({ pageNum, posts, totalPages }) => {
  const prev = pageNum > 1 ? "" : "disabled";
  const next = pageNum < totalPages ? "" : "disabled";

  return (
    <>
      <Header activeNav="posts" />
      <Main pageTitle="Posts" pageDesc="All the articles I've posted.">
        <ul>
          {posts.map((post) => (
            // 🚨相対パスになっていたので、絶対パスにする.
            // 相対パスだとposts/postsのように重複してしまう.
            <Card key={post.id} href={`/posts/${post.id}`} post={post} />
          ))}
        </ul>
      </Main>
      {totalPages > 1 && (
        <nav
          className="pagination-wrapper mt-auto mb-8 flex justify-center"
          aria-label="Pagination"
        >
          <LinkButton
            disabled={prev === "disabled"}
            href={`/posts${pageNum - 1 !== 1 ? "/" + (pageNum - 1) : ""}`}
            className={`mr-4 select-none  ${prev}`}
            ariaLabel="Previous"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className={`${prev}-svg`}>
              <path d="M12.707 17.293 8.414 13H18v-2H8.414l4.293-4.293-1.414-1.414L4.586 12l6.707 6.707z" />
            </svg>
            Prev
          </LinkButton>
          <LinkButton
            disabled={next === "disabled"}
            href={`/posts/${pageNum + 1}`}
            className={`ml-4 select-none ${next}`}
            ariaLabel="Next"
          >
            Next
            <svg xmlns="http://www.w3.org/2000/svg" className={`${next}-svg`}>
              <path d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z" />
            </svg>
          </LinkButton>
        </nav>
      )}
      <Footer noMarginTop={totalPages > 1} />
    </>
  );
};
