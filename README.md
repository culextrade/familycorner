# Family Corner - Hukum Keluarga Islam

Website edukasi hukum keluarga Islam oleh **Desi Pusparini, S.H.**

## 🚀 Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS v4
- **Language:** TypeScript
- **Email:** EmailJS
- **Deployment:** Vercel

## 📦 Installation

```bash
# Install dependencies
npm install

# Copy environment file
cp .env.local.example .env.local

# Edit .env.local with your EmailJS credentials
```

## 🔑 EmailJS Setup

1. Create account at [emailjs.com](https://www.emailjs.com/)
2. Add email service (Gmail, Outlook, etc.)
3. Create email template with these variables:
   - `from_name`
   - `from_email`
   - `subject`
   - `message`
   - `to_name`
4. Copy your Service ID, Template ID, and Public Key to `.env.local`

## 🛠️ Development

```bash
# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Type checking
npm run type-check

# Linting
npm run lint
```

## 📁 Project Structure

```
familycorner/
├── app/                    # Next.js App Router pages
│   ├── blog/              # Blog pages
│   ├── faq/               # FAQ page
│   ├── profil/            # Profile page
│   ├── kontak/            # Contact page
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── ui/                # UI primitives (Button, Card, Section)
│   └── layout/            # Layout components (Header, Footer)
├── data/                  # Static data
│   ├── blog-posts.ts      # Blog content
│   └── faq-data.ts        # FAQ content
├── lib/                   # Utilities
│   ├── utils.ts           # Helper functions
│   └── email.ts           # EmailJS integration
└── public/                # Static assets
    └── images/            # Images
```

## 🎨 Design System

- **Colors:** Emerald (Islamic), Rose (Feminine), Cream (Modern)
- **Fonts:** Playfair Display (headings), Inter (body)
- **Patterns:** Subtle Islamic geometric patterns

## 📝 Content Management

Blog posts and FAQ are managed in TypeScript files:
- `data/blog-posts.ts` - Add/edit blog articles
- `data/faq-data.ts` - Add/edit FAQ items

## 🚀 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import repository in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

### Manual Build

```bash
npm run build
# Output will be in 'out' folder (static export)
```

## 📞 WhatsApp Integration

Update WhatsApp number in:
- `components/layout/Footer.tsx`
- `app/page.tsx`
- `app/kontak/page.tsx`

Replace `62895394408100` with actual number (format: country code + number, no +).

## 📄 License

© 2026 Desi Pusparini, S.H. All rights reserved.
