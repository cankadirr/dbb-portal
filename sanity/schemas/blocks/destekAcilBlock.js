// sanity/schemas/blocks/destekAcilBlock.js
export default {
  name: "destekAcilBlock",
  title: "Destek / Acil Yardım Bloku",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Başlık",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "contacts",
      title: "İletişim Bilgileri",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "type", type: "string", title: "Tip" },
            { name: "phone", type: "string", title: "Telefon" },
            { name: "description", type: "string", title: "Açıklama" },
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
