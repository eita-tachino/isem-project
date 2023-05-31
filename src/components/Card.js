import Link from "next/link";
import DateTime from "./DateTime";

const Card = ({ href, secHeading, post }) => {
  const MAX_LENGTH = 80;

  function truncateText(text, maxLength) {
    if (text?.length <= maxLength) {
      return text;
    } else {
      const truncatedText = text?.slice(0, maxLength).trim();
      return truncatedText + "..."; // 「...続きを読む」を追加
    }
  }

  const truncatedContent = truncateText(
    post.properties.Description.rich_text[0]?.plain_text,
    MAX_LENGTH
  );
  return (
    <li className="my-6">
      <a
        href={href}
        className="inline-block text-lg font-medium text-[#FCBA28] decoration-dashed underline-offset-4 focus-visible:no-underline focus-visible:underline-offset-0"
      >
        {secHeading ? (
          <h2 className="text-lg font-medium decoration-dashed hover:underline">
            {post.properties.Name.title[0].plain_text}
          </h2>
        ) : (
          <h3 className="text-lg font-medium decoration-dashed hover:underline">
            {post.properties.Name.title[0].plain_text}
          </h3>
        )}
      </a>
      <DateTime datetime={post.created_time} />
      <p>{truncatedContent}</p>
      {/* {desc.length > MAX_LENGTH && <Link href="/">...記事を読む</Link>} */}
    </li>
  );
};

export default Card;
