import { Fragment } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import Header from "./Header";
import DateTime from "./DateTime";
import Tag from "./Tag";

import styles from "./post.module.css";

export const Text = ({ text }) => {
  if (!text) {
    return null;
  }
  return text.map((value) => {
    const {
      annotations: { bold, code, color, italic, strikethrough, underline },
      text,
    } = value;
    return (
      <span
        className={[
          bold ? styles.bold : "",
          code ? styles.code : "",
          italic ? styles.italic : "",
          strikethrough ? styles.strikethrough : "",
          underline ? styles.underline : "",
        ].join(" ")}
        style={color !== "default" ? { color } : {}}
        key={text.content}
      >
        {text.link ? <a href={text.link.url}>{text.content}</a> : text.content}
      </span>
    );
  });
};

const renderBlock = (block) => {
  const { type, id } = block;
  const value = block[type];

  switch (type) {
    case "paragraph":
      return (
        <p>
          <Text text={value.rich_text} />
        </p>
      );
    case "heading_1":
      return (
        <h1 className="text-2xl font-semibold text-[#F38BA3]">
          <Text text={value.rich_text} />
        </h1>
      );
    case "heading_2":
      return (
        <h2 className="font-bold">
          <Text text={value.rich_text} />
        </h2>
      );
    case "heading_3":
      return (
        <h3 className="font-medium mt-8 mb-2 text-[#ffa500]">
          <Text text={value.rich_text} />
        </h3>
      );
    case "bulleted_list": {
      return <ul>{value.children.map((child) => renderBlock(child))}</ul>;
    }
    case "numbered_list": {
      return <ol>{value.children.map((child) => renderBlock(child))}</ol>;
    }
    case "bulleted_list_item":
    case "numbered_list_item":
      return (
        <li key={block.id}>
          <Text text={value.rich_text} />
          {!!value.children && renderNestedList(block)}
        </li>
      );
    case "to_do":
      return (
        <div>
          <label htmlFor={id}>
            <input type="checkbox" id={id} defaultChecked={value.checked} />{" "}
            <Text text={value.rich_text} />
          </label>
        </div>
      );
    case "toggle":
      return (
        <details>
          <summary>
            <Text text={value.rich_text} />
          </summary>
          {block.children?.map((child) => (
            <Fragment key={child.id}>{renderBlock(child)}</Fragment>
          ))}
        </details>
      );
    case "child_page":
      return (
        <div className={styles.childPage}>
          <strong>{value.title}</strong>
          {block.children.map((child) => renderBlock(child))}
        </div>
      );
    case "image":
      const src =
        value.type === "external" ? value.external.url : value.file.url;
      const caption = value.caption ? value.caption[0]?.plain_text : "";
      return (
        <figure className="my-12">
          <img src={src} alt={caption} />
          {caption && <figcaption>{caption}</figcaption>}
        </figure>
      );
    case "divider":
      return <hr key={id} />;
    case "quote":
      return <blockquote key={id}>{value.rich_text[0].plain_text}</blockquote>;
    case "code":
      return (
        <pre className={styles.pre}>
          <code className={styles.code_block} key={id}>
            {value.rich_text[0].plain_text}
          </code>
        </pre>
      );
    case "file":
      const src_file =
        value.type === "external" ? value.external.url : value.file.url;
      const splitSourceArray = src_file.split("/");
      const lastElementInArray = splitSourceArray[splitSourceArray.length - 1];
      const caption_file = value.caption ? value.caption[0]?.plain_text : "";
      return (
        <figure>
          <div className={styles.file}>
            📎{" "}
            <Link href={src_file} passHref>
              {lastElementInArray.split("?")[0]}
            </Link>
          </div>
          {caption_file && <figcaption>{caption_file}</figcaption>}
        </figure>
      );
    case "bookmark":
      const href = value.url;
      return (
        <a href={href} target="_brank" className={styles.bookmark}>
          {href}
        </a>
      );
    case "table": {
      return (
        <table className={styles.table}>
          <tbody>
            {block.children?.results.map((child, i) => {
              const RowElement =
                value.has_column_header && i == 0 ? "th" : "td";
              return (
                <tr key={child.id}>
                  {child.table_row?.cells?.map((cell, i) => {
                    return (
                      <RowElement key={`${cell.plain_text}-${i}`}>
                        <Text text={cell} />
                      </RowElement>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      );
    }
    case "column_list": {
      return (
        <div className={styles.row}>
          {block.children.map((block) => renderBlock(block))}
        </div>
      );
    }
    case "column": {
      return <div>{block.children.map((child) => renderBlock(child))}</div>;
    }
    // case "equation": {
    //   if (value.expression) {
    //     const math = value.expression;
    //     return (
    //       <ReactMarkdown
    //         remarkPlugins={[remarkMath]}
    //         rehypePlugins={[rehypeKatex]}
    //       >
    //         {/* {math} */}
    //         {`$$${math}$$`}
    //       </ReactMarkdown>
    //     );
    //   }
    // }
    default:
      return `❌ Unsupported block (${
        type === "unsupported" ? "unsupported by Notion API" : type
      })`;
  }
};

const PostDetails = ({ post, childBlocks }) => {
  const router = useRouter();
  const handleGoBack = () => {
    router.back();
  };
  return (
    <>
      <Header />
      <div className="mx-auto flex w-full max-w-3xl justify-start px-2">
        <button
          className="focus-outline mt-8 mb-2 flex hover:opacity-75"
          onClick={handleGoBack}
        >
          <svg xmlns="http://www.w3.org/2000/svg">
            <path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"></path>
          </svg>
          <span>Go back</span>
        </button>
      </div>
      <main id="main-content" className="mx-auto w-full max-w-3xl px-4 pb-12">
        <h1 className="post-title text-3xl sm:2xl text-orange-400">
          {post.properties.Name.title[0].plain_text}
        </h1>

        <DateTime datetime={post.created_time} size="lg" className="my-2" />
        <article
          id="article"
          role="article"
          className="prose mx-auto mt-8 max-w-3xl"
        >
          {/* <Content /> */}
          <section>
            {childBlocks.map((block) => (
              <Fragment key={block.id}>{renderBlock(block)}</Fragment>
            ))}
            <Link href="/posts" className={styles.back}>
              ← Go Posts
            </Link>
          </section>
        </article>

        <ul className="tags-container">
          <Tag tag={post.properties.Tags.select.name} />
          {/* {tags.map((tag) => (
           <Tag key={tag.id} name={slugifyStr(tag)} />
         ))} */}
        </ul>
      </main>
    </>
  );
};

export default PostDetails;
