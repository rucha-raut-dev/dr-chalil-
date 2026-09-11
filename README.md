# Dr. Chalil Website

A modern and responsive website for **Dr. Chalil**, built using Next.js, React, TypeScript, and Tailwind CSS.

The website provides a professional platform to present Dr. Chalil's profile, work, publications/news, images, videos, and other relevant information in an organized and user-friendly interface.

## 🚀 Features

* Responsive and modern website design
* Professional header and footer
* Dr. Chalil profile and information sections
* Image/Gallery section
* News section
* Video section
* Responsive layout for different screen sizes
* Reusable React components
* Tailwind CSS-based styling
* TypeScript support

## 🛠️ Technologies Used

* **Next.js 14** – React framework for building the website
* **React 18** – UI development
* **TypeScript** – Type-safe development
* **Tailwind CSS** – Styling and responsive design
* **PostCSS & Autoprefixer** – CSS processing

## 📁 Project Structure

```text
dr-chalil/
├── public/
│   └── images/
│       ├── news/
│       └── ...
├── src/
│   ├── app/
│   ├── components/
│   └── ...
├── package.json
├── package-lock.json
├── tailwind.config.ts
├── tsconfig.json
├── postcss.config.mjs
└── README.md
```

## ⚙️ Prerequisites

Before running the project, make sure you have installed:

* Node.js
* npm

You can check your installed versions using:

```bash
node -v
npm -v
```

## 📥 Installation

Clone the project repository and move into the project directory:

```bash
git clone <repository-url>
cd dr-chalil
```

Install the required dependencies:

```bash
npm install
```

## ▶️ Run the Development Server

Start the development server with:

```bash
npm run dev
```

The website will normally be available at:

```text
http://localhost:3000
```

Open the address in your browser to view the website.

## 🏗️ Build for Production

To create a production build:

```bash
npm run build
```

After the build is completed, start the production server:

```bash
npm run start
```

## 🖼️ Images and Media

Website images are stored inside the `public/images` directory.

For example:

```text
public/
└── images/
    ├── news/
    │   └── how-two-indians-article-cover.jpg
    └── india-beyond-the-pandemic-cover.jpg
```

Files inside the `public` directory can be referenced directly from the website.

## 📰 News

The website includes a dedicated News section for displaying relevant articles and updates.

News-related images are organized under:

```text
public/images/news/
```

## 🎥 Videos

The website is structured to support a dedicated Videos section where relevant video content can be presented separately from other website sections.

## 📱 Responsive Design

The website is designed to work across different screen sizes, including:

* Desktop
* Laptop
* Tablet
* Mobile devices

Tailwind CSS responsive utilities are used to create adaptable layouts.

## 🧩 Reusable Components

The project uses reusable React components to keep the code organized and maintainable.

Common website elements such as the header, footer, navigation, and content sections can be managed independently.

## 📜 Available Scripts

| Command         | Description                        |
| --------------- | ---------------------------------- |
| `npm install`   | Installs project dependencies      |
| `npm run dev`   | Starts the development server      |
| `npm run build` | Creates a production build         |
| `npm run start` | Starts the production server       |
| `npm run lint`  | Runs the project's linting command |

## 🔧 Configuration

The main configuration files include:

* `package.json` – Project dependencies and scripts
* `tailwind.config.ts` – Tailwind CSS configuration
* `tsconfig.json` – TypeScript configuration
* `postcss.config.mjs` – PostCSS configurations

## 👨‍💻 Development

The project follows a component-based approach using React and Next.js. New pages and sections can be added by creating appropriate components and routes while maintaining the existing design system.

## 📄 License

This project is intended for the Dr. Chalil website and related project purposes.
