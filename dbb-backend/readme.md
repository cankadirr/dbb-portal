# dbb-backend/README.md

# DBB Backend

## Kurulum

- PostgreSQL kurulu ve çalışıyor olmalı.
- `.env` dosyasını proje kökünde oluşturun ve `DATABASE_URL` ayarını yapın.

```bash
npm install
npx prisma migrate dev --name init
npm run dev
