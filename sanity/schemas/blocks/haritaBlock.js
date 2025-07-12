// sanity/schemas/blocks/haritaBlock.js
export default {
  name: "haritaBlock",
  title: "Harita Bloku",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Başlık",
      type: "string",
      validation: (Rule) => Rule.required().max(100),
    },
    {
      name: "coordinates",
      title: "Koordinatlar",
      type: "geopoint",
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: "title",
    },
  },
};
