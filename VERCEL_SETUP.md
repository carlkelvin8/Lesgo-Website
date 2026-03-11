# Vercel Deployment Setup Guide

Your LeSgo website is now ready for Vercel deployment! Follow these steps to deploy.

## ✅ Pre-Deployment Checklist

- ✅ Code pushed to GitHub: https://github.com/carlkelvin8/Lesgo-Website
- ✅ Next.js optimized configuration
- ✅ Environment variables configured
- ✅ Security headers added
- ✅ Image optimization enabled
- ✅ React Compiler enabled for performance
- ✅ TypeScript strict mode enabled
- ✅ All dependencies up to date

## 🚀 Deploy to Vercel in 3 Steps

### Step 1: Go to Vercel
Visit [vercel.com](https://vercel.com) and sign in with your GitHub account.

### Step 2: Create New Project
1. Click "New Project"
2. Select "Lesgo-Website" repository
3. Vercel will auto-detect Next.js settings
4. Click "Deploy"

### Step 3: Wait for Deployment
- Vercel will build and deploy your site
- You'll get a URL like: `https://lesgo-website.vercel.app`
- Every push to `main` branch auto-deploys

## 🌐 Custom Domain Setup

1. In Vercel dashboard → Your Project → Settings → Domains
2. Click "Add Domain"
3. Enter your domain (e.g., lesgo.ph)
4. Follow DNS configuration:
   - Add CNAME record pointing to Vercel
   - Or update nameservers to Vercel's
5. Domain active within 24 hours

## 📊 Monitoring & Analytics

Vercel provides built-in monitoring:
- **Web Vitals**: Performance metrics
- **Error Tracking**: Automatic error reporting
- **Deployment History**: Track all deployments
- **Analytics**: User traffic and behavior

Access via: Dashboard → Your Project → Analytics

## 🔧 Environment Variables

If you need environment variables:

1. Go to Project Settings → Environment Variables
2. Add variables:
   ```
   NEXT_PUBLIC_APP_URL=https://your-domain.com
   ```
3. Redeploy after adding

## 🔐 Security Features Enabled

- X-Content-Type-Options: nosniff
- X-Frame-Options: SAMEORIGIN
- X-XSS-Protection: 1; mode=block
- Referrer-Policy: strict-origin-when-cross-origin
- HTTPS enforced
- Automatic SSL certificates

## 📈 Performance Optimizations

- React Compiler enabled
- Image optimization with WebP/AVIF
- Code splitting and lazy loading
- CSS minification
- JavaScript minification
- Automatic caching headers

## 🐛 Troubleshooting

### Build Fails
```bash
# Check locally first
npm run build

# Clear cache and rebuild
rm -rf .next
npm run build
```

### Slow Performance
- Check Vercel Analytics for bottlenecks
- Review bundle size in build logs
- Optimize images in `/public`

### Environment Variables Not Working
- Ensure `NEXT_PUBLIC_` prefix for client-side vars
- Redeploy after adding variables
- Check Vercel dashboard for correct values

## 📝 Deployment Checklist

Before each deployment:
- [ ] Test locally: `npm run dev`
- [ ] Build locally: `npm run build`
- [ ] Run linter: `npm run lint`
- [ ] Commit changes: `git commit -m "..."`
- [ ] Push to main: `git push origin main`
- [ ] Monitor deployment in Vercel dashboard

## 🔄 Continuous Deployment

Every push to `main` branch automatically:
1. Triggers a new build
2. Runs tests (if configured)
3. Deploys to production
4. Updates your live site

## 📞 Support

- Vercel Docs: https://vercel.com/docs
- Next.js Docs: https://nextjs.org/docs
- GitHub Issues: https://github.com/carlkelvin8/Lesgo-Website/issues

## 🎉 You're All Set!

Your LeSgo website is production-ready and optimized for Vercel. Deploy now and start serving your customers!

---

**Repository**: https://github.com/carlkelvin8/Lesgo-Website  
**Live Site**: https://lesgo-website.vercel.app (after deployment)
