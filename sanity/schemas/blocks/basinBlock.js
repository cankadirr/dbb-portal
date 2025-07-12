// sanity/schemas/blocks/basinBlock.js
export default {
  name: "basinBlock",
  title: "Basın Bloku",
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
      title: "Duyurular",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "title", type: "string", title: "Başlık" },
            { name: "date", type: "datetime", title: "Tarih" },
            { name: "url", type: "url", title: "Link" },
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
