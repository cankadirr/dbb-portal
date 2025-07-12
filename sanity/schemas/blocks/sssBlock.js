// sanity/schemas/blocks/sssBlock.js
export default {
  name: "sssBlock",
  title: "SSS Bloku",
  type: "object",
  fields: [
    {
      name: "question",
      title: "Soru",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "answer",
      title: "Cevap",
      type: "text",
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: "question",
    },
  },
};
