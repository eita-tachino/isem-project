export const getPostsByTag = (posts, tag) =>
  posts.filter(
    (post) => post.properties.Tags.select.name.toLowerCase() === tag
  );
