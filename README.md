# Evan Portfolio

A modern portfolio website built with Next.js, React, TypeScript, and Tailwind CSS.

## Goals

- Showcase frontend development skills
- Display completed projects
- Provide contact information
- Demonstrate modern React architecture

## Tech Stack

- Next.js
- React
- TypeScript
- Tailwind CSS

## Planned Features

- Hero section
- Skills section
- Featured projects
- Project gallery
- Contact section
- Responsive design

## Information Architecture

Homepage Sections

1. Navigation
2. Hero
3. Skills
4. Featured Projects
5. About Preview
6. Contact CTA
7. Footer

Additional Pages

- /projects
- /projects/[slug]
- /about
- /contact

## Content Strategy

### Hero

- Frontend Developer
- Personal introduction
- Illustration

### Skills

- React
- Next.js
- TypeScript
- JavaScript
- Tailwind CSS
- HTML
- CSS
- Git
- GitHub

### Projects

- 8 completed projects
- 3 featured projects on homepage
- Full project listing on Projects page

### About

- Short biography
- Resume download button

## Project Categories

### Featured Projects

- Storefront
- Forkify
- ComfyStore

### Modern Applications

- Storefront
- Forkify
- ComfyStore
- MixMaster
- Unsplash Images

### Web Experiences

- Backroads App
- Contentful CMS

### UI & Layout Projects

- Paystack
- MFRFP

## Site Architecture

### Pages

- Home
- Projects
- Project Details
- About
- Contact

### Project Case Studies

Each project page contains:

- Overview
- Problem
- Solution
- Tech Stack
- Features
- Challenges
- Lessons Learned
- GitHub Link
- Live Demo

### Design Principles

- Single responsibility components
- Data separated from UI
- Reusable project templates
- Mobile-first design

## Data Models

### Project

- id
- slug
- title
- description
- category
- techStack
- githubUrl
- liveUrl
- featured

### Case Study Fields

- overview
- problem
- solution
- features
- challenges
- lessonsLearned

### Skill

- name
- category
- icon

### Social Link

- platform
- url
- icon

### Navigation Item

- label
- href

## Tech Stack

### Core

- Next.js App Router
- React
- TypeScript
- Tailwind CSS

### UI

- Lucide React

### Animations

- Framer Motion

## Architecture

src/
├── app
├── components
├── data
├── lib
├── types
├── hooks
└── assets

## Principles

- Small reusable components
- Data separated from UI
- Helper functions separated from components
- Strong TypeScript contracts

## Design Foundation

### Theme

- Dark mode
- Blue accent
- Gray/Silver secondary tones

### Responsive Strategy

- Mobile first
- Tablet support
- Desktop support

### Initial Components

1. Container
2. Button
3. SectionHeading
4. Navbar
5. Footer

### Layout Principles

- Consistent spacing
- Reusable containers
- Small focused components

## Project Setup

Project Name: portfolio

### Create Next App Configuration

- TypeScript: Yes
- ESLint: Yes
- Tailwind CSS: Yes
- src directory: Yes
- App Router: Yes
- Turbopack: Yes
- Import Alias: @/\*

### Current Structure

src/
└── app
├── favicon.ico
├── globals.css
├── layout.tsx
└── page.tsx

## Design Foundation

### Fonts

- Geist Sans
- Geist Mono

### Theme

Dark-first portfolio

#### Design Tokens

- Background
- Surface
- Foreground
- Muted
- Accent
- Border

### Metadata

Title:
Evan Ohemi | Frontend Developer

Description:
Frontend Developer specializing in React, TypeScript, Next.js, and modern web applications.

## Layout System

### Container

Responsibilities:

- Center content
- Limit width
- Provide horizontal padding

Maximum Width:

- ~1200px

### Section

Responsibilities:

- Consistent vertical spacing
- Group related content

### Layout Pattern

Section
└── Container
└── Content

## Engineering Rules

### Rule 1

Components should have a single responsibility.

Examples:

- Container → width and centering
- Section → vertical spacing
- Button → user actions
- SectionHeading → section titles

A component should be easy to describe in one sentence.

## UI Foundation

### Container

Responsibilities:

- Width
- Centering
- Horizontal padding

### Section

Responsibilities:

- Vertical spacing
- Semantic section grouping

### Button

Planned Variants:

- Primary
- Secondary

### Design Rule

Add complexity only when required.

## Foundational Components

### Container

- Width management
- Centering
- Horizontal padding

### Section

- Vertical spacing
- Semantic grouping

### Button

Props:

- children
- variant

Variants:

- primary
- secondary

### Rule

A component should be easy to describe in one sentence.

## Content Ownership

Components render content.

Components do not own content.

Examples:

- SectionHeading renders titles
- SectionHeading does not store titles

## Layout Components

### Navbar

Responsibilities:

- Identity
- Navigation
- Mobile menu access

### Footer

Responsibilities:

- Identity
- Social links
- Copyright

## Navigation

### Navigation Item

Properties:

- label
- href

### Navbar Responsibilities

- Identity
- Navigation Rendering
- Responsive Layout

### Content Ownership

Navigation data lives in:

src/data/navigation.ts

Navbar renders the data.

## Navbar

Responsibilities:

- Identity
- Navigation rendering
- Responsive layout

Data Source:

src/data/navigation.ts

Navbar does not own navigation data.

## Social Links

Properties:

- label
- url

Initial Links:

- GitHub
- LinkedIn
- Email

Icons will be added after the structural framework is complete.

## Footer

Responsibilities:

- Identity
- Social links
- Copyright

Data Source:

src/data/socialLinks.ts

## Home Page

Structure:

- Hero
- Skills
- Featured Projects
- About Preview
- Contact CTA

### Hero

Responsibilities:

- Identity
- Value proposition
- Primary action

Layout:

Two-column

Left:

- Intro text
- Heading
- Description
- CTA buttons

Right:

- Illustration / Profile Image

## Hero

Responsibilities:

- Identity
- Value proposition
- Primary actions

Structure:

Left:

- Intro text
- Headline
- Description
- CTA buttons

Right:

- Illustration / Profile Placeholder

Props:

None

## Hero

Responsibilities:

- Identity
- Value proposition
- Primary actions

Structure:

Left:

- Intro text
- Headline
- Description
- CTA buttons

Right:

- Illustration / Profile Placeholder

Props:

None

## Development Principle

Build structure before styling.

Build architecture before features.

Build reusable foundations before page-specific implementations.

Phase 1: Foundation Components
✓ Container
✓ Section
✓ Button
✓ SectionHeading

Phase 2: Core Sections
✓ Hero
✓ Skills
⬜ Featured Projects
⬜ About
⬜ Contact
⬜ Footer Polish

Phase 1: Foundation
✓ Container
✓ Section
✓ Button
✓ SectionHeading

Phase 2: Core Sections
✓ Hero
✓ Skills
✓ Featured Projects
⬜ About
⬜ Contact
⬜ Footer Polish

Phase 3: Styling & Animation
⬜ Dark theme refinement
⬜ Responsive polish
⬜ Motion effects
