# Nayan Arcade — Premium Motion Website Redesign Brief

## Your role
Act as a senior web designer, brand strategist and front-end developer. Redesign the existing Nayan Arcade website into a premium, polished, motion-rich real-estate website that builds trust and generates genuine enquiries.

## Repository and implementation
- Work directly in the existing repository: `snehasish3569-hue/nayan-arcade-website`.
- Inspect the current files and assets before making changes. Improve the existing website rather than creating a disconnected replacement.
- Keep the site compatible with GitHub Pages, published at:
  `https://snehasish3569-hue.github.io/nayan-arcade-website/`
- Use relative asset paths that work from the repository subpath. Do not assume the site is hosted at the domain root.
- Prefer clean, maintainable HTML, CSS and vanilla JavaScript. Use a lightweight animation library only if it is genuinely useful and can be loaded reliably; avoid unnecessary dependencies.
- Preserve working pages and navigation. Test every page and internal link after the redesign.

## Brand and positioning
Nayan Arcade is a residential project in Barabari, Khandagiri, Bhubaneswar, Odisha.

Core positioning:
**“A better address. A home within reach.”**

The website should communicate:
- Affordable homes in a premium, well-connected location.
- Modern, thoughtful living and meaningful value.
- A credible residential project that feels welcoming and aspirational.

The design should feel premium, contemporary, warm and trustworthy — not excessively luxurious, flashy, or budget-looking.

## Visual direction
Create a refined real-estate visual identity:
- Use a sophisticated palette inspired by the project brochure: forest/olive green, warm ivory, muted gold/sand and charcoal. Maintain strong contrast and consistent use of colour.
- Use elegant typography with a clear hierarchy: expressive display typography for major headlines and highly readable body text.
- Use generous whitespace, disciplined alignment, subtle borders, tasteful shadows and large architectural imagery.
- Use a consistent spacing system, responsive layout and polished buttons, cards and navigation.
- Avoid generic template styling, excessive gradients, oversized rounded cards, clutter and decorative effects that distract from the property.

## Hero section
Create a memorable full-screen or near-full-screen opening section:
- Use the actual Nayan Arcade architectural visualisation/render from the existing brochure or repository assets as the hero image wherever available.
- Clearly label it **“Project architectural visualisation”** or **“Artist’s impression”**. Never present a render as a photograph of a completed building.
- Do not replace the actual project with an unrelated stock building. If the project render cannot be located, use a restrained neutral fallback and report the missing asset.
- Include the headline: **“A better address. A home within reach.”**
- Supporting copy: “Thoughtfully planned 2 BHK and 3 BHK apartments in a well-connected part of Bhubaneswar.”
- Include prominent **Explore the Project** and **Enquire Now** calls to action.
- Add a subtle entrance sequence for the headline, supporting text and buttons. Keep the message immediately readable; do not delay access to content.

## Motion and interaction direction
Give the website a smooth, high-quality motion-website feel. Motion should communicate polish and guide attention, not make the site difficult to use.

Use a coordinated motion system, including:
1. A refined page-load/hero entrance with gentle opacity and vertical movement.
2. Scroll-triggered reveals for section headings, text and cards, with restrained stagger timing.
3. Subtle image reveal or masked-image transitions for project imagery.
4. Gentle parallax on selected background or hero imagery, only where it remains smooth and does not impair readability.
5. Smooth anchor scrolling and clear active/hover/focus states for navigation and buttons.
6. Small interaction feedback on buttons, cards and navigation links.
7. A tasteful transition between major sections, without excessive motion.

Motion requirements:
- Prefer transform and opacity animations for performance.
- Avoid constant movement, aggressive zooming, spinning text, cursor-following effects, distracting custom cursors and excessive parallax.
- Do not hijack scrolling or prevent normal browser navigation.
- Respect `prefers-reduced-motion`; provide a reduced-motion experience that removes or simplifies non-essential animation.
- Ensure all content remains visible and usable if JavaScript or animations fail.
- Avoid layout shifts and animation that causes horizontal scrolling.
- Keep mobile animations lighter and test on small screens.

## Recommended website structure
Retain the existing site structure where practical, but make the experience coherent across the following sections/pages:

### 1. Home
- Hero with the actual project render and clear project identification.
- Short introduction to Nayan Arcade.
- 2 BHK and 3 BHK apartment overview.
- Key amenities presented with clean icons and concise descriptions.
- Location advantages with brochure-stated approximate distances.
- A strong enquiry call to action.

