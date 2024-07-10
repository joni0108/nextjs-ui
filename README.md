# NextJS UI

A NextJS React Components UI, with over 500+ modern, minimalist UI components and layouts.

## Usage

> [!NOTE]
> This package is not meant to be used as a whole package, but as independent component. The goal is to just copy and paste the source code of the component you need to use, and modify it as needed. This repository only contains the source code and the docs, it is not configured to run.

> [!WARNING]
> Make sure you have a previously configured **NextJS** project with **Typescript** and **TailwindCSS**

### Installation

Please, install all the dependencies using the command below (use your preferred package manager)

```bash
npm i react-icons tailwind-merge framer-motion
```

> [!WARNING]
> When using a component, verify what dependencies does it use, it can be using a custom React Hook or library that you will need to copy with it. If not copying using the original folder structure, modify the import paths as needed.

**Original Folder Structure**

```text
codixfy_next_ui
       |__ components (The standalone react components)
       |__ hooks (The custom React Hooks)
       |__ layouts (The websites and web application layouts & sections components)
       |__ libs (The custom libraries)
```

# Components

All the components in this repository has been tested and mantain a design language.

## Typography

It renders all the most important kind of typography elements like headings, span, paragraphs, etc.

## Buttons

This package have some different kind of buttons.

### Button

The regular button.

### Float Button

A floating button at the right-bottom side of the screen, when clicked renders a component. Common usages are support chats, help, etc.

### Group Button

Buttons together in a horizontal or vertical layout.

## Notes

> [!CAUTION]
> This is still under the version 1, so hard changes can apply. The docs are not still ready as we are working on the live website as yet. Use under your own knowledge.
