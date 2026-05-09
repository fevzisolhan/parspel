# TODO

## e2e smoke düzeltmesi

- [ ] `e2e/helpers/app.ts` içindeki `openModule()` fonksiyonunu `label` yerine beklenen heading text’i ile doğrulayacak şekilde güçlendir
- [ ] `Tedarikçi` için özel mapping ekle (heading’in `Tedarik` olarak gelmesi olasılığına karşı)
- [ ] `openModule()` çağrısından sonra sayfanın route/render tamamlanmasını beklemek için daha stabil assertion kullan
- [ ] `npm run test:e2e -- smoke` / ilgili playwright spec ile doğrula

