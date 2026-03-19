# Deploying Keerthi Builders to DigitalOcean

## Option A — DigitalOcean App Platform (Easiest, ~$5/mo)

1. Push this repo to GitHub
2. Go to https://cloud.digitalocean.com/apps → **Create App**
3. Connect GitHub → select `keerthiwebsite` repo → select `main` branch
4. Build settings:
   - **Build command:** `npm run build`
   - **Output directory:** `dist`
5. Click **Deploy** — DigitalOcean auto-deploys on every push to `main`

> SPA routing is handled automatically by App Platform. The `vercel.json` file is not used here.

---

## Option B — DigitalOcean Droplet + Nginx (Full control)

### 1. Create a Droplet
- Ubuntu 22.04 LTS, Basic plan ($6/mo minimum)
- Add your SSH key during creation

### 2. Install Node, Nginx, Certbot
```bash
sudo apt update && sudo apt upgrade -y
sudo apt install nginx certbot python3-certbot-nginx -y
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs
```

### 3. Clone & build the site
```bash
sudo mkdir -p /var/www/keerthibuilders
cd /var/www/keerthibuilders
git clone https://github.com/YOUR_USERNAME/keerthiwebsite.git .
npm install
npm run build
```

### 4. Set up Nginx
```bash
sudo cp /var/www/keerthibuilders/nginx.conf /etc/nginx/sites-available/keerthibuilders
sudo ln -s /etc/nginx/sites-available/keerthibuilders /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

### 5. SSL certificate (free via Let's Encrypt)
```bash
sudo certbot --nginx -d keerthibuilders.com -d www.keerthibuilders.com
```

### 6. Auto-deploy on GitHub push (optional)
Set up a GitHub Action — create `.github/workflows/deploy.yml`:
```yaml
name: Deploy to DigitalOcean
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 20
      - run: npm install && npm run build
      - name: Deploy via SSH
        uses: appleboy/ssh-action@v1
        with:
          host: ${{ secrets.DO_HOST }}
          username: root
          key: ${{ secrets.DO_SSH_KEY }}
          script: |
            cd /var/www/keerthibuilders
            git pull origin main
            npm install
            npm run build
            sudo systemctl reload nginx
```
Add `DO_HOST` (your Droplet IP) and `DO_SSH_KEY` (your private key) to GitHub repo Secrets.

---

## DNS Setup (Point domain to DigitalOcean)
In your domain registrar (GoDaddy / Namecheap / Hostinger):
- **A record:** `@` → your Droplet IP
- **A record:** `www` → your Droplet IP
- **CNAME:** `www` → `keerthibuilders.com` (alternative)

DNS propagates in 15 min – 48 hours.
