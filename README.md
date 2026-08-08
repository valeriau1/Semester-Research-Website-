Parallel Inquiries (meow)


- HTML = the rooms and furniture
- CSS = the interior design
- JavaScript = the things that move or react
- Assets = the photos, videos, PDFs, and PowerPoints you put inside


# THE MOST IMPORTANT FILES

## `index.html`

This is the **homepage**. 

It is the first page people see when they visit the website.

Right now it contains things like:

- the big homepage title
- the current monthly topic
- the latest presentation
- latest film
- semester dossier links

### Edit this file when:

- the month changes
- you want to change the homepage wording
- you want to change the current featured topic
- you want to add something new to the homepage

Example:

```html
<h1>PARALLEL INQUIRIES</h1>
```

This creates a big heading.

If you change it to:

```html
<h1>THE MIDNIGHT ARCHIVE</h1>
```

the website will display:

THE MIDNIGHT ARCHIVE

HTML controls **what exists on the page**.

# `style.css`

This file controls the **design of the entire website**.

- colors
- fonts
- spacing
- sizes
- backgrounds
- layouts
- borders
- hover effects
- mobile layout

You usually edit this file when you think:
        "I want this to look different."

For example:

```css
body {
  background: #e9e2d5;
}
```

controls the page background color.

Or:

```css
.hero h1 {
  font-size: 10rem;
}
```

controls how big the homepage title is.

### Very simple rule:

**HTML = what it says**

**CSS = what it looks like**



# `script.js`

This file controls **behavior and interactivity**.

Think of JavaScript as:

> "When something happens, do something."

Right now this file handles things like:

