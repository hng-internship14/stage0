# 📝 HNG Stage 0 & Stage 1a – Advanced Todo Card Component

## 📌 Project Overview

This project is my submission for the **HNG Internship Frontend Track (Stage 0 & Stage 1a Tasks)**.

The objective evolved from building a **static, testable Todo Card (Stage 0)** into a more **interactive, stateful, and accessible component (Stage 1a)** using only:

→ **Vanilla HTML, CSS, and JavaScript (no frameworks)**

The final result is a **production-like Todo Card** that mimics real-world behavior found in modern productivity applications.

---

## 🎯 What I Built

I developed a **fully interactive Todo Card** with real-time behavior and editable state.

### ✅ Core Features (Stage 0)

* Task title and description
* Priority indicator (Low / Medium / High)
* Status indicator (Pending / In Progress / Done)
* Due date display
* Dynamic time remaining system
* Completion toggle (checkbox)
* Tags (Work, Urgent, Gym)
* Edit & Delete buttons

---

### 🚀 Advanced Features (Stage 1a)

The component was upgraded into a **stateful UI system** with:

#### ✏️ Editable Todo Card

* Edit mode triggered by "Edit" button
* Form fields for:

  * Title
  * Description
  * Priority
  * Due date
* Save updates the UI instantly
* Cancel restores previous values
* Edit mode hides the main card content

---

#### 🔄 Status Management System

* Status can be changed via dropdown:

  * Pending
  * In Progress
  * Done
* Fully synced logic:

  * Checkbox → updates status
  * Status dropdown → updates checkbox
* UI updates instantly across all elements

---

#### 🎨 Dynamic Visual States

* **Pending** → Yellow badge
* **In Progress** → Gradient (yellow → green)
* **Done** → Green badge + strike-through title
* **High Priority** → Strong left border + indicator
* **Overdue** → Red text + warning indicator

---

#### 📖 Expand / Collapse Description

* Long descriptions are truncated by default
* Expand button reveals full content
* Collapse toggles back
* Fully accessible using:

  * `aria-expanded`
  * `aria-controls`

---

#### ⏳ Advanced Time Management

The time system was upgraded significantly:

* Displays:

  * “Due in X days”
  * “Due in X hours”
  * “Due in X minutes”
  * “Overdue by X hours/minutes”
* Updates every **60 seconds**
* Automatically stops when task is marked **Done**
* Replaced with → `"Completed"`

---

#### ⚠️ Overdue Detection

* Detects when due date has passed
* Displays:

  * "Overdue" indicator
  * Red visual styling
* Enhances urgency awareness

---

## 🧪 Testability (data-testid)

All required test IDs from both stages were implemented exactly as specified.

### Stage 0 Test IDs:

* `test-todo-card`
* `test-todo-title`
* `test-todo-description`
* `test-todo-priority`
* `test-todo-due-date`
* `test-todo-time-remaining`
* `test-todo-status`
* `test-todo-complete-toggle`
* `test-todo-tags`
* `test-todo-edit-button`
* `test-todo-delete-button`

### Stage 1a Additional Test IDs:

* `test-todo-edit-form`
* `test-todo-edit-title-input`
* `test-todo-edit-description-input`
* `test-todo-edit-priority-select`
* `test-todo-edit-due-date-input`
* `test-todo-save-button`
* `test-todo-cancel-button`
* `test-todo-status-control`
* `test-todo-priority-indicator`
* `test-todo-expand-toggle`
* `test-todo-collapsible-section`
* `test-todo-overdue-indicator`

---

## ⚙️ Implementation Approach

### 1. Semantic HTML

Used proper structure for accessibility and clarity:

* `<article>` → card container
* `<h2>` → task title
* `<p>` → description
* `<time>` → date & countdown
* `<ul>/<li>` → tags
* `<button>` → actions
* `<input type="checkbox">` → completion toggle
* `<form>` → edit mode

---

### 2. State Management (Vanilla JS)

Instead of static values, I used a **central `todo` object**:

```js
const todo = {
  title,
  description,
  priority,
  status,
  dueDate,
  completed
};
```

This allows:

* UI re-rendering via a `render()` function
* Single source of truth
* Predictable updates

---

### 3. Time Logic System

* Dynamically calculates time difference
* Converts into:

  * days
  * hours
  * minutes
* Handles overdue logic
* Runs every 60 seconds using `setInterval`

---

### 4. UI/UX Design Decisions

* Clean card layout with soft shadows
* Priority represented visually (color + border)
* Status uses color semantics
* Buttons clearly distinguish actions
* Edit mode isolates focus on form

---

## ♿ Accessibility

Implemented accessibility best practices:

* `<label for="">` for all inputs
* `aria-live="polite"` for time updates
* `aria-expanded` for expand toggle
* `aria-controls` for collapsible section
* Keyboard navigable:

  * Checkbox
  * Status dropdown
  * Buttons
* Focus returns to Edit button after closing form

---

## 📱 Responsiveness

Fully responsive design:

* Mobile (320px) → stacked layout
* Tablet → balanced spacing
* Desktop → structured layout

Key features:

* Tags wrap properly
* Form adapts to screen size
* No horizontal overflow
* Long text handled gracefully

---

## 🛠️ Tech Stack

* HTML5
* CSS3 (Flexbox)
* Vanilla JavaScript (ES6)

---

## 🚀 How to Run

1. Clone the repository
2. Open `index.html` in your browser

OR

Use **Live Server (VS Code)**

---

## 🔗 Live Demo

https://hng-internship14.github.io/stage0/

---

## 📌 Key Highlights

* Fully testable (Stage 0 + Stage 1a compliant)
* Real-time countdown system
* Stateful UI without frameworks
* Fully interactive edit system
* Clean and scalable structure
* Accessibility-focused design

---

## ⚠️ Known Limitations

* No persistent storage (data resets on refresh)
* No backend integration
* Focus trapping inside edit form is not implemented (optional bonus)

---

## 🙌 Conclusion

This project demonstrates my ability to:

* Build scalable UI components from scratch
* Manage application state without frameworks
* Implement real-time dynamic features
* Follow strict product and testing requirements
* Prioritize accessibility and UX

---

**Thank you for reviewing my submission.**
