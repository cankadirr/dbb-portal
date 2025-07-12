export default {
  name: "haberBlock",
  title: "Haber Bloku",
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
      name: "image",
      title: "Görsel",
      type: "image",
      options: {
        hotspot: true,
      },
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
      type: "blockContent", // zengin metin içeriği için blok içerik türü
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: "title",
      media: "image",
      date: "date",
    },
    prepare(selection) {
      const { title, media, date } = selection;
      return {
        title: title,
        media: media,
        subtitle: date ? new Date(date).toLocaleDateString() : "",
      };
    },
  },
};
