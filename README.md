# Exlabs React

- [General info](#general-info)
- [Technologies](#technologies)
- [Setup](#setup)
- [Possible improvements](#possible-improvements)

## General info

The application fetches Rick and Morty characters and displays basic information about each character.

The application allows to filter characters by name. To improve UX, pagination and specifying the number of items per subpage have been added. Selecting a character redirects to a specific subpage with additional information about it.

**[Link to an app - Vercel](https://exlabs-react.vercel.app/)**

## Technologies

- React
- TypeScript
- Tailwind (CSS)
- Vitest + React Testing Library (unit tests)
- Prettier + Eslint (tooling with plugins)
- Husky (run formatting and linting on commit push)
- CI/CD with Github Pages (test run, code lint and Vercel deployment)
- React Transition Group (web transitions)

## Setup

**1. Clone the repo**

```
git clone https://github.com/Pawel-Gnat/exlabs-react.git
```

**2. Install NPM packages**

```
npm install
```

**3. Run project**

```
npm run start
```

## Possible improvements

- Accessibility check
- Additional unit tests
- Fancy animations
- Better select component
