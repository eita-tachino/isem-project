import Header from "@/components/Header";
import { LinkButton } from "@/components/LinkButton";
import { Footer } from "@/components/Footer";

const Custom404 = () => {
  return (
    <>
      <Header />

      <main
        id="main-content"
        className="mx-auto flex max-w-3xl flex-1 items-center justify-center"
      >
        <div className="not-found-wrapper">
          <h1 aria-label="404 Not Found">404</h1>
          <span aria-hidden="true">¯\_(ツ)_/¯</span>
          <p>Page Not Found</p>
          <p>このページは存在しないか、大急ぎで準備中です⛑🛠🙏</p>
          <LinkButton
            href="/"
            className="my-6 underline decoration-dashed underline-offset-8 text-lg"
          >
            Go back home
          </LinkButton>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Custom404;
