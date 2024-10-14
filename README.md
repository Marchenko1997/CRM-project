# CRM App on Next.js

This project is built with <a href="https://nextjs.org/docs/getting-started/installation" target="_blank" rel="noreferrer">Next.js</a> and provides a functional interface for managing companies. It includes a dynamic homepage that can be adapted for various needs, as well as **Dashboard** and **Companies** pages, which offer a detailed overview of company information.

## :star: Features

### :link: <a href="https://crm-gules-sigma.vercel.app/" target="_blank" rel="noreferrer">Homepage</a>
The homepage presents an overview of the project, which can be easily customized according to user needs.

### :link: <a href="https://crm-gules-sigma.vercel.app/dashboard" target="_blank" rel="noreferrer">Dashboard Page</a>
The **Dashboard** page provides general information about the companies, categorized by **promotions**, **sales**, **categories**, and more. This page allows users to view companies and filter the information.

### :link: <a href="https://crm-gules-sigma.vercel.app/companies" target="_blank" rel="noreferrer">Companies Page</a>

The **Companies** page lists all available companies. Users can:
- View companies in a list.
- Add a company using a modal window. (Note: The form in the modal is currently non-functional.)
- Navigate to a detailed page for each company.


On the <a href="https://crm-gules-sigma.vercel.app/companies/18" target="_blank" rel="noreferrer">individual company page</a> , users can:
- View detailed information about the company.
- Access a list of all promotions associated with the company.
- Add a new promotion, which will then appear in the promotion list.

## :desktop_computer: Technologies

This project is built with the following technologies:

- **Next.js** - for rendering and routing, utilizing both Server Components and Client Components, supporting both static and dynamic rendering.
- **Tailwind CSS** - for styling components with a modern CSS framework <a href="https://nextjs.org/docs/app/building-your-application/styling/tailwind-css" target="_blank" rel="noreferrer">Tailwind CSS</a>.
- **Conditional styling** with  <a href="https://www.npmjs.com/package/clsx" target="_blank" rel="noreferrer">clsx</a> library, which makes it easy to apply conditional styles.
- **File-Systouting**
    - Layouts and parallel routes
    - Error handling
    - Intercepting routes
- **Mockapi.io** - for backend infrastructure, providing a REST API for data storage and retrieval <a href="https://mockapi.io/projects" target="_blank" rel="noreferrer">mockapi.io</a>.
- <a href="https://tanstack.com/query/latest/docs/framework/react/overview" target="_blank" rel="noreferrer">React query</a> library for managing state and queries in React applications.
- A useful extension to jump into when working with Tailwind <a href="https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss" target="_blank" rel="noreferrer">Tailwind CSS IntelliSense</a>

## :art: Styling Structure

The project uses global styles, CSS Modules, and Tailwind CSS for flexible design and styling.

## Author

**Halyna Marchenko**