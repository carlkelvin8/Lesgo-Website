# Deployment Guide

## Vercel Deployment (Recommended)

This project is optimized for deployment on [Vercel](https://vercel.com), the platform created by the Next.js team.

### Quick Start

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Select your GitHub repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"

3. **Your site is live!**
   - Vercel will provide you with a URL like `https://lesgo-website.vercel.app`
   - Every push to main branch will auto-deploy

### Custom Domain

1. In Vercel dashboard, go to your project settings
2. Navigate to "Domains"
3. Add your custom domain (e.g., lesgo.ph)
4. Follow DNS configuration instructions
5. Domain will be active within 24 hours

### Environment Variables

1. In Vercel dashboard, go to "Settings" → "Environment Variables"
2. Add any required variables:
   ```
   NEXT_PUBLIC_APP_URL=https://your-domain.com
   ```
3. Redeploy after adding variables

### Build Settings

Vercel auto-detects Next.js and uses optimal settings:
- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- **Install Command**: `npm install`
- **Node Version**: 20.x (recommended)

### Performance Monitoring

Vercel provides built-in analytics:
- Web Vitals monitoring
- Performance insights
- Error tracking
- Deployment history

Access via Vercel dashboard → Analytics

## Alternative Deployments

### Docker Deployment

```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

Build and run:
```bash
docker build -t lesgo-website .
docker run -p 3000:3000 lesgo-website
```

### Self-Hosted (VPS/Server)

1. **Install Node.js 20+**
   ```bash
   curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
   sudo apt-get install -y nodejs
   ```

2. **Clone and setup**
   ```bash
   git clone https://github.com/carlkelvin8/Lesgo-Website.git
   cd lesgo-website
   npm install
   npm run build
   ```

3. **Run with PM2**
   ```bash
   npm install -g pm2
   pm2 start npm --name "lesgo" -- start
   pm2 save
   pm2 startup
   ```

4. **Setup Nginx reverse proxy**
   ```nginx
   server {
       listen 80;
       server_name your-domain.com;
       
       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

5. **Setup SSL with Let's Encrypt**
   ```bash
   sudo apt-get install certbot python3-certbot-nginx
   sudo certbot --nginx -d your-domain.com
   ```

## Troubleshooting

### Build Fails
- Check Node version: `node --version` (should be 18+)
- Clear cache: `rm -rf .next node_modules && npm install`
- Check for TypeScript errors: `npm run build`

### Slow Performance
- Enable image optimization in next.config.ts
- Use Vercel Analytics to identify bottlenecks
- Check bundle size: `npm run build` and review output

### Environment Variables Not Working
- Ensure variables are prefixed with `NEXT_PUBLIC_` for client-side
- Redeploy after adding variables
- Check Vercel dashboard for variable configuration

## Monitoring & Maintenance

### Health Checks
- Monitor uptime with services like UptimeRobot
- Set up error alerts in Vercel dashboard
- Review analytics weekly

### Updates
- Keep dependencies updated: `npm update`
- Test locally before deploying: `npm run dev`
- Use semantic versioning for releases

### Backups
- GitHub is your backup (all code is versioned)
- Export analytics data regularly
- Document any custom configurations

## Support

For deployment issues:
- Check [Next.js Deployment Docs](https://nextjs.org/docs/deployment)
- Review [Vercel Documentation](https://vercel.com/docs)
- Check GitHub Issues for similar problems
