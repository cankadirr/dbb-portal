// sanity/schemas/blocks/kursBlock.js
export default {
  name: "kursBlock",
  title: "Kurs Bloku",
  type: "object",
  fields: [
    {
      name: "name",
      title: "Kurs Adı",
      type: "string",
      validation: (Rule) => Rule.required().max(100),
    },
    {
      name: "description",
      title: "Açıklama",
      type: "text",
    },
    {
      name: "date",
      title: "Tarih",
      type: "datetime",
    },
  ],
  preview: {
    select: {
      name: "name",
    },
  },
};
