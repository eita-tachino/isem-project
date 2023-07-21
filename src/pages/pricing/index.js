import { Fragment } from "react";
import Header from "@/components/Header";
import { Footer } from "@/components/Footer";

const Pricing = () => {
  return (
    <Fragment>
      <Header />
      <main className="isolate flex flex-col min-h-screen overflow-x-hidden ">
        <div className="relative">
          <div className="relative grid gap-12 sm:gap-16 md:gap-20 lg:gap-24">
            <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
              <h2 className="heading-2">目的にあわせて選べる</h2>
              <p className="base-text px-8 text-center sm:base-text-large sm:max-w-4xl">
                コースはスターターとフルサポートの2種類。みなさんの目的に合わせて、お好きなコースをお選びいただけます。どちらのコースも、充実したカリキュラムで、あなたのスキルアップをサポートします。
              </p>
              <p className="base-text px-8 text-center sm:base-text-large sm:max-w-4xl">
                さらに今年度は、フルサポートプランが20%割引というチャンスです！お得なこの機会をお見逃しなく！ぜひこの機会を活用してださい！
              </p>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-center md:gap-8 mt-8 md:mt-12 lg:mt-16">
                <div className="rounded-2xl border border-indigo-600 p-6 shadow-sm ring-1 ring-indigo-600 sm:order-last sm:px-8 lg:p-12">
                  <div className="text-center">
                    <h2 className="text-lg font-medium ">
                      フルサポートプラン
                      <span className="sr-only">Plan</span>
                    </h2>

                    <p className="mt-2 sm:mt-4">
                      <strong className="text-3xl font-bold  sm:text-4xl">
                        15,000¥
                      </strong>

                      <span className="text-sm font-medium ">/month</span>
                    </p>
                  </div>

                  <ul className="mt-6 space-y-2">
                    <li className="flex items-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-5 w-5 text-indigo-700"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>

                      <span className=""> 週4回の自習室 </span>
                    </li>

                    <li className="flex items-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-5 w-5 text-indigo-700"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>

                      <span className=""> 週1回の課題テスト </span>
                    </li>

                    <li className="flex items-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-5 w-5 text-indigo-700"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>

                      <span className=""> zoom自習室中の質問 </span>
                    </li>

                    <li className="flex items-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-5 w-5 text-indigo-700"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>

                      <span className=""> チャットでの質問 </span>
                    </li>

                    <li className="flex items-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-5 w-5 text-indigo-700"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>

                      <span className=""> 学習プランの作成 </span>
                    </li>
                  </ul>

                  <a
                    href="#"
                    className="mt-8 block rounded-full border border-indigo-600 bg-indigo-600 px-12 py-3 text-center text-sm font-medium text-white hover:bg-indigo-700 hover:ring-1 hover:ring-indigo-700 focus:outline-none focus:ring active:text-indigo-500"
                  >
                    申し込む
                  </a>
                </div>

                <div className="rounded-2xl border border-gray-200 p-6 shadow-sm sm:px-8 lg:p-12">
                  <div className="text-center">
                    <h2 className="text-lg font-medium ">
                      スタータープラン
                      <span className="sr-only">Plan</span>
                    </h2>

                    <p className="mt-2 sm:mt-4">
                      <strong className="text-3xl font-bold sm:text-4xl">
                        5,000¥
                      </strong>

                      <span className="text-sm font-medium ">/month</span>
                    </p>
                  </div>

                  <ul className="mt-6 space-y-2">
                    <li className="flex items-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-5 w-5 text-indigo-700"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>

                      <span className=""> 週4回のzoom自習室 </span>
                    </li>

                    <li className="flex items-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-5 w-5 text-indigo-700"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>

                      <span className=""> 週1回の課題テスト </span>
                    </li>
                  </ul>

                  <a
                    href="#"
                    className="mt-8 block rounded-full border border-indigo-600 bg-white px-12 py-3 text-center text-sm font-medium text-indigo-600 hover:ring-1 hover:ring-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
                  >
                    申し込む
                  </a>
                </div>
              </div>
            </div>
            <section>
              <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                  <div>
                    <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider uppercase rounded-full bg-teal-accent-400">
                      Campaign!
                    </p>
                  </div>
                  <h2 className="heading-2">
                    {/* <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight sm:text-4xl md:mx-auto"> */}
                    <span className="relative inline-block">
                      <svg
                        viewBox="0 0 52 24"
                        fill="currentColor"
                        className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                      >
                        <defs>
                          <pattern
                            id="bfcc89c7-3b4a-491a-bc7e-53e26502ff69"
                            x="0"
                            y="0"
                            width=".135"
                            height=".30"
                          >
                            <circle cx="1" cy="1" r=".7" />
                          </pattern>
                        </defs>
                        <rect
                          fill="url(#bfcc89c7-3b4a-491a-bc7e-53e26502ff69)"
                          width="52"
                          height="24"
                        />
                      </svg>
                      <span className="relative">🎉🎉</span>
                    </span>{" "}
                    お得な3つの特典をGetするChance!
                  </h2>
                  <p className="text-base md:text-lg">
                    今なら、お得な3つの特典が付いてきます！この機会を活用してください
                  </p>
                </div>
                <div className="grid gap-8 row-gap-8 lg:grid-cols-3">
                  <div className="sm:text-center">
                    <div className="flex items-center justify-center w-24 h-24 mb-4 text-5xl font-extrabold rounded-full text-deep-purple-accent-400 border sm:mx-auto">
                      1
                    </div>
                    <h6 className="mb-2 font-semibold leading-5">
                      お友達紹介で20%OFF!
                    </h6>
                    <p className="max-w-md mb-3 text-sm sm:mx-auto">
                      お友達紹介1人につき1ヶ月間授業料が20%OFF
                      ※同月に複数人の紹介していただいた場合、紹介人数分、毎月の月額料金から割引いたします。
                    </p>
                    <p className="max-w-md mb-3 text-sm sm:mx-auto">
                      例: 同月に2人紹介した場合、翌月、翌々月がそれぞれ20%OFF
                    </p>
                  </div>
                  <div className="sm:text-center">
                    <div className="flex items-center justify-center w-24 h-24 mb-4 text-5xl font-extrabold rounded-full text-deep-purple-accent-400 border sm:mx-auto">
                      2
                    </div>
                    <h6 className="mb-2 font-semibold leading-5">
                      今年度限定割引
                    </h6>
                    <p className="max-w-md mb-3 text-sm sm:mx-auto">
                      今年度限定でフルサポートコースが、通常、19,000円を15,000円で提供!
                      ぜひこの機会をご活用ください。
                    </p>
                  </div>
                  <div className="sm:text-center">
                    <div className="flex items-center justify-center w-24 h-24 mb-4 text-5xl font-extrabold rounded-full text-deep-purple-accent-400 border sm:mx-auto">
                      3
                    </div>
                    <h6 className="mb-2 font-semibold leading-5">
                      1週間トライアル
                    </h6>
                    <p className="max-w-md mb-3 text-sm sm:mx-auto">
                      初めての受講の場合、1週間の無料トライアルを提供しています。このトライアル期間中に、本当に自分に合うかどうかを確認することができます。
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </Fragment>
  );
};

export default Pricing;
