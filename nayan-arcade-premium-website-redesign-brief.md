# Nayan Arcade — Premium Website Redesign Brief

You are a senior real-estate website designer, UX strategist and front-end developer. Redesign the existing Nayan Arcade website in this repository. Inspect the current codebase first and improve it; do not create an unrelated replacement.

## Business positioning
Position Nayan Arcade as **affordable homes in a premium, well-connected Bhubaneswar location**.

Core brand statement:
> A better address. A home within reach.

Supporting message:
> Explore thoughtfully planned 2 BHK and 3 BHK apartments at Barabari, Khandagiri, Bhubaneswar — with everyday conveniences and practical home features.

Audience: families and working professionals looking for a comfortable, value-conscious home in Bhubaneswar. The website should feel polished, warm, modern, aspirational and trustworthy — premium in presentation, not positioned as ultra-luxury.

## Visual direction
- Use a refined palette inspired by the brochure: deep forest/olive green, warm ivory, muted sand/gold and charcoal.
- Use elegant, readable typography, generous whitespace, strong visual hierarchy, subtle borders and restrained shadows.
- Make the design responsive and consistent across all pages.
- Avoid clutter, loud gradients, excessive animations, generic template styling and exaggerated luxury language.

## Landing page hero
Use this copy:
- Eyebrow: NAYAN ARCADE · BARABARI, KHANDAGIRI, BHUBANESWAR
- Headline: A better address. A home within reach.
- Supporting text: Thoughtfully planned 2 BHK and 3 BHK apartments in a well-connected part of Bhubaneswar.
- Primary button: Enquire Now
- Secondary button: Explore the Project

Use the clearest, highest-resolution image of the actual Nayan Arcade apartment building from the supplied brochure if it exists in the repository's `images/` or `assets/` folders. Make the building prominent in a wide hero layout. The brochure image is an **architectural visualisation/render**, not proof of a completed building; label it discreetly as “Project architectural visualisation”. Do not substitute a random stock building and present it as Nayan Arcade. If the project render is missing, use a neutral placeholder and add a TODO for the owner.

## Homepage sections
1. Premium header with Nayan Arcade logo/wordmark if available; navigation: Home, The Project, Floor Plans, Location, Specifications, Contact; clear Enquire Now CTA; functional mobile menu.
2. Hero with project building render and copy above.
3. Project introduction: residential complex at Barabari, Khandagiri, Bhubaneswar.
4. Apartment options: show 2 BHK and 3 BHK. Reflect Block A / Block B only where supported by brochure. Use original floor-plan images; do not invent or alter measurements, areas, prices, unit counts or availability.
5. Amenities and facilities, limited to brochure statements:
   - 24-hour water supply
   - DG connection for uninterrupted power supply
   - CCTV surveillance
   - Two lifts for both blocks
   - Sewage treatment
   - Earthing arrester
   - Transformer for both blocks to help avoid low voltage
   - Designed boundary wall
   - Rooftop parapet wall
   Do not add a gym, pool, clubhouse, garden, play area or other unverified amenity.
6. Location section: Barabari, Khandagiri, Bhubaneswar. Use the brochure map if available and label it “Location map (not to scale)”. Show these brochure-stated approximate distances:
   - Khandagiri — 500 m
   - Baramunda Bus Stand — 1 km
   - SOA ITER — 1 km
   - St. Xavier School — 1 km
   - Biju Patnaik Airport — 2 km
   - Capital Hospital — 2 km
   - SUM Hospital — 2.5 km
   - DAV School — 3 km
   - Central School — 3 km
   - Kalinga Studio — 3 km
   - AIIMS Hospital — 4 km
   - Kalinga Stadium — 4 km
   - Railway Station — 5 km
   Add a note that distances are as stated in the brochure and should be verified before publication.
7. Construction specifications, accurately summarised from brochure:
   - RCC framed structure; brochure states 10-inch finished external wall
   - Internal walls: Birla white putty or equivalent
   - External finish: combination of tiles and weather-coat acrylic emulsion paint
   - Living/dining/bedrooms: premium vitrified floor tiles
   - Master bedroom: premium laminated wooden flooring (choice, as stated)
   - Staircase: granite / step tiles; driveways: heavy-duty tiles
   - Kitchen: anti-skid floor tiles; ceramic wall tiles up to 2 feet above working platform; granite counter and stainless-steel sink; fittings as described in brochure
   - Toilets: ceramic wall tiles up to 7 feet; anti-skid floor tiles; fittings as described in brochure
   - Balcony: floor tiles and safety steel railing
   - Windows: UPVC glass windows
   - Doors: sal wood frame with flush door; main door stated as teak wood
   Preserve qualifiers such as “or equivalent” and “choice”.
8. Gallery using actual brochure images, building render, floor plans and map. Add captions such as “Project architectural visualisation”, “Indicative floor plan” and “Location map (not to scale)” where appropriate.
9. Enquiry section with name, phone, optional email, apartment interest (2 BHK / 3 BHK / Not sure) and message. Add consent wording. Only use phone, email or WhatsApp details if supplied and verified by the owner. Do not pretend a form works if no backend is configured; show an honest placeholder/TODO or configure a verified mailto/form endpoint.
10. Footer with verified project location and contact details only, navigation and a concise disclaimer that plans/specifications may change and buyers should verify final details with the developer.

## Accuracy and trust rules
Never invent prices, discounts, possession dates, construction status, availability, carpet/built-up areas, approvals, RERA registration numbers, developer credentials, warranties, testimonials, ratings or awards. Do not claim “RERA approved/registered”, “ready to move”, “possession soon”, “limited units” or guaranteed returns without verified evidence. Do not say the project is complete or under construction unless the owner confirms it. The positioning is affordable housing in a premium/well-connected location, not luxury housing. Use “approx.” for distances.

## Conversion, accessibility and SEO
- Give visitors clear Enquire, Request Details or Schedule a Site Visit actions.
- Make forms validate input and show honest success/error states.
- Use accessible labels, keyboard navigation, visible focus states, descriptive alt text and good colour contrast.
- Optimise images, lazy-load below-the-fold images and minimise unnecessary JavaScript.
- Add unique page titles, meta descriptions and a clear H1/H2 structure for relevant local searches such as apartments in Khandagiri, Barabari and Bhubaneswar. Do not promise rankings.
- Add structured data only when details are verified. Do not fabricate phone numbers, coordinates or business details.

## Technical instructions
1. Inspect all current HTML, CSS, JavaScript and image assets before editing.
2. Preserve useful pages and existing working functionality.
3. Keep the current static-site architecture unless there is a compelling reason to change it.
4. Ensure GitHub Pages relative paths work under `/nayan-arcade-website/`; avoid broken root-absolute asset paths.
5. Do not add paid services, subscriptions or unnecessary dependencies.
6. Check all navigation, images, forms, mobile/tablet/desktop layouts and browser-console errors after changes.
7. Report which files changed and list missing owner inputs (verified phone, email, RERA details, price, project status and approved images).

## Final standard
Within five seconds, visitors should understand that this is Nayan Arcade, a 2 BHK / 3 BHK residential apartment project at Barabari, Khandagiri, Bhubaneswar, positioned around location convenience and an affordable home proposition. The website must look professional, attractive and credible — never like a generic template or an exaggerated sales advertisement.
