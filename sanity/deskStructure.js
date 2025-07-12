// sanity/deskStructure.js
import S from "@sanity/desk-tool/structure-builder";

export default () =>
  S.list()
    .title("İçerik")
    .items([
      S.listItem()
        .title("Sayfalar")
        .schemaType("page")
        .child(S.documentTypeList("page").title("Sayfalar")),
      S.listItem()
        .title("Site Ayarları")
        .schemaType("siteConfig")
        .child(S.document().schemaType("siteConfig").documentId("siteConfig")),
      // Diğer içerik listeleri
    ]);
