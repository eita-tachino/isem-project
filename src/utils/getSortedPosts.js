export const getSortedPosts = (posts) => {
  return posts
    .filter((post) => post)
    .sort(
      (a, b) =>
        Math.floor(new Date(b.created_time).getTime() / 1000) -
        Math.floor(new Date(a.created_time).getTime() / 1000)
    );
};
