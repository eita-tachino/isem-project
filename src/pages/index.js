import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";

import { Client } from "@notionhq/client";

import Header from "@/components/Header";
import Card from "@/components/Card";
import Hr from "@/components/Hr";
import { Footer } from "@/components/Footer";
import { LinkButton } from "@/components/LinkButton";

import { getSortedPosts } from "@/utils/getSortedPosts";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ posts }) {
  const sortedPosts = getSortedPosts(posts);
  return (
    <>
      <Header />
      <header className="sm:min-h-[30vh] relative w-full flex flex-col items-center justify-center sm:py-32 py-24 px-5">
        <Image
          src="https://cdn.dribbble.com/userupload/4452239/file/original-32949935ac380f4fe8db3a45a964d41e.png?compress=1&resize=1504x1128"
          alt=""
          fill
          style={{ objectFit: "cover", objectPosition: "center center" }}
          className="opacity-20 sm:opacity-10 object-cover block"
        />
        <div
          aria-hidden="true"
          className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t dark:from-[#100d0e] dark:to-transparentDark from-white to-transparentLight"
        ></div>
        <div className="relative z-10 flex flex-col items-center justify-center max-w-screen-lg pb-8">
          <h1 className="text-2xl font-bold text-center lg:text-4xl sm:text-3xl leading-tighter sm:max-w-[23ch] tracking-tight">
            自己成長を加速し、目標達成！ ISEMがあなたの学びを強力サポート
          </h1>
          <h2 className="pt-3 pb-10 text-center text-blue-500 dark:text-amber-400 lg:text-lg sm:text-base text-sm leading-tight">
            自宅でも最高の学習環境！オンライン自習室で学びを加速し、目標達成への道を切り拓こう
          </h2>
        </div>
        <div className="pb-12 z-10 sm:pb-32">
          <div className="flex flex-col items-center justify-center">
            <Link
              className="flex items-center justify-center px-4 py-4 transition-all duration-200 ease-in-out dark:bg-transparent bg-gray-900 dark:text-white text-white rounded-md dark:hover:bg-[#F38BA3] font-medium group border"
              href="/about"
              // href="/q?access_state=free"
            >
              👉 Isemのサービス内容について
              <i
                className="transition-all duration-200 ease-in-out scale-75 gg-arrow-right group-hover:translate-x-1"
                aria-hidden="true"
              ></i>
            </Link>
          </div>
        </div>
        {/* <div className="sm:absolute bottom-10">
          <div className="flex flex-wrap items-center justify-center md:max-w-none sm:max-w-lg max-w-[450px]">
            <a
              className="px-2 py-1 scale-75 lg:px-4 md:px-2 sm:scale-90"
              href="/q?q=react"
            >
              <Image
                src="/_next/static/media/react.4ac30ea5.svg"
                alt="react"
                width={83}
                height={28}
              />
            </a>
            <a
              className="px-2 py-1 scale-75 lg:px-4 md:px-2 sm:scale-90"
              href="/q?q=next"
            >
              <Image
                src="/_next/static/media/next.0ff98041.svg"
                alt="next"
                width={69}
                height={42}
              />
            </a>
            <a
              className="px-2 py-1 scale-75 lg:px-4 md:px-2 sm:scale-90"
              href="/q?q=gatsby"
            >
              <Image
                src="/_next/static/media/gatsby.7cb4aa56.svg"
                alt="gatsby"
                width={58}
                height={19}
              />
            </a>
            <a
              className="px-2 py-1 scale-75 lg:px-4 md:px-2 sm:scale-90"
              href="/q?q=vue"
            >
              <Image
                src="/_next/static/media/vue.5dbb6cb9.svg"
                alt="vue"
                width={51}
                height={38}
              />
            </a>
            <a
              className="px-2 py-1 scale-75 lg:px-4 md:px-2 sm:scale-90"
              href="/q?q=angular"
            >
              <Image
                src="/_next/static/media/angular.87c5b7a2.svg"
                alt="angular"
                width={64}
                height={35}
              />
            </a>
            <a
              className="px-2 py-1 scale-75 lg:px-4 md:px-2 sm:scale-90"
              href="/q?q=svelte"
            >
              <Image
                src="/_next/static/media/svelte.97315260.svg"
                alt="svelte"
                width={70}
                height={17}
              />
            </a>
          </div>
        </div> */}
      </header>

      <section id="hero" className="pt-8 pb-6">
        {/* <h1 className="my-4 inline-block text-3xl font-bold sm:my-8 sm:text-6xl italic">
          Isem
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
        </a> */}

        <p className="my-2 tracking-wider leading-6">
          聴き給え！知識の仮想の広間に進みたまえ。そこでは勇敢なる学者たちが集い、数と文字の難解な領域を従順に制する。このデジタルの聖域にて、数学と英語の芸に堪えたる知識の英雄たちは、知恵を求める冒険に旅立つ。対話的な挑戦と高潔なる導きを通じて、彼らは方程式の謎を解き、言語の秘密を解き放つ。思考を研ぎ澄まし、理解を広げ、霊魂を照らし出すがよい、この高貴なる自習のオンラインの住処にて。学問の英雄たちの仲間入りをし、学術的な勝利と言語の巧妙さを求める道を切り開くがよい。
        </p>
        <p className="my-2 tracking-wider leading-6">
          詳細については{" "}
          <LinkButton
            className="hover:text-orange-500 underline underline-offset-4 decoration-dashed"
            href="/posts"
          >
            Blog
          </LinkButton>{" "}
          をご覧あれ。
        </p>
      </section>

      <Hr />
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
    filter: {
      property: "Featured",
      rich_text: {
        contains: "Featured",
      },
    },
  });
  // return posts.results;

  return {
    props: {
      posts: posts.results,
    },
  };
};
