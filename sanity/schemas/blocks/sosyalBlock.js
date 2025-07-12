// sanity/schemas/blocks/sosyalBlock.js
export default {
  name: "sosyalBlock",
  title: "Sosyal Medya Bloku",
  type: "object",
  fields: [
    {
      name: "platform",
      title: "Platform",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "url",
      title: "URL",
      type: "url",
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: "platform",
      subtitle: "url",
    },
  },
};
