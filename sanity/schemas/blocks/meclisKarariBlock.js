// sanity/schemas/blocks/meclisKarariBlock.js
export default {
  name: "meclisKarariBlock",
  title: "Meclis Kararı Bloku",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Başlık",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "items",
      title: "Kararlar",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "title", type: "string", title: "Başlık" },
            { name: "date", type: "datetime", title: "Tarih" },
            { name: "documentUrl", type: "url", title: "Belge URL" },
          ],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "title",
    },
  },
};
