// sanity/schemas/blocks/insanKaynaklariBlock.js
export default {
  name: "insanKaynaklariBlock",
  title: "İnsan Kaynakları Bloku",
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
      title: "İlanlar",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "position", type: "string", title: "Pozisyon" },
            { name: "deadline", type: "datetime", title: "Son Başvuru" },
            { name: "description", type: "text", title: "Açıklama" },
            { name: "applyUrl", type: "url", title: "Başvuru URL" },
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
