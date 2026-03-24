/**
 * Diabetic-Friendly Nigerian Food App — Application Logic
 */

'use strict';

// ─── State ───────────────────────────────────
let currentDay = 1;

// ─── DOM References ──────────────────────────
const dayLabel       = document.getElementById('day-label');
const dayInput       = document.getElementById('day-input');
const prevBtn        = document.getElementById('prev-btn');
const nextBtn        = document.getElementById('next-btn');
const goBtn          = document.getElementById('go-btn');
const todayBtn       = document.getElementById('today-btn');
const monthBadge     = document.getElementById('month-badge');
const planContainer  = document.getElementById('plan-container');

// ─── Helpers ─────────────────────────────────

const MONTH_NAMES = [
  'January','February','March','April','May','June',
  'July','August','September','October','November','December',
];

/** Map day 1-180 to an approximate calendar month label */
function dayToMonth(day) {
  const month = Math.ceil(day / 30); // 1-6
  const repeat = day > 180 ? ' (repeat)' : '';
  return MONTH_NAMES[month - 1] + repeat;
}

/** Render a single meal card */
function renderMealCard(mealSlot, title, emoji) {
  const { meal, drink } = mealSlot;

  const ingredientsList = meal.ingredients
    .map(i => `<li>${i}</li>`)
    .join('');

  const drinkIngredients = drink.ingredients
    .map(i => `<li>${i}</li>`)
    .join('');

  return `
    <article class="meal-card" aria-label="${title}">
      <div class="meal-header">
        <span class="meal-emoji" aria-hidden="true">${emoji}</span>
        <h2 class="meal-title">${title}</h2>
      </div>

      <section class="meal-body">
        <div class="food-section">
          <h3>${meal.name}</h3>
          <p class="meal-description">${meal.description}</p>
          <div class="gi-badge">GI ≈ ${meal.gi}</div>

          <details>
            <summary>Ingredients</summary>
            <ul class="ingredient-list">${ingredientsList}</ul>
          </details>
          <details>
            <summary>Preparation</summary>
            <p class="preparation">${meal.preparation}</p>
          </details>
          <p class="meal-notes">💡 ${meal.notes}</p>
        </div>

        <div class="drink-section">
          <h4>🥤 Drink / Smoothie</h4>
          <p class="drink-name">${drink.name}</p>
          <p class="drink-description">${drink.description}</p>
          <details>
            <summary>Drink Ingredients</summary>
            <ul class="ingredient-list">${drinkIngredients}</ul>
          </details>
          <details>
            <summary>Drink Preparation</summary>
            <p class="preparation">${drink.preparation}</p>
          </details>
          <p class="drink-benefits">✅ ${drink.benefits}</p>
        </div>
      </section>
    </article>
  `;
}

/** Render the full day's plan */
function renderDay(day) {
  const plan = getPlanForDay(day);
  const displayDay = ((day - 1) % 180) + 1;

  dayLabel.textContent = `Day ${day}`;
  monthBadge.textContent = dayToMonth(displayDay);
  dayInput.value = day;

  planContainer.innerHTML = [
    renderMealCard(plan.breakfast, 'Breakfast', '🌅'),
    renderMealCard(plan.lunch,     'Lunch',     '☀️'),
    renderMealCard(plan.dinner,    'Dinner',    '🌙'),
  ].join('');

  // Scroll to top on day change
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/** Update navigation button states */
function updateNavButtons() {
  prevBtn.disabled = currentDay <= 1;
}

/** Set current day and re-render */
function setDay(day) {
  const d = Math.max(1, Math.min(360, parseInt(day, 10) || 1));
  currentDay = d;
  updateNavButtons();
  renderDay(currentDay);
}

// ─── Event Listeners ─────────────────────────

prevBtn.addEventListener('click', () => setDay(currentDay - 1));
nextBtn.addEventListener('click', () => setDay(currentDay + 1));

goBtn.addEventListener('click', () => {
  const val = parseInt(dayInput.value, 10);
  if (!isNaN(val)) setDay(val);
});

dayInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') goBtn.click();
});

todayBtn.addEventListener('click', () => {
  const plan = getTodaysPlan();
  setDay(plan.day);
});

// ─── Bootstrap ───────────────────────────────
(function init() {
  // Start on today's calendar day
  const todayPlan = getTodaysPlan();
  setDay(todayPlan.day);
})();
