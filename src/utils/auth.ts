// src/utils/auth.ts

export async function login(username: string, password: string): Promise<boolean> {
  // Basit örnek, gerçek API çağrısı yapılacak
  if (username === "admin" && password === "123456") {
    return true;
  }
  return false;
}

export function logout() {
  // Oturumu kapatma işlemleri
  console.log("Kullanıcı çıkış yaptı.");
}
