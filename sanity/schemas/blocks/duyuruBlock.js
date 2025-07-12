// sanity/schemas/blocks/duyuruBlock.js
export default {
  name: "duyuruBlock",
  title: "Duyuru Bloku",
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
      name: "slug",
      title: "URL Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "summary",
      title: "Özet",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.required().max(250),
    },
    {
      name: "content",
      title: "İçerik",
      type: "blockContent",
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: "title",
      date: "date",
    },
    prepare(selection) {
      const { title, date } = selection;
      return {
        title: title,
        subtitle: date ? new Date(date).toLocaleDateString() : "",
      };
    },
  },
};
