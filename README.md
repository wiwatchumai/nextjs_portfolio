# Multilingual Portfolio Website

This is a professional portfolio website built with Next.js, Tailwind CSS, and shadcn/ui components. It features a European Engineering style with a clean, minimalist aesthetic.

## Features

- Responsive design
- Dark/light mode
- Multilingual support for all European languages
- Sections for about, education, awards, projects, skills, and contact

## Adding a New Language

To add a new language translation:

1. Create a new JSON file in the `translations` folder (e.g., `translations/pl.json` for Polish)
2. Copy the content from `translations/en.json` as a starting point
3. Translate all the values (keep the keys the same)
4. The language will be automatically detected and added to the language switcher

Example translation file structure:

\`\`\`json
{
  "nav.home": "Home",
  "nav.about": "About",
  // ... other translations
}
\`\`\`

## Language Codes

The website supports the following language codes:

- English: `en`
- Japanese: `ja`
- German: `de`
- French: `fr`
- Spanish: `es`
- Italian: `it`
- Portuguese: `pt`
- Romanian: `ro`
- Dutch: `nl`
- Swedish: `sv`
- Norwegian: `no`
- Danish: `da`
- Icelandic: `is`
- Russian: `ru`
- Polish: `pl`
- Czech: `cs`
- Slovak: `sk`
- Ukrainian: `uk`
- Bulgarian: `bg`
- Croatian: `hr`
- Serbian: `sr`
- Slovenian: `sl`
- Lithuanian: `lt`
- Latvian: `lv`
- Irish: `ga`
- Welsh: `cy`
- Finnish: `fi`
- Hungarian: `hu`
- Greek: `el`
- Albanian: `sq`
- Estonian: `et`

## Development

\`\`\`bash
# Install dependencies
npm install

# Run development server
npm run dev
\`\`\`

## Building for Production

\`\`\`bash
# Build the application
npm run build

# Start the production server
npm start