### 2. The Project
- Project overview: Nayan Arcade, Barabari, Khandagiri, Bhubaneswar.
- Building configuration shown in the brochure: Stilt + 4 floors.
- Blocks A and B.
- 2 BHK and 3 BHK configurations.
- Use the brochure's floor-plan images if available. Do not guess dimensions or area figures from unclear images.

### 3. Amenities
Present only amenities listed in the brochure:
- 24-hour water supply.
- DG connection for power backup.
- CCTV surveillance.
- Two lifts for both blocks.
- Sewage treatment facility.
- Earthing arrester.
- Transformer for both blocks.
- Designed boundary wall.
- Rooftop with parapet wall.

### 4. Location
Present the project as located at Barabari, Khandagiri, Bhubaneswar. The brochure lists these approximate distances:
- Khandagiri — 500 m
- Baramunda Bus Stand — 1 km
- St. Xavier School — 1 km
- SOA ITER — 1 km
- Biju Patnaik Airport — 2 km
- Capital Hospital — 2 km
- SUM Hospital — 2.5 km
- DAV School — 3 km
- Central School — 3 km
- Kalinga Studio — 3 km
- AIIMS Hospital — 4 km
- Kalinga Stadium — 4 km
- Railway Station — 5 km

Label these as **approximate distances as stated in the project brochure** and advise visitors to verify routes and travel times. Do not imply that the location map is to scale.

### 5. Specifications
Use only the specifications stated in the brochure. Preserve wording such as “or equivalent” and any stated choices. Do not silently upgrade, guarantee or reinterpret specifications.

### 6. Gallery
- Use actual brochure/project images from the repository.
- Provide a clean gallery with an accessible lightbox or simple image viewer if practical.
- Label architectural renders as visualisations.
- Do not use unrelated stock images as if they depict Nayan Arcade.

### 7. Enquiry
Create a polished enquiry section/form with:
- Name
- Phone number
- Email (optional)
- Apartment interest: 2 BHK / 3 BHK / Not sure
- Message
- Clear consent text

Important: GitHub Pages is static hosting and cannot process form submissions by itself. Do not display a fake success message or claim that an enquiry has been sent unless a real form service/backend is configured and tested. If no backend is configured, clearly identify the form as awaiting integration and tell the site owner what is needed. Do not invent a phone number, email address or WhatsApp contact.

## Trust, accuracy and compliance
- Never invent or assume prices, offers, discounts, possession dates, construction status, unit availability, carpet/built-up area, RERA registration number/status, approvals, developer credentials, warranties, testimonials, awards or guaranteed returns.
- Do not use claims such as “RERA approved”, “ready to move”, “limited units” or “possession soon” unless the owner supplies verifiable details.
- The brochure states that its details/specifications are tentative and may change at the promoter/developer's discretion. Include a concise disclaimer that final plans, specifications and project details should be confirmed with the developer.
- Treat all brochure distances as approximate and brochure-sourced.
- Do not publish personal contact details unless they already exist in the repository and are clearly verified by the owner.

## Accessibility, performance and SEO
- Make the site fully responsive across desktop, tablet and mobile.
- Use semantic HTML, accessible labels, keyboard navigation, visible focus indicators and meaningful image alt text.
- Ensure readable colour contrast and appropriately sized touch targets.
- Optimise images, use responsive image sizing and lazy-load below-the-fold images.
- Avoid heavy scripts and unnecessary animation libraries.
- Add page titles, meta descriptions, social sharing metadata and a sensible heading structure.
- Include a favicon if a suitable brand asset exists; do not invent an official logo if none is supplied.

## Final quality checks
Before finishing:
1. Check every page at desktop and mobile widths.
2. Verify all images load and all asset paths work on GitHub Pages under `/nayan-arcade-website/`.
3. Test navigation, anchor links, buttons and any configured enquiry workflow.
4. Check for horizontal overflow, broken layouts, console errors and missing assets.
5. Confirm reduced-motion behaviour.
6. Ensure all project claims are supported by the brochure or owner-provided information.
7. Do not remove existing useful content without a reason.

## Final report to the owner
After implementation, provide:
- A short summary of the design changes.
- The list of files created or modified.
- The motion effects added and how reduced-motion is handled.
- Any missing assets or owner details still required (for example, verified phone/email, pricing, RERA details or enquiry-form integration).
- Any features that are visual only and not yet connected to a working backend.

## Instruction to execute
Inspect the repository and its assets first. Then implement this redesign directly in the existing project. Do not merely describe the changes or generate a mock-up. Preserve factual accuracy, premium visual quality, accessibility, performance and GitHub Pages compatibility.
