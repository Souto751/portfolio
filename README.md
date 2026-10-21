# Agustin Souto — Portfolio

Interactive portfolio with a pixel-art RPG look, in English and Spanish.
Recruiter-friendly too: a one-page, printable **Quick CV** lives at `/cv`.

🔗 **Live:** [agustinsouto.vercel.app](https://agustinsouto.vercel.app) · [LinkedIn](https://www.linkedin.com/in/souto751) · [GitHub](https://github.com/Souto751)

## Stack

- **Next.js 14** (App Router, every page prerendered as static HTML) + **React 18** + **TypeScript**
- **Tailwind CSS** for styling and **Framer Motion** for animations
- Lightweight i18n (EN / ES) with typed dictionaries — the Spanish file must match the English shape at compile time
- Accessibility: skip link, keyboard-friendly modals, `prefers-reduced-motion` support

## Run it locally

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build + type check
```

## Where things live

| Path | What |
| --- | --- |
| `src/constants/content/en.ts`, `es.ts` | All texts, in both languages |
| `src/constants/projects.ts`, `skills.ts`, `experience.ts`, `education.ts`, `certifications.ts` | Data behind each section |
| `src/sections/` | One component per section |
| `src/components/QuickCv.tsx` | The printable one-page CV |
| `public/assets/` | Images, certificates and audio |

## How it was built

Built with AI as a copilot: I defined the content, the structure and the design decisions, the AI implemented them, and I reviewed and tested every change before keeping it. The portfolio has a section explaining this workflow.

## License

Source code under the [MIT License](LICENSE). Personal content (texts, experience, certificates, images) is **all rights reserved** — see the note at the end of [LICENSE](LICENSE).

---

### En español

Portfolio interactivo con estética pixel art RPG, en inglés y español, con una vista de **CV rápido** imprimible en `/cv`. Construido con Next.js, React, TypeScript, Tailwind y Framer Motion, usando IA como copiloto y revisando cada cambio. El código es MIT; el contenido personal tiene todos los derechos reservados.
