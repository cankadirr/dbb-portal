// src/utils/api.ts

export async function getNews() {
  // API çağrısı örneği, gerçekte fetch veya axios ile yapılacak
  return [
    { title: "Büyükşehir'den yeni yol projesi", date: "2025-07-11", slug: "yol-projesi" },
    { title: "Yaz spor okulları açıldı", date: "2025-07-10", slug: "yaz-spor-okullari" },
  ];
}

export async function getDuyurular() {
  return [
    { title: "Su kesintisi bildirimi", date: "2025-07-09", slug: "su-kesintisi" },
    { title: "Elektrik bakım çalışması", date: "2025-07-08", slug: "elektrik-bakim" },
  ];
}

export async function getEvents() {
  return [
    { title: "Kültür Festivali", date: "2025-08-15", location: "Merkez Park", slug: "kultur-festivali" },
    { title: "Spor Turnuvası", date: "2025-09-01", location: "Stadyum", slug: "spor-turnuvasi" },
  ];
}

// Diğer API fonksiyonları benzer şekilde...

