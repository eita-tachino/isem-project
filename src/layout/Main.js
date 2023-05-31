import Breadcrumbs from "@/components/Breadcrumbs";

const Main = ({ pageTitle, pageDesc, children }) => {
  return (
    <>
      <Breadcrumbs />
      <main id="main-content" className="mx-auto w-full max-w-3xl px-4 pb-12">
        <h1 className="text-2xl font-semibold sm:text-3xl">{pageTitle}</h1>
        <p className="mt-2 mb-6 italic">{pageDesc}</p>
        {children}
        <slot />
      </main>
    </>
  );
};

export default Main;
