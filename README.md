# Victor Hugo — Professional Portfolio

Personal portfolio focused on three connected career tracks:

- Cybersecurity — Blue Team, SOC, Network Security and Network Forensics
- DevOps — Docker, Kubernetes, Bash, Git, CI/CD and automation
- DevSecOps / AppSec — Secure SDLC, SAST/DAST, CI/CD Security and Application Security

## Before publishing

Open `script.js` and replace these values:

```js
const PROFILE = {
  email: 'YOUR_EMAIL@example.com',
  linkedin: 'https://www.linkedin.com/in/YOUR_PROFILE/',
  github: 'https://github.com/YOUR_USERNAME',
  whatsapp: '5519999999999'
};
```

For WhatsApp, use only digits: country code + area code + number.

Example for Brazil:

```text
55 + DDD + phone number
```

## Run locally

You can simply double-click `index.html`, or use VS Code Live Server.

## Publish with GitHub Pages

1. Create a new GitHub repository, for example `victor-hugo-portfolio`.
2. Upload `index.html`, `styles.css`, `script.js` and `README.md`.
3. Open the repository **Settings**.
4. Go to **Pages**.
5. Under **Build and deployment**, select **Deploy from a branch**.
6. Choose the `main` branch and `/root` folder.
7. Save.

GitHub will publish the site at a URL similar to:

```text
https://YOUR_USERNAME.github.io/victor-hugo-portfolio/
```

## Feedback form

The current version does not send data to a server. It opens the visitor's email application with the feedback already filled in.

This is intentional for the first version because it works on GitHub Pages without requiring a backend or exposing API credentials in JavaScript.

Later, the form can be connected to Formspree, EmailJS or a serverless function so recruiters can submit feedback without opening their email client.

## 🌐 Live Portfolio

Visit my professional portfolio:

👉 https://victorhugofariasvieir66.github.io/victor-hugo-portfolio/
