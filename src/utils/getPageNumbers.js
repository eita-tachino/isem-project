import { SITE } from "../../config";

export const getPageNumbers = (numberOfPosts) => {
  const numberOfPages = numberOfPosts / Number(SITE.postPerPage);

  let pageNumbers = [];

  for (let i = 1; i <= Math.ceil(numberOfPages); i++) {
    pageNumbers = [...pageNumbers, i];
  }

  return pageNumbers;
};
