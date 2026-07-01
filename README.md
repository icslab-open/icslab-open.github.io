# Intelligent Computing Systems Laboratory Official Site

Source code for the Intelligent Computing Systems Laboratory official website, built with VitePress.

- 🌐 **Live Site**: [https://www.nise.ac.cn](https://www.nise.ac.cn)
- 🗃️ **GitHub Repo**: [https://github.com/icslab-open/icslab-open.github.io](https://github.com/icslab-open/icslab-open.github.io)

---

## 🧩 Project Structure

```
/
├─ .github/
│   └─ workflows/deploy.yml       # GitHub Actions for build + deploy
├─ .vitepress/
│   ├─ config/
│   │   ├─ index.ts              # main i18n entry, merges shared, en, zh configs
│   │   ├─ shared.ts             # shared VitePress config, meta, plugins, theme base
│   │   ├─ en.ts                 # English config (nav, footer, desc, etc.)
│   │   └─ zh.ts                 # Chinese config (导航、页脚、本地化等)
│   └─ theme/
│       ├─ index.ts              # custom theme extension
│       └─ styles.css            # theme styles
├─ en/                           # English content (home, people, publication...)
│   └─ *.md
├─ zh/                           # Chinese content（主页、人员、发表...）
│   └─ *.md
├─ public/                       # static assets
├─ CNAME                         # custom domain setup
├─ LICENSE
└─ package.json
```

---

## 🌐 i18n / Localization

Multilingual support is set up via VitePress locales and file-based routing.

- Language configs: `.vitepress/config/en.ts` and `.vitepress/config/zh.ts`
- Content directories: `/en` for English, `/zh` for Chinese
- Locale config is handled in `.vitepress/config/index.ts` as follows:

```ts
import { defineConfig } from 'vitepress'
import { shared } from './shared'
import { en } from './en'
import { zh } from './zh'

export default defineConfig({
  ...shared,
  locales: {
    root: { label: 'English', ...en },
    zh: { label: '简体中文', ...zh }
  }
})
```

- Navigation, footer, sidebar, and UI strings are localized and configured in respective language files.

---

## ⚙️ Build & Run

This repository uses [Bun](https://bun.sh) for dependency management and all development/build commands.

```bash
git clone https://github.com/icslab-open/icslab-open.github.io.git
cd icslab-open.github.io
bun install
```

Run dev server:

```bash
bun run dev

# open http://localhost:3000/en/ or /zh/
```

Build production:

```bash
bun run build
```

---

## 🚀 Deploy via GitHub Pages

Automated deployment is configured via [GitHub Actions](.github/workflows/deploy.yml) and uses Bun for dependency installation and build.

Deployment steps:

1. Triggered on push to `main` or manually from the Actions tab.
2. Install dependencies (`bun install --frozen-lockfile`)
3. Build the site with VitePress (`bun run build`)
4. Upload and deploy `.vitepress/dist` to GitHub Pages

When dependencies change, update and commit both `package.json` and `bun.lock`.

---

## 🛠️ Theme, Plugins, and Features

- Custom theme under `.vitepress/theme/` (logo, colors, CSS, etc)
- Icon support via `vitepress-plugin-group-icons`
- English and Chinese UI/UX, including nav, outline, code copy button text, etc.
- Supports math typesetting, code transformers, and improved code copy UX
- Favicon, manifest, and mobile support in head meta

---

## ✍️ Content Guidelines

- Write Markdown under `/en/` and `/zh/`, with parallel structure
- Use appropriate frontmatter (`lang`, `title`) per language
- Vue components can be embedded in Markdown
- Static assets (logos, icons) go in `public/`

---

## ✅ Contributing

We welcome PRs & issues:

1. Fork the repo
2. Create a branch (`feat/...` or `fix/...`)
3. Add/modify pages, translations, config
4. Open a PR with clear context

---

## 📄 License

MIT — see [LICENSE](LICENSE)

---

## 📬 Contact

- 📧 Email: [public@nise.ac.cn](mailto:public@nise.ac.cn)
- 🔗 Lab Website: [https://www.nise.ac.cn](https://www.nise.ac.cn)
