# Aeonik TRIAL fonts

Place your **Aeonik TRIAL** files here so the site can load them. The app expects one of these naming patterns (WOFF2 preferred, OTF as fallback):

| Weight  | WOFF2                         | OTF                         |
| ------- | ----------------------------- | --------------------------- |
| Regular | `AeonikTRIAL-Regular.woff2`   | `AeonikTRIAL-Regular.otf`   |
| Medium  | `AeonikTRIAL-Medium.woff2`    | `AeonikTRIAL-Medium.otf`    |
| Bold    | `AeonikTRIAL-Bold.woff2`      | `AeonikTRIAL-Bold.otf`      |

If your trial ZIP uses different filenames, either rename the files to match or update the `@font-face` `src` URLs in `app/globals.css`.

Until files are present, the UI falls back to **system UI sans-serif** fonts (see `--font-sans` in `globals.css`).

Use the font only under the terms of your CoType / Aeonik license.
