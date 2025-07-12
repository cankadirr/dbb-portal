// sanity/schemas/blocks/ihaleBlock.js
export default {
  name: "ihaleBlock",
  title: "İhale Bloku",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Başlık",
      type: "string",
      validation: (Rule) => Rule.required().max(100),
    },
    {
      name: "date",
      title: "Tarih",
      type: "datetime",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "status",
      title: "Durum",
      type: "string",
    },
    {
      name: "slug",
      title: "URL Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: "title",
      date: "date",
      status: "status",
    },
    prepare(selection) {
      const { title, date, status } = selection;
      return {
        title: title,
        subtitle: date ? new Date(date).toLocaleDateString() : "",
        description: status,
      };
    },
  },
};
