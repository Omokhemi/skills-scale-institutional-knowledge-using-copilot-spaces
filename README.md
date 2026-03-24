# NaijaGluco — Diabetic-Friendly Nigerian Food App

## Overview

**NaijaGluco** is a diabetic-friendly meal planning web app focused on Nigerian/African cuisine. It provides a 180-day rotating daily meal plan (covering 6 months) with low glycemic index (GI) foods for breakfast, lunch, and dinner — each accompanied by a diabetic-friendly drink or smoothie.

The plan automatically cycles: days 181–360 repeat the same schedule, so the app works all year round.

---

## Features

- **180-day rotating meal plan** — every day has a unique combination of breakfast, lunch, and dinner
- **Low-glycemic Nigerian foods** — all meals have GI ≤ 55
- **No starchy foods** — no rice, yam, fufu, eba, garri, pounded yam, or bread
- **No sweeteners** — no sugar, honey, or artificial sweeteners
- **Anti-diabetic drinks & smoothies** for every meal (unsweetened zobo, moringa tea, bitter leaf juice, guava leaf tea, and more)
- **Nigerian/African store-sourced ingredients** — all foods available in African grocery stores in the United States
- **Focus on Nigerian cuisine** — ugwu, bitter leaf, egusi, moimoi, akara, efo riro, afang, edikaikong, pepper soup, and more
- **Day navigation** — jump to any day (1–360) or go straight to today
- **Mobile-friendly** responsive design

---

## How to Use

Open `index.html` in any modern web browser. No build step or server required.

Or serve the directory locally:

```bash
python3 -m http.server 8000
# then open http://localhost:8000 in your browser
```

---

## Food Philosophy

All meals follow these principles:

| Principle | Detail |
|-----------|--------|
| **Low GI** | All foods have Glycemic Index ≤ 55 |
| **No starch** | No yam, rice, fufu, garri, eba, pounded yam, or bread |
| **No sweeteners** | No sugar, honey, agave, or artificial sweeteners |
| **High fibre** | Vegetables, beans, and okra slow glucose absorption |
| **High protein** | Fish, chicken, goat meat, beef, beans, and eggs stabilise blood sugar |
| **Anti-diabetic herbs** | Bitter leaf, scent leaf, moringa, ginger, turmeric, and more |

---

## Meal Pools

| Category | Count | Examples |
|----------|-------|---------|
| Breakfast options | 30 | Moimoi, Akara, Pepper Soup, Egusi Omelet, Avocado & Smoked Fish… |
| Lunch options | 30 | Egusi Soup, Okra Soup, Efo Riro, Grilled Tilapia, Afang Soup… |
| Dinner options | 30 | Oha Soup, Banga Soup, Prawn Stir-fry, Catfish Stew, Cowpeas Porridge… |
| Drinks / Smoothies | 20 | Zobo tea, Moringa smoothie, Bitter leaf juice, Guava leaf tea… |

---

## Featured Ingredients (from African stores in the US)

**Vegetables:** Ugwu (fluted pumpkin leaves), bitter leaf, waterleaf, okra, garden egg (African eggplant), oha leaf, afang leaf, uziza leaf, soko

**Proteins:** Catfish, tilapia, mackerel, sardines, prawns, periwinkle, garden snail, chicken, turkey, lean beef, goat meat

**Legumes:** Black-eyed peas (cowpeas), brown beans, lentils

**Seeds:** Egusi (melon seeds), ogbono (wild mango seeds), crayfish

**Spices & Herbs:** Scent leaf (efirin), locust beans (iru), ginger, garlic, turmeric, pepper soup spices (ehuru, uziza seeds, uda, utazi)

**Anti-Diabetic Drinks:** Zobo (hibiscus), moringa, bitter leaf juice, soursop leaf, guava leaf, fenugreek, chia seed water

---

## Technical Structure

```
├── index.html          # Single-page app
├── css/
│   └── styles.css      # Green/earthy themed responsive styles
└── js/
    ├── data.js         # 180-day meal plan data (30 breakfasts, 30 lunches, 30 dinners, 20 drinks)
    └── app.js          # App logic: schedule generation, day navigation, rendering
```

---

## Medical Disclaimer

This app is for **general dietary guidance only** and is **not** a substitute for professional medical advice. Always consult your doctor or registered dietitian before making significant changes to your diet, especially if you are managing diabetes.

---

# Scale institutional knowledge using Copilot Spaces

Learn how Copilot Spaces can scale institutional knowledge and streamline organizational processes.

## What are Copilot Spaces?

- Copilot Spaces let you organize the context that Copilot uses to answer your questions.
- Spaces can include repositories, code, pull requests, issues, free-text content like transcripts or notes, images, and file uploads.
- You can ask Copilot questions grounded in that context, or share the space with your team to support collaboration and knowledge sharing.

### Why use Copilot Spaces?

Whether you’re working solo or collaborating across a team, Spaces help you make Copilot more useful.

#### With Copilot Spaces you can

- Get more relevant, specific answers from Copilot.
- Stay in flow by collecting what you need for a task in one place.
- Reduce repeated questions by sharing knowledge with your team.
- Support onboarding and reuse with self-service context that lives beyond chat history.
- Your spaces stay in sync as your project evolves.
  - GitHub files and other GitHub-based sources added to a space are automatically updated as they change, making Copilot an evergreen expert in your project.

## Welcome

- **Who is this for**: Project managers, team leads, and developers looking to streamline knowledge sharing
- **What you'll learn**: How to leverage GitHub Copilot Spaces to capture, organize, and improve project management processes
- **What you'll build**: A comprehensive knowledge management system using Copilot Spaces for team collaboration
- **Prerequisites**:

  - Basic familiarity with GitHub repositories
  - Access to GitHub Copilot Spaces
  - Beginner-level project management concepts

- **How long**: This exercise takes less than 30 minutes to complete.

In this exercise, you will use Copilot Spaces:

1. Add a repository as a source to your Copilot Space
1. Add instructions to your Copilot Space
1. Create issues in the repository using Copilot Spaces
1. Explore and summarize project management process documentation
1. Update repository documentation based on insights and gaps discovered

### How to start this exercise

Simply copy the exercise to your account, then give your favorite Octocat (Mona) **about 20 seconds** to prepare the first lesson, then **refresh the page**.

[![](https://img.shields.io/badge/Copy%20Exercise-%E2%86%92-1f883d?style=for-the-badge&logo=github&labelColor=197935)](https://github.com/new?template_owner=skills&template_name=scale-institutional-knowledge-using-copilot-spaces&owner=%40me&name=skills-scale-institutional-knowledge-using-copilot-spaces&description=Exercise:+Scale+Institutional+Knowledge+Using+Copilot+Spaces&visibility=public)

<details>
<summary>Having trouble? 🤷</summary>

When copying the exercise, we recommend the following settings:

- For owner, choose your personal account or an organization to host the repository.

- We recommend creating a public repository, since private repositories will use Actions minutes.

If the exercise isn't ready in 20 seconds, please check the [Actions](../../actions) tab.

- Check to see if a job is running. Sometimes it simply takes a bit longer.

- If the page shows a failed job, please submit an issue. Nice, you found a bug! 🐛

</details>

---

&copy; 2026 GitHub &bull; [Code of Conduct](https://www.contributor-covenant.org/version/2/1/code_of_conduct/code_of_conduct.md) &bull; [MIT License](https://gh.io/mit)
