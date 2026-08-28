# GitHub Pages orqali online qilish

## 1-qadam: Git o`rnatilganini tekshiring
```
git --version
```
Agar yo`q bo`lsa: https://git-scm.com/download/win dan yuklab oling.

## 2-qadam: GitHub'da yangi repository yarating
1. https://github.com ga kiring (ZiyodullaOtabaev account)
2. "+" tugmasini bosing → "New repository"
3. Repository nomi: **portfolio**
4. "Public" tanlab, "Create repository" bosing

## 3-qadam: Portfolio papkasida terminal oching va buyruqlarni bajaring
```bash
git init
git add .
git commit -m "Initial portfolio commit"
git branch -M main
git remote add origin https://github.com/ZiyodullaOtabaev/portfolio.git
git push -u origin main
```

## 4-qadam: GitHub Pages yoqing
1. Repository sahifasida "Settings" bosing
2. Chap menuda "Pages" ga kiring
3. "Source" bo`limida: Branch = **main**, folder = **/ (root)**
4. "Save" bosing

## Natija
Bir necha daqiqadan so`ng saytingiz bu manzilda ochiladi:
**https://ziyodullaotabaev.github.io/portfolio**

---

Biror muammo bo`lsa, men yordam beraman!
