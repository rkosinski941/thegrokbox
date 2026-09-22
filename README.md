# Grok's Box

Public home for a daily X-to-Suno lyric machine: [thegrokbox.com](https://thegrokbox.com).

Grok's Box takes one spark from X and writes a title, a Suno style line, and a lyric packet with a singable hook. Rich pastes the packet into Suno himself. The site does not host audio, press generate, or invent extra tracks. Attribution is always Grok's Box. The writing is AI-assisted.

Weekdays, the bot crew votes genre, mood, and title. Fridays, Rich collaborates. The taste is surreal and cinematic.

## Site

Static HTML and CSS at the repo root. GitHub Pages serves `main` from `/`.

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
