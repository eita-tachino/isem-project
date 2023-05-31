import Hr from "./Hr";

export const Footer = ({ noMarginTop = false }) => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className={`${noMarginTop ? "" : "mt-auto"}, w-full`}>
      <Hr noPadding />
      <div className="footer-wrapper flex flex-col items-center justify-between py-6 sm:flex-row-reverse sm:py-4">
        {/* <Socials centered /> */}
        <div className="copyright-wrapper my-2 flex flex-col items-center whitespace-nowrap sm:flex-row">
          <span>Copyright &#169; {currentYear}</span>
          <span className="separator hidden sm:inline;">&nbsp;|&nbsp;</span>
          <span>All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
};
