# KhanhStore — Mini E-commerce Web UI

Bài tập cá nhân **Web UI Programming** — React + TypeScript + Vite.

## Công nghệ
- HTML5 semantic
- CSS3: Flexbox, Grid, Media Queries, transitions
- React + TypeScript
- React Router
- LocalStorage
- Lucide React icons

## Chức năng
- Home, Products, Product Detail, Cart, Checkout, About
- Dynamic route `/product/:id`
- Tìm kiếm, lọc danh mục, sắp xếp giá
- Thêm/xóa/cập nhật giỏ hàng
- Lưu cart và dark/light mode bằng LocalStorage
- Form checkout + validation
- Responsive mobile/tablet/desktop
- Animation/hover states
- Semantic HTML, labels, alt text

## Chạy project
```bash
npm install
npm run dev
```

Build production:
```bash
npm run build
npm run preview
```

## GitHub
```bash
git init
git add .
git commit -m "Initial Web UI Programming project"
git branch -M main
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

## Deploy
Có thể import repository vào Vercel/Netlify. Đây là SPA nên nếu host yêu cầu rewrite, cấu hình fallback về `index.html`.

## Lưu ý
Ảnh sản phẩm dùng URL ảnh công khai từ Unsplash để minh họa giao diện. Thanh toán là **giả lập**, không xử lý giao dịch thật.
