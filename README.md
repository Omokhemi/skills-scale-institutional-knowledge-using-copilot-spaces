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

<img src="https://octodex.github.com/images/Professortocat_v2.png" align="right" height="200px" />

Hey Omokhemi!

Mona here. I'm done preparing your exercise. Hope you enjoy! 💚

Remember, it's self-paced so feel free to take a break! ☕️

[![](https://img.shields.io/badge/Go%20to%20Exercise-%E2%86%92-1f883d?style=for-the-badge&logo=github&labelColor=197935)](https://github.com/Omokhemi/skills-scale-institutional-knowledge-using-copilot-spaces/issues/2)

---

&copy; 2025 GitHub &bull; [Code of Conduct](https://www.contributor-covenant.org/version/2/1/code_of_conduct/code_of_conduct.md) &bull; [MIT License](https://gh.io/mit)