- elements fading in when you scroll
- the decorative circle moving slightly (I'm trying to make it so that every month adds like a small star on the black page but that is a work in proccess.)
- interactive behavior

Example idea:

A visitor clicks a dossier.

JavaScript could make:

```text
ACCESS DENIED
```

appear.

Later JavaScript can do much cooler things:

- image changes when you hover
- video starts playing on hover
- secret clues reveal when clicked
- page transition animations
- custom mouse cursor
- text appears while scrolling
- interactive case files

### Very simple rule:

**HTML = content**

**CSS = design**

**JavaScript = movement / reaction**

You probably will not need to edit `script.js` very much at first.


# `about.html`

This is the **About page**.

It explains:

- who we are
- why this project exists
- how the monthly research works
- how presentation night works
- how the secret semester topics work

Right now it contains the project manifesto and rules.

Edit this file if you want to change the story behind the project. (pls change this its cringe)


# THE `inquiries` FOLDER

This folder holds all of the monthly research topics.

```text
inquiries/
├── index.html
└── august-2026.html
```


## `inquiries/index.html`

This is the **main Inquiry Archive page**.

Think of it like the table of contents.

Eventually it will show:

```text
001 — AUGUST
The Dark Triad

002 — SEPTEMBER
Dreams

003 — OCTOBER
Memory
```

You normally add one new item here every month.


## `inquiries/august-2026.html`

This is the **full page for August**.

August's topic is:

THE DARK TRIAD

This page can contain:

- my interpretation
- your interpretation
- both presentations
- PDFs
- research
- sources
- film
- aftermath
- links to clues

Think of each monthly page as its own little exhibition.

When September happens, we can create:

```text
september-2026.html
```

Then October:

```text
october-2026.html
```

etc.


# THE `films` FOLDER

This is where the vlog / film part of the project lives.

```text
films/
├── index.html
└── august-film.html
```

## `films/index.html`

This is the **main Film Archive**.

It will eventually show all your videos.

Example:

```text
FILM 001
The Anatomy of Darkness

FILM 002
September Film

FILM 003
October Film
```


## `films/august-film.html`

This is the page for one specific film.

For example:

**The Anatomy of Darkness**

This page can eventually contain:

- the vlog
- photos
- quotes
- production notes
- related research
- link back to August's inquiry


# THE `marginalia` FOLDER

This is basically the **blog**, but we are calling it:

MARGINALIA

because that sounds much better.

This section is for things that are less formal.

Examples:

- research thoughts
- random discoveries
- book recommendations
- mini essays
- photos
- quotes
- notes from libraries
- things that did not fit the presentation
- rabbit holes
- disagreements
- interesting sources


## `marginalia/index.html`

This is the main Marginalia / Blog page.

It lists all your entries.


## `marginalia/august-notes.html`

This is one individual Marginalia entry.

Right now it is meant for notes connected to August and the Dark Triad.

Later you could make things like:

```text
why-we-like-villains.html

books-we-found-this-month.html

presentation-night-august.html
```

You do NOT have to organize everything by month if you do not want to.

Marginalia can be much more free.


# THE `dossiers` FOLDER

This is the secret semester game.

```text
dossiers/
├── index.html
├── valeria.html
└── researcher-two.html
```


## `dossiers/index.html`

This shows the two secret semester dossiers.

Something like:

```text
DOSSIER A
VALERIA
██████████████
CLASSIFIED

DOSSIER B
ANISHA
██████████████
CLASSIFIED
```

Visitors can click into each one.

---

## `dossiers/valeria.html`

This is your public clue page.

IMPORTANT:

This should contain ONLY clues your friend is allowed to see.

For example:

```text
ENTRY 001

"Why are we so fascinated by darkness?"

Origin:
August — Dark Triad
```

Your real secret topic should NOT be written anywhere in this file before reveal day.

---

## `dossiers/anisha.html`

Same idea, but for your secret semester project.

You only add clues she has officially released.

---

# THE `assets` FOLDER

This contains actual media.

```text
assets/
├── images/
├── videos/
└── presentations/
```

---

# `assets/images/`

Put photos here.

Examples:

```text
library-photo.jpg

dark-triad-cover.jpg

presentation-night.png

notebook-scan.jpg
```

Later HTML can display them like:

```html
<img src="../assets/images/library-photo.jpg">
```

---

# `assets/videos/`

Put video files here IF you decide to host videos directly.

Example:

```text
august-vlog.mp4
```

But we may eventually use YouTube or Vimeo instead because large video files can make GitHub repositories huge.

---

# `assets/presentations/`

Put presentation files here.

For example:

```text
valeria-dark-triad.pdf

valeria-dark-triad.pptx

anisha-dark-triad.pdf
```

I recommend putting BOTH:

- the original PowerPoint
- a PDF version

The PDF is easier to display directly inside the website.

---

# HOW THE FOLDERS CONNECT

Imagine someone visits:

```text
index.html
```

They see:

THE DARK TRIAD

and click:

ENTER INQUIRY

That link sends them to:

```text
inquiries/august-2026.html
```

Then they might click:

WATCH FIELD FILM

which sends them to:

```text
films/august-film.html
```

Then:

VIEW DOSSIER

might send them to:

```text
dossiers/valeria.html
```

So a website is really just pages linking to other pages.


# HOW LINKS WORK

Example:

```html
<a href="about.html">About</a>
```

means:

> When someone clicks "About", open `about.html`.

If the file is inside another folder:

```html
<a href="films/index.html">Films</a>
```

means:

> Go inside the `films` folder and open `index.html`.



# WHAT IS `class=""`?

You will see things like:

```html
<h1 class="big-heading">
```

The class is basically a label.

It tells CSS:

> "This heading belongs to the `big-heading` style."

Then inside `style.css` we might have:

```css
.big-heading {
  font-size: 7rem;
}
```

Every element with:

```html
class="big-heading"
```

gets that style.



# WHAT IS `id=""`?

You may also see:

```html
<section id="films">
```

An ID gives one specific thing a name.

That allows a link like:

```html
<a href="#films">Films</a>
```

to scroll directly to that section.

Classes are usually reused.

IDs are usually unique.



# WHAT DOES `<section>` MEAN?

HTML uses little labels called **tags**.

For example:

```html
<section>
```

means:

> This is one section of the webpage.

```html
<h1>
```

means:

> Main heading.

```html
<p>
```

means:

> Paragraph.

```html
<a>
```

means:

> Link.

```html
<img>
```

means:

> Image.




# WHAT DOES `<div>` MEAN?

You are going to see:

```html
<div>
```

EVERYWHERE.

A `div` is basically just a box.

It groups things together.

Example:

```html
<div class="researcher-card">
  <h2>Valeria</h2>
  <p>One Monster, Three Masks</p>
</div>
```

That says:

> Put this heading and paragraph together inside one box called `researcher-card`.

Then CSS can style the entire box.

---

# WHAT DOES `../` MEAN?

This one looks weird at first.

You may see:

```html
../style.css
```

`../` means:

> Go back one folder.

For example:

You are currently inside:

```text
inquiries/august-2026.html
```

But `style.css` is outside the `inquiries` folder.

So:

```text
../style.css
```

means:

> Leave `inquiries`, then find `style.css`.



# WEBSITE RIGHT NOW

```text
parallel_inquiries_site_v2/
│
├── index.html
│   HOME
│
├── about.html
│   ABOUT / MANIFESTO
│
├── style.css
│   DESIGN FOR THE WHOLE WEBSITE
│
├── script.js
│   MOVEMENT + INTERACTIVITY
│
├── inquiries/
│   │
│   ├── index.html
│   │   ALL MONTHLY TOPICS
│   │
│   └── august-2026.html
│       AUGUST / DARK TRIAD
│
├── films/
│   │
│   ├── index.html
│   │   ALL FILMS
│   │
│   └── august-film.html
│       AUGUST VLOG
│
├── marginalia/
│   │
│   ├── index.html
│   │   BLOG / NOTES ARCHIVE
│   │
│   └── august-notes.html
│       AUGUST NOTES
│
├── dossiers/
│   │
│   ├── index.html
│   │   SECRET DOSSIER HOME
│   │
│   ├── valeria.html
│   │   YOUR PUBLIC CLUES
│   │
│   └── researcher-two.html
│       FRIEND'S PUBLIC CLUES
│
└── assets/
    │
    ├── images/
    │   PHOTOS
    │
    ├── videos/
    │   VIDEO FILES
    │
    └── presentations/
        PDF + POWERPOINT FILES
```


WHERE SHOULD I CHANGE SOMETHING?

If you think:

> "I want to change these words."

Go to the `.html` file.

If you think:

> "I want this heading bigger."

Go to `style.css`.

If you think:

> "I want something to happen when I click this."

Go to `script.js`.

If you think:

> "I want to add a photo."

Put the photo in:

```text
assets/images/
```

and then reference it from the correct HTML file.

If you think:

> "I want to add our PowerPoint."

Put it in:

```text
assets/presentations/
```



# HOW TO OPEN THE WEBSITE

In VS Code:

1. Open the whole `parallel_inquiries_site_v2` folder.
2. Open `index.html`.
3. Install the **Live Server** extension if you have not already.
4. Right-click `index.html`.
5. Click:

**Open with Live Server**

Your browser should open the homepage.

Keep VS Code and the browser side-by-side.

Change something.

Press:

**Command + S** on Mac

or:

**Ctrl + S** on Windows.

The page should update.




# VERY IMPORTANT: SECRET DOSSIERS

Do NOT put your actual semester topic anywhere in this shared website before reveal day.

That includes:

- HTML
- comments
- JavaScript
- filenames
- image names
- alt text
- README
- GitHub commit messages

For example, DO NOT name an image:

```text
valeria-obsession-clue-1.jpg
```

because then the game is over.

Instead use something meaningless like:

```text
dossier-a-001.jpg
```

Only put the clues officially allowed to see into the website.


# WHAT TO EDIT FIRST

Do not start by rewriting everything.

Start with:

### 1. Open `index.html`

Find:

```text
PARALLEL INQUIRIES
```

CHOOSE A FREAKING NAME

---

### 2. Open `about.html`

Read the manifesto.

Change anything that does not sound like you two.

---

### 3. Open `style.css`

Look near the top for:

```css
:root {
```

You will see the main colors.

Changing those values changes the color system across almost the whole website.

---

### 4. Add one real photo

Put a photo inside:

```text
assets/images/
```

Then we can replace one placeholder together.

---

# LATER — NOT YET

Eventually we can add:

- custom cursor
- animated page transitions
- videos that play on hover
- image distortion
- scrolling text
- interactive case files
- clickable redactions
- secret dossier animations
- Python/Pelican
- GitHub
- Cloudflare hosting
