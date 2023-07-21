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
  // const sortedPosts = getSortedPosts(posts);
  return (
    <div className="isolate flex min-h-screen flex-col overflow-x-hidden">
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
        <div className="pb-12 z-10 sm:pb-24">
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
      </header>

      <div className="relative">
        <div className="relative grid gap-24 sm:gap-32 md:gap-40 lg:gap-48">
          <section className="landing-section relative overflow-x-hidden pb-24 pt-14 sm:pt-20 lg:pt-32">
            <div className="flex flex-col items-center">
              <h2 className="heading-2 sm:max-w-[33ch]">
                ISEMは生徒の進捗管理をサポートするオンライン受験指導塾です。
              </h2>
              <p className="base-text px-8 text-center sm:base-text-large sm:max-w-4xl">
                オンライン自習室Isemは、目標設定やスケジュール作成、進捗管理、効率的な学習方法のアドバイスに至るまで、生徒一人ひとりの学習を丁寧にサポートします。さらに、難関大学出身の講師による指導で、受験に必要な知識と技能を身につけることができます。個別の質問や相談にも迅速に対応し、生徒の理解度を深めるお手伝いをいたします。
              </p>
              {/* <p className="my-2 tracking-wider leading-6">
            聴き給え！知識の仮想の広間に進みたまえ。そこでは勇敢なる学者たちが集い、数と文字の難解な領域を従順に制する。このデジタルの聖域にて、数学と英語の芸に堪えたる知識の英雄たちは、知恵を求める冒険に旅立つ。対話的な挑戦と高潔なる導きを通じて、彼らは方程式の謎を解き、言語の秘密を解き放つ。思考を研ぎ澄まし、理解を広げ、霊魂を照らし出すがよい、この高貴なる自習のオンラインの住処にて。学問の英雄たちの仲間入りをし、学術的な勝利と言語の巧妙さを求める道を切り開くがよい。
          </p> */}
              {/* <p className="my-2 tracking-wider leading-6">
                詳細については{" "}
                <LinkButton
                  className="hover:text-orange-500 underline underline-offset-4 decoration-dashed"
                  href="/posts"
                >
                  Blog
                </LinkButton>{" "}
                をご覧あれ。
              </p> */}
            </div>
          </section>
          <section className="landing-section">
            <h2 className="heading-2">学習効果が上がる仕組み</h2>
            <h3 className="heading-3">
              受講生一人ひとりの目標に合わせた学習管理システム
            </h3>
            <p className="base-text px-8 text-center sm:base-text-large sm:max-w-4xl">
              「オンライン授業でも、先生と直接コミュニケーションできる」
              オンラインでも、生徒一人ひとりに講師がしっかりとフォローします。質問や相談はもちろん、授業中の理解度チェックやアドバイスなど、直接的なコミュニケーションが可能です。さらに、目標達成のためのプランニングもサポートします。
            </p>
            <section className="">
              <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
                <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                  <a
                    className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
                    href="/services/digital-campaigns"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-10 w-10 text-[#F38BA3]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1"
                        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                      />
                    </svg>

                    <h2 className="mt-4 text-xl font-bold">
                      目標達成のためのプランニング
                    </h2>

                    <p className="mt-1 text-sm text-gray-300">
                      目標設定は、その時点において適切に設定し、都度アップデートすることが大切です。
                      その時点の生徒状況に合わせた、適切な目標設定をおこないます。
                    </p>
                  </a>

                  <a
                    className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
                    href="/services/digital-campaigns"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-10 w-10 text-[#F38BA3]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1"
                        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                      />
                    </svg>

                    <h2 className="mt-4 text-xl font-bold">課題テストの実施</h2>

                    <p className="mt-1 text-sm text-gray-300">
                      週に1回の課題テストにより、学習した知識や理解度を確認することができます。生徒自身がどの程度理解しているかを知ることができ、勉強の方針を立てることができます。
                    </p>
                  </a>

                  <a
                    className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
                    href="/services/digital-campaigns"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-10 w-10 text-[#F38BA3]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1"
                        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                      />
                    </svg>

                    <h2 className="mt-4 text-xl font-bold">学習状況の可視化</h2>

                    <p className="mt-1 text-sm text-gray-300">
                      1週間ごとの学習状況をグラフを使用して可視化することで、現在の進み具合が一目でわかります。これlにより、学習のモチベーションが維持しやすくなります。
                    </p>
                  </a>
                </div>
              </div>
            </section>

            <div className="mt-12">
              <h3 className="heading-3">充実の質問サービス</h3>
              <p className="base-text px-8 text-center sm:base-text-large sm:max-w-4xl">
                当自習室では、”分からない”を解決する、充実した質問サポートを提供しています。学習者の方々が、迅速かつスマートに学習を進め、困難に直面した場合でも、すぐに解決できるよう、多彩なサービスをご用意しています。
              </p>
              <section className="">
                <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
                  <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    <a
                      className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
                      href="/services/digital-campaigns"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-10 w-10 text-[#F38BA3]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1"
                          d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                        />
                      </svg>

                      <h2 className="mt-4 text-xl font-bold">
                        Zoom自習室中の質問
                      </h2>

                      <p className="mt-1 text-sm text-gray-300">
                        自習室中はzoom内に質問部屋を用意しているので、分からないことがあればすぐに
                        質問することができます。(質問は1回15分の予約制)
                      </p>
                    </a>

                    <a
                      className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
                      href="/services/digital-campaigns"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-10 w-10 text-[#F38BA3]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1"
                          d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                        />
                      </svg>

                      <h2 className="mt-4 text-xl font-bold">
                        チャットでも質問可能
                      </h2>

                      <p className="mt-1 text-sm text-gray-300">
                        自習室が休みの時や、時間外の時はチャットでの質問も受け付けています。
                        回答は、数十分〜遅くとも24時間以内に回答するように努めています。
                      </p>
                    </a>

                    <a
                      className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
                      href="/services/digital-campaigns"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-10 w-10 text-[#F38BA3]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1"
                          d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                        />
                      </svg>

                      <h2 className="mt-4 text-xl font-bold">
                        動画・記事によるサポート
                      </h2>

                      <p className="mt-1 text-sm text-gray-300">
                        多くの生徒がつまづく問題はサイト内で動画または記事にて回答します。
                      </p>
                    </a>
                  </div>
                </div>
              </section>
            </div>
          </section>
          <section className="landing-section">
            <h2 className="heading-2">
              学習効果だけでなく、自己管理能力も向上
            </h2>
            <p className="base-text px-8 text-center sm:base-text-large sm:max-w-4xl">
              当オンライン自習室は、自習室としての役割だけでなく、生徒たちが自己管理能力や時間管理能力、そして集中力を身につけることをサポートしています。
            </p>
            <div className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-12">
              <div className="grid max-w-2xl mx-auto">
                <div className="flex">
                  <div className="flex flex-col pb-6 sm:items-center sm:flex-row sm:pb-0">
                    <div className="sm:mr-5">
                      <div className="flex items-center justify-center w-16 h-16 my-3 rounded-full border sm:w-24 sm:h-24">
                        <svg
                          className="w-12 h-12 text-[#F38BA3] sm:w-16 sm:h-16"
                          stroke="currentColor"
                          viewBox="0 0 52 52"
                        >
                          <polygon
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            fill="none"
                            points="29 13 14 29 25 29 23 39 38 23 27 23"
                          />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <p className="text-md font-semibold sm:text-base">
                        その日の目標を設定し、講師と共有！
                      </p>
                      <p className="text-sm text-gray-300">
                        自習室の最初に、生徒自身が目標を設定し、講師と共有します。達成に向けて努力することで、自信や達成感が得られます。また、目標達成への意欲が高まり、学習意欲やモチベーションが向上することが期待できます
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex flex-col pb-6 sm:items-center sm:flex-row sm:pb-0">
                    <div className="sm:mr-5">
                      <div className="flex items-center justify-center w-16 h-16 my-3 rounded-full border sm:w-24 sm:h-24">
                        <svg
                          className="w-12 h-12 text-[#7A5EA6] sm:w-16 sm:h-16"
                          stroke="currentColor"
                          viewBox="0 0 52 52"
                        >
                          <polygon
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            fill="none"
                            points="29 13 14 29 25 29 23 39 38 23 27 23"
                          />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <p className="text-md font-semibold sm:text-base">
                        その日におこなった内容を講師に報告！
                      </p>
                      <p className="text-sm text-gray-300">
                        自習室終わりには、その日おこなった内容を報告します。振り返ることで、良かった点、弱点などを確認し、次の目標達成に向けて、学習方針を立てやすくすることができます。
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex flex-col pb-6 sm:items-center sm:flex-row sm:pb-0">
                    <div className="sm:mr-5">
                      <div className="flex items-center justify-center w-16 h-16 my-3 rounded-full border sm:w-24 sm:h-24">
                        <svg
                          className="w-12 h-12 text-[#11B5E5] sm:w-16 sm:h-16"
                          stroke="currentColor"
                          viewBox="0 0 52 52"
                        >
                          <polygon
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            fill="none"
                            points="29 13 14 29 25 29 23 39 38 23 27 23"
                          />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <p className="text-md font-semibold sm:text-base">
                        その週に達成したことをグラフで確認！
                      </p>
                      <p className="text-sm text-gray-300">
                        その週に取り組んだ問題数などを示したグラフを講師が作成し、生徒と共有します。これにより、課題や改善点を特定することができます。これによって、自己の弱点を克服するための具体的なアクションプランを立てることができます。
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}

// export const getStaticProps = async () => {
//   const notion = new Client({
//     auth: process.env.NOTION_SECRET,
//   });

//   const posts = await notion.databases.query({
//     database_id: process.env.NOTION_DATABASE_ID,
//     filter: {
//       property: "Featured",
//       rich_text: {
//         contains: "Featured",
//       },
//     },
//   });
//   // return posts.results;

//   return {
//     props: {
//       posts: posts.results,
//     },
//   };
// };
