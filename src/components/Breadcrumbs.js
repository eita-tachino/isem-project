import { useRouter } from "next/router";
import Link from "next/link";

const Breadcrumbs = () => {
  const router = useRouter();
  const currentUrlPath = router.asPath.replace(/\/+$/, "");

  // Get url array from path
  // eg: /tags/tailwindcss => ['tags', 'tailwindcss']
  const breadcrumbList = currentUrlPath
    .split("/")
    .slice(1)
    .map((breadcrumb) => decodeURIComponent(breadcrumb));

  // if breadcrumb is Home > Posts > 1 <etc>
  // replace Posts with Posts (page number)
  breadcrumbList[0] === "posts" &&
    breadcrumbList.splice(0, 2, `Posts (page ${breadcrumbList[1] || 1})`);

  return (
    <nav className="breadcrumb" aria-label="breadcrumb">
      <ul className="mt-auto mb-8 flex justify-center">
        <li className="inline">
          <Link href="/" className="capitalize opacity-70">
            Home
          </Link>
          <span aria-hidden="true">&#62;</span>
        </li>
        {breadcrumbList.map((breadcrumb, index) =>
          index + 1 === breadcrumbList.length ? (
            <li key={index} className="inline">
              <span
                className={`${index > 0 ? "lowercase" : "capitalize"}`}
                aria-current="page"
              >
                {/* make the last part lowercase in Home > Tags > some-tag */}
                {breadcrumb}
              </span>
            </li>
          ) : (
            <li key={index} className="inline">
              <a href={`/${breadcrumb}`}>{breadcrumb}</a>
              <span aria-hidden="true">&#62;</span>
            </li>
          )
        )}
      </ul>
    </nav>
  );
};

export default Breadcrumbs;
