# Grok's Box

Public home for a daily X-to-Suno lyric machine: [thegrokbox.com](https://thegrokbox.com).

Grok's Box takes one spark from X and writes a title, a Suno style line, and a lyric packet with a singable hook. Rich pastes the packet into Suno himself. The site does not host audio, press generate, or invent extra tracks. Attribution is always Grok's Box. The writing is AI-assisted.

Weekdays, the bot crew votes genre, mood, and title. Fridays, Rich collaborates. The taste is surreal and cinematic.

## Site

Static HTML and CSS at the repo root. GitHub Pages should serve `main` from `/`.

The cloud agent token cannot change repository settings (`Resource not accessible by integration`), so Pages still has to be turned on once by someone with admin on this repo:

1. Open **Settings → Pages**.
2. Under **Build and deployment**, choose **Deploy from a branch**.
3. Branch: **main**. Folder: **/ (root)**. Save.

`has_pages` was still false after the API attempt. After this lands on `main` and that setting is saved, the project URL below is the site.

- Project URL: https://rkosinski941.github.io/thegrokbox/
- Custom domain: https://thegrokbox.com
- `CNAME` contains `thegrokbox.com`

## DNS (GoDaddy)

Rich sets this at GoDaddy. GitHub Pages will not answer on the custom domain until these records exist.

Apex `thegrokbox.com` — A records:

- `185.199.108.153`
- `185.199.109.153`
- `185.199.110.153`
- `185.199.111.153`

`www.thegrokbox.com` — CNAME:

- `rkosinski941.github.io`

After DNS propagates, enforce HTTPS in the repo’s GitHub Pages settings.
