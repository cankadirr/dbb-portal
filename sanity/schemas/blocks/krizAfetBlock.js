// sanity/schemas/blocks/krizAfetBlock.js
export default {
  name: "krizAfetBlock",
  title: "Kriz & Afet Bloku",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Başlık",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "alertMessage",
      title: "Uyarı Mesajı",
      type: "text",
    },
  ],
  preview: {
    select: {
      title: "title",
    },
  },
};
