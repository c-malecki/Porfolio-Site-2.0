const client = require("contentful").createClient({
  space: process.env.REACT_APP_SPACE_ID,
  accessToken: process.env.REACT_APP_API_KEY,
});

export const getSiteContent = () => client.getEntries().then((res) => res.items);

export const getSinglePost = (slug) =>
  client
    .getEntries({
      "fields.slug": slug,
      content_type: "blog_post",
    })
    .then((res) => res.items);
