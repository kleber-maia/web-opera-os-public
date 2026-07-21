# Repository instructions

## Git and production deployment

- Work directly on `master`. Do not create feature branches, do not switch to feature branches, and do not open pull requests.
- Before changing the site, run `git switch master` and `git pull --ff-only origin master`.
- After requested changes, run `npm test`, commit the verified files, and push with `git push origin master`.
- The canonical production URL is `https://operaos.ai`.
- GitHub Pages publishes from `master` through `.github/workflows/pages.yml`. A push anywhere else does not update the public website.
- After pushing, monitor the `Deploy GitHub Pages` workflow until it succeeds, then verify the canonical production URL contains the expected new content. Do not report that the site is updated merely because Git accepted the push.
- The production website is static. It does not need a persistent application or development server.
- Do not create a separate hosted preview or use Sites hosting unless the user explicitly requests one.

## Development previews

- Start `npm run dev` only when a development preview is useful or requested.
- When sharing a development preview, never provide a `localhost` URL. Use the LAN `Network` URL printed by Vite.
- Keep the preview process running while the user is reviewing it. Do not stop it until the review is finished or the user asks for production publication instead.
- If the user is not on the same network, publish through `master`; do not substitute an unrelated preview host.

## OperaOS copy model

- `OperaOS` is the solution: a self-hosted operating system for a company.
- `Opera` is the private AI agent embedded inside OperaOS.
- Alternate naturally between `Opera` and `the agent` after the relationship has been established. Never use a bare `AI` label to identify Opera.
- Describe the connected business layer as an information system, not merely as software.
- Modules are examples and starting points, not the definition or fixed boundary of OperaOS. The company can create and extend its own modules, workflows, and capabilities as its needs evolve.
- Keep marketing copy aligned across English, Brazilian Portuguese, and Latin American Spanish in `app/i18n.ts`, and keep the default metadata in `index.html` aligned with the English copy.
