// sanity/schemas/blocks/anketOylamaBlock.js
export default {
  name: "anketOylamaBlock",
  title: "Anket & Oylama Bloku",
  type: "object",
  fields: [
    {
      name: "question",
      title: "Soru",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "options",
      title: "Seçenekler",
      type: "array",
      of: [{ type: "string" }],
      validation: (Rule) => Rule.required().min(1),
    },
  ],
  preview: {
    select: {
      title: "question",
    },
  },
};
