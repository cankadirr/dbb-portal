// sanity/schemas/blocks/twitterEmbedBlock.js
export default {
  name: "twitterEmbedBlock",
  title: "Twitter Embed Bloku",
  type: "object",
  fields: [
    {
      name: "tweetId",
      title: "Tweet ID",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: "tweetId",
    },
  },
};
