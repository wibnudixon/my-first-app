# My First App - React Fundamentals Learning Project

A hands-on React learning project built with Create React App. This project demonstrates React core concepts including components, hooks, state management, and more.

## 🎯 Features

- ✅ Functional components with JSX
- ✅ State management with hooks (useState, useEffect, useContext, useReducer)
- ✅ Props and component composition
- ✅ Event handling and forms
- ✅ List rendering with keys
- ✅ Conditional rendering
- ✅ Performance optimization (useMemo, React.memo)
- ✅ Multiple practice components and projects

## 📋 Prerequisites

Before running this project, ensure you have installed:

- **Node.js** (v18.x or higher) - [Download](https://nodejs.org/)
- **npm** (usually comes with Node.js)
- **VS Code** (Optional but recommended) - [Download](https://code.visualstudio.com/)

### Verify Installation

```bash
node --version  # Should show v18.x.x or higher
npm --version   # Should show 9.x.x or higher
```

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/wibnudixon/my-first-app.git
cd my-first-app
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the Development Server

```bash
npm start
```

The app will automatically open at `http://localhost:3000` in your browser.

## 📂 Project Structure

```
my-first-app/
├── public/                 # Static files
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── components/         # React components
│   │   ├── JSXDemo.jsx
│   │   ├── Welcome.jsx
│   │   ├── Counter.jsx
│   │   ├── Toggle.jsx
│   │   ├── Card.jsx
│   │   └── ...
│   ├── projects/           # Learning projects
│   ├── contexts/           # Context API examples
│   ├── App.js              # Main component
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json            # Dependencies and scripts
└── README.md              # This file
```

## 📚 Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in development mode.
- Open [http://localhost:3000](http://localhost:3000) to view it in the browser
- Page will reload on code changes
- Errors will be displayed in the console

### `npm test`

Launches the test runner in interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.
- React code is optimized and minified
- Ready for deployment

### `npm run eject`

**Note: this is a one-way operation. Once you eject, you can't go back!**

## 🎓 Learning Content

This project covers:

### Core Concepts
- Virtual DOM
- Functional Components
- JSX Syntax
- Props and Destructuring
- State with Hooks

### Advanced Topics
- useEffect for side effects
- useContext for global state
- useReducer for complex state
- useMemo and useCallback for optimization
- React.memo for component memoization
- Event handling
- Form handling and controlled components
- List rendering and keys
- Conditional rendering
- Component composition

### Practice Components
- Counter with increment/decrement
- Toggle switch
- Todo list with useReducer
- Login form with validation
- Calculator app
- Movie browser with favorites

## 🛠 Technologies Used

- **React** - JavaScript library for building UIs
- **Create React App** - Build tool and development environment
- **Node.js** - JavaScript runtime
- **npm** - Package manager

## 💻 VS Code Extensions (Recommended)

For better development experience, install these extensions:

1. **ES7+ React/Redux/React-Native snippets** - dsznajder.es7-react-js-snippets
2. **Prettier - Code formatter** - esbenp.prettier-vscode
3. **React Developer Tools** - Browser extension (Chrome/Firefox)

## 🐛 Debugging

### Browser DevTools
- Press `F12` to open developer tools
- Go to **Components** tab (React DevTools)
- Inspect components, state, and props
- Check console for errors and logs

### VS Code Debugging
- Use console.log() to debug
- Open browser console (F12 > Console)

## 🚀 Deployment

### Deploy to Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
```bash
npm run build
# Then drag & drop the 'build' folder to netlify.com
```

### Deploy to GitHub Pages
```bash
npm install --save-dev gh-pages
npm run deploy
```

## 📖 Learning Resources

- [React Official Documentation](https://react.dev)
- [Create React App Docs](https://create-react-app.dev)
- [React Hooks Guide](https://react.dev/reference/react)
- [JavaScript ES6+ Features](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## 🤝 Contributing

This is a learning project. Feel free to fork, modify, and experiment with the code!

## 📝 License

This project is open source and available under the MIT License.

## 👤 Author

**wibnudixon** - [GitHub](https://github.com/wibnudixon)

## ✨ Getting Started with Development

For detailed step-by-step learning materials about React fundamentals, environment setup, and detailed explanations, refer to the [original tutorial guide](./LEARNING_GUIDE.md).

## 📞 Support

If you have questions or issues:
1. Check the browser console for error messages
2. Review the code comments in component files
3. Check React documentation
4. Open an issue on GitHub

---

**Happy Learning! 🎉**
