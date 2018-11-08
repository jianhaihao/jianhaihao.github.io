# Swoft 安装

## 框架安装

> composer 安装

```bash
composer create-project swoft/swoft swoft
```

> 手动安装

```bash
git clone https://github.com/swoft-cloud/swoft
cd swoft
composer install --no-dev # 不安装 dev 依赖会更快一些
cp .env.example .env
vim .env # 根据需要调整启动参数
```
