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
Open your terminal and execute these commands:

bash
# Update package manager
sudo apt update
sudo apt upgrade

# Install Node.js (includes npm)
sudo apt install nodejs npm

# Verify installation
node --version
npm --version

# You should see versions like:
# v18.x.x or higher
# 9.x.x or higher
Expected Output:

Code
node --version
v18.17.0

npm --version
9.8.1
Step 2: Install VS Code (Recommended IDE)
Download from official site or terminal:

bash
# Method 1: Using Ubuntu Software (GUI)
# Open "Ubuntu Software" app and search "Visual Studio Code"

# Method 2: Terminal installation
sudo snap install code --classic

# Verify installation
code --version
Expected Output:

Code
1.82.2
Step 3: Install Useful VS Code Extensions
Open VS Code and install these extensions (Ctrl+Shift+X):

ES7+ React/Redux/React-Native snippets - dsznajder.es7-react-js-snippets
Prettier - Code formatter - esbenp.prettier-vscode
Thunder Client (or Postman) - for API testing
Live Server - ritwickdey.liveserver
Step 4: Configure npm (Optional but Recommended)
bash
# Set npm registry to default (faster)
npm config set registry https://registry.npmjs.org/

# View current config
npm config list
YOUR FIRST REACT APP
Step 1: Create Your First Project
Open terminal and execute:

bash
# Navigate to where you want to create projects
cd ~/Desktop
# or
cd ~/Documents

# Create React app using Create React App (CRA)
npx create-react-app my-first-app

# This will take 3-5 minutes on first run
# Be patient! It's downloading dependencies
What's happening?

Code
✔ Creating directories
✔ Installing dependencies
✔ Creating template files
✔ Starting development server
Step 2: Navigate to Your Project
bash
# Enter your project directory
cd my-first-app

# List files to see project structure
ls -la
You should see:

Code
node_modules/        (all dependencies)
public/             (static files)
src/                (your source code)
package.json        (project configuration)
README.md
.gitignore
Step 3: Start the Development Server
bash
# Start the app
npm start

# This will:
# 1. Compile your code
# 2. Start a dev server
# 3. Open http://localhost:3000 in your browser
Expected Output in Terminal:

Code
Local:   http://localhost:3000
What You'll See in Browser:

React logo spinning
"Welcome to React" message
Live reload enabled (changes update automatically)
Step 4: Stop the Server
To stop the development server in terminal:

bash
# Press Ctrl+C in the terminal where npm start is running
^C

# Or just close the terminal window
REACT CORE CONCEPTS
Concept 1: Virtual DOM
Create a file to understand Virtual DOM:

bash
# In your terminal (from my-first-app directory)
# Create a new file to test concepts
touch src/concepts.txt
What is Virtual DOM? (Theory)

Code
Real DOM = Browser's actual HTML
Virtual DOM = React's in-memory copy

Process:
1. You write React code
2. React creates Virtual DOM
3. User triggers change
4. React updates Virtual DOM
5. React compares old vs new Virtual DOM (diffing)
6. React updates only changed parts in Real DOM
7. Browser renders updated HTML

Benefits:
- Faster updates
- Better performance
- Easier to work with
See it in Action:

Open src/App.js and modify it:

JavaScript
// src/App.js

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>
          Click Me!
        </button>
      </header>
    </div>
  );
}

export default App;
Test it:

bash
# Make sure npm start is still running
# If not, run: npm start

# Open http://localhost:3000
# Click the "Click Me!" button
# Watch the count increase
# Open browser DevTools (F12) > Elements tab
# You'll see only the count updates, not the entire page
This is Virtual DOM in action! Only the text changed, not the entire page re-rendered.

COMPONENTS & JSX
Concept 2: Functional Components
Create your first custom component:

bash
# Create components directory
mkdir src/components

# Create a component file
touch src/components/Welcome.jsx
Edit the component file:

JavaScript
// src/components/Welcome.jsx

function Welcome() {
  return <h1>Hello React!</h1>;
}

export default Welcome;
Use it in App.js:

JavaScript
// src/App.js

import Welcome from './components/Welcome';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Welcome />
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Click Me!
      </button>
    </div>
  );
}

export default App;
Test it:

bash
# If npm start is running, it will hot-reload automatically
# Go to http://localhost:3000
# You should see "Hello React!" at the top
Key Points:

Component is a JavaScript function
Returns JSX (looks like HTML)
Name must start with uppercase letter
Can be reused multiple times
Concept 3: JSX
Create a JSX demo component:

bash
touch src/components/JSXDemo.jsx
JavaScript
// src/components/JSXDemo.jsx

function JSXDemo() {
  const name = 'Alice';
  const age = 25;
  const isStudent = true;
  const items = ['React', 'JavaScript', 'Node.js'];

  return (
    <div>
      <h2>JSX Examples</h2>
      
      {/* 1. Simple expression */}
      <p>Hello {name}!</p>
      
      {/* 2. Arithmetic */}
      <p>Age next year: {age + 1}</p>
      
      {/* 3. Conditional */}
      <p>Status: {isStudent ? 'Student' : 'Professional'}</p>
      
      {/* 4. Array mapping */}
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      {/* 5. Styles as object */}
      <p style={{ color: 'red', fontSize: '20px' }}>
        Styled text
      </p>

      {/* 6. className instead of class */}
      <p className="highlight">This has a CSS class</p>
    </div>
  );
}

export default JSXDemo;
Use it in App.js:

JavaScript
// src/App.js

import Welcome from './components/Welcome';
import JSXDemo from './components/JSXDemo';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <Welcome />
      <JSXDemo />
    </div>
  );
}

export default App;
Add CSS for styling:

CSS
/* src/App.css */

.highlight {
  background-color: yellow;
  padding: 10px;
  border-radius: 5px;
}
Test it:

bash
# Go to http://localhost:3000
# You should see all JSX examples working
Hands-On Exercise 1: Create a Simple Component
Task: Create a component called Card that displays a product card.

Create the file:

bash
touch src/components/Card.jsx
Write the code:

JavaScript
// src/components/Card.jsx

function Card() {
  const product = {
    name: 'Laptop',
    price: 999,
    inStock: true,
    rating: 4.5
  };

  return (
    <div style={{
      border: '1px solid #ddd',
      padding: '15px',
      borderRadius: '8px',
      maxWidth: '300px'
    }}>
      <h3>{product.name}</h3>
      <p>Price: ${product.price}</p>
      <p>Stock: {product.inStock ? 'Available' : 'Out of Stock'}</p>
      <p>Rating: {product.rating} ⭐</p>
      <button>Add to Cart</button>
    </div>
  );
}

export default Card;
Use in App.js:

JavaScript
// src/App.js

import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <Card />
    </div>
  );
}

export default App;
Test: Go to http://localhost:3000

PROPS & STATE
Concept 4: Props (Component Input)
Create a component that accepts props:

bash
touch src/components/Greeting.jsx
JavaScript
// src/components/Greeting.jsx

function Greeting(props) {
  return (
    <div>
      <h2>Hello {props.name}!</h2>
      <p>Age: {props.age}</p>
      <p>City: {props.city}</p>
    </div>
  );
}

export default Greeting;
Use it with different props:

JavaScript
// src/App.js

import Greeting from './components/Greeting';

function App() {
  return (
    <div className="App">
      <Greeting name="Alice" age={25} city="New York" />
      <Greeting name="Bob" age={30} city="London" />
      <Greeting name="Charlie" age={22} city="Tokyo" />
    </div>
  );
}

export default App;
Test: Go to http://localhost:3000

Key Point: Same component, different data passed as props!

Concept 5: Destructuring Props
Better way to use props:

JavaScript
// src/components/Greeting.jsx

// Instead of using props.name, props.age, etc.
// Destructure them at the start

function Greeting({ name, age, city }) {
  return (
    <div>
      <h2>Hello {name}!</h2>
      <p>Age: {age}</p>
      <p>City: {city}</p>
    </div>
  );
}

export default Greeting;
Result: Cleaner, more readable code!

Concept 6: State (Component Memory)
Create a component with state:

bash
touch src/components/Counter.jsx
JavaScript
// src/components/Counter.jsx

import { useState } from 'react';

function Counter() {
  // useState returns [currentValue, functionToChangeIt]
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div style={{
      border: '2px solid blue',
      padding: '20px',
      borderRadius: '8px',
      textAlign: 'center'
    }}>
      <h2>Counter: {count}</h2>
      <button onClick={increment} style={{ margin: '5px' }}>+</button>
      <button onClick={decrement} style={{ margin: '5px' }}>-</button>
      <button onClick={reset} style={{ margin: '5px' }}>Reset</button>
    </div>
  );
}

export default Counter;
Use it in App.js:

JavaScript
// src/App.js

import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

export default App;
Test: Go to http://localhost:3000 and click buttons

What's Happening:

count stores the current value (starts at 0)
setCount is the function to update it
When you click a button, setCount updates the state
React re-renders the component with new value
You see the updated count on screen
Hands-On Exercise 2: Create a Toggle Component
Create the component:

bash
touch src/components/Toggle.jsx
Write the code:

JavaScript
// src/components/Toggle.jsx

import { useState } from 'react';

function Toggle() {
  const [isOn, setIsOn] = useState(false);

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h3>Light is {isOn ? 'ON 💡' : 'OFF 🌙'}</h3>
      <button onClick={() => setIsOn(!isOn)}>
        Toggle Light
      </button>
    </div>
  );
}

export default Toggle;
Use in App.js and test it

HOOKS DEEP DIVE
Hook 1: useState (Already Covered)
Let me show more advanced examples:

bash
touch src/components/StateDemo.jsx
JavaScript
// src/components/StateDemo.jsx

import { useState } from 'react';

function StateDemo() {
  // Multiple state variables
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (name && email) {
      setSubmitted(true);
    }
  };

  const reset = () => {
    setName('');
    setEmail('');
    setSubmitted(false);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Multiple State Variables</h2>
      
      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ display: 'block', marginBottom: '10px', padding: '8px' }}
      />
      
      <input
        type="email"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ display: 'block', marginBottom: '10px', padding: '8px' }}
      />

      <button onClick={handleSubmit} style={{ marginRight: '10px' }}>
        Submit
      </button>
      <button onClick={reset}>Reset</button>

      {submitted && (
        <div style={{
          backgroundColor: '#e7f5e7',
          padding: '10px',
          marginTop: '10px',
          borderRadius: '4px'
        }}>
          <p>✓ Submitted successfully!</p>
          <p>Name: {name}</p>
          <p>Email: {email}</p>
        </div>
      )}
    </div>
  );
}

export default StateDemo;
Test it: Go to http://localhost:3000

Hook 2: useEffect (Side Effects)
Create a component demonstrating useEffect:

bash
touch src/components/EffectDemo.jsx
JavaScript
// src/components/EffectDemo.jsx

import { useState, useEffect } from 'react';

function EffectDemo() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('Component loaded');

  // Runs after EVERY render
  useEffect(() => {
    console.log('Component rendered, count is:', count);
    document.title = `Count: ${count}`;
  });

  // Runs only ONCE when component mounts
  useEffect(() => {
    console.log('Component mounted!');
    return () => {
      console.log('Component unmounting!');
    };
  }, []);

  // Runs when count changes
  useEffect(() => {
    if (count > 5) {
      setMessage('Count is more than 5!');
    } else {
      setMessage('Count is 5 or less');
    }
  }, [count]);

  return (
    <div style={{ padding: '20px' }}>
      <h2>useEffect Demo</h2>
      <p>Count: {count}</p>
      <p>Message: {message}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <p style={{ fontSize: '12px', color: 'gray' }}>
        Open browser console (F12) to see useEffect logs
      </p>
    </div>
  );
}

export default EffectDemo;
Test it:

bash
# Go to http://localhost:3000
# Open DevTools: F12
# Go to Console tab
# Click buttons and watch the logs
What You'll See:

Code
Component mounted!
Component rendered, count is: 0
(click button)
Component rendered, count is: 1
Count is 5 or less
(click more times)
Component rendered, count is: 6
Count is more than 5!
Hook 3: useContext (Global State)
Create a context:

bash
touch src/contexts/ThemeContext.jsx
JavaScript
// src/contexts/ThemeContext.jsx

import { createContext, useState } from 'react';

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
Use the context in components:

bash
touch src/components/ThemedComponent.jsx
JavaScript
// src/components/ThemedComponent.jsx

import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

function ThemedComponent() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const backgroundColor = theme === 'light' ? '#fff' : '#333';
  const color = theme === 'light' ? '#000' : '#fff';

  return (
    <div style={{
      backgroundColor,
      color,
      padding: '20px',
      borderRadius: '8px',
      transition: 'all 0.3s ease'
    }}>
      <h2>Current Theme: {theme}</h2>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}

export default ThemedComponent;
Update App.js to use the provider:

JavaScript
// src/App.js

import { ThemeProvider } from './contexts/ThemeContext';
import ThemedComponent from './components/ThemedComponent';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <ThemedComponent />
        <ThemedComponent />
      </div>
    </ThemeProvider>
  );
}

export default App;
Test: Go to http://localhost:3000 and click theme toggle

Hook 4: useReducer (Complex State)
bash
touch src/components/TodoList.jsx
JavaScript
// src/components/TodoList.jsx

import { useReducer, useState } from 'react';

const ACTIONS = {
  ADD_TODO: 'ADD_TODO',
  DELETE_TODO: 'DELETE_TODO',
  TOGGLE_TODO: 'TOGGLE_TODO'
};

function todoReducer(todos, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, {
        id: Date.now(),
        text: action.payload,
        completed: false
      }];

    case ACTIONS.DELETE_TODO:
      return todos.filter(todo => todo.id !== action.payload);

    case ACTIONS.TOGGLE_TODO:
      return todos.map(todo =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );

    default:
      return todos;
  }
}

function TodoList() {
  const [todos, dispatch] = useReducer(todoReducer, []);
  const [input, setInput] = useState('');

  const addTodo = () => {
    if (input.trim()) {
      dispatch({ type: ACTIONS.ADD_TODO, payload: input });
      setInput('');
    }
  };

  const deleteTodo = (id) => {
    dispatch({ type: ACTIONS.DELETE_TODO, payload: id });
  };

  const toggleTodo = (id) => {
    dispatch({ type: ACTIONS.TOGGLE_TODO, payload: id });
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px' }}>
      <h2>Todo List</h2>

      <div style={{ marginBottom: '15px' }}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && addTodo()}
          placeholder="Add a todo..."
          style={{
            padding: '8px',
            width: '70%',
            marginRight: '10px'
          }}
        />
        <button onClick={addTodo}>Add</button>
      </div>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {todos.map(todo => (
          <li
            key={todo.id}
            style={{
              padding: '10px',
              marginBottom: '8px',
              backgroundColor: '#f0f0f0',
              borderRadius: '4px',
              textDecoration: todo.completed ? 'line-through' : 'none'
            }}
          >
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
            />
            <span style={{ marginLeft: '10px' }}>
              {todo.text}
            </span>
            <button
              onClick={() => deleteTodo(todo.id)}
              style={{
                marginLeft: '10px',
                backgroundColor: '#ff6b6b',
                color: 'white',
                border: 'none',
                padding: '4px 8px',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

      <p>Total todos: {todos.length}</p>
    </div>
  );
}

export default TodoList;
Use in App.js:

JavaScript
// src/App.js

import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <TodoList />
    </div>
  );
}

export default App;
Test: Go to http://localhost:3000 - add, check off, and delete todos

EVENT HANDLING
Event Types
bash
touch src/components/EventsDemo.jsx
JavaScript
// src/components/EventsDemo.jsx

function EventsDemo() {
  // Click event
  const handleClick = () => {
    alert('Button clicked!');
  };

  // Double click
  const handleDoubleClick = () => {
    alert('Double clicked!');
  };

  // Mouse events
  const handleMouseEnter = () => {
    console.log('Mouse entered');
  };

  const handleMouseLeave = () => {
    console.log('Mouse left');
  };

  // Change event
  const handleChange = (e) => {
    console.log('Input value:', e.target.value);
  };

  // Keyboard events
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      alert('Enter key pressed!');
    }
  };

  // Submit event
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted!');
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Event Handling Examples</h2>

      {/* Click Event */}
      <button onClick={handleClick} style={{ display: 'block', margin: '10px 0' }}>
        Click Me
      </button>

      {/* Double Click */}
      <button
        onDoubleClick={handleDoubleClick}
        style={{ display: 'block', margin: '10px 0' }}
      >
        Double Click Me
      </button>

      {/* Mouse Events */}
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          padding: '20px',
          backgroundColor: '#f0f0f0',
          margin: '10px 0',
          borderRadius: '4px'
        }}
      >
        Hover over me (check console)
      </div>

      {/* Change Event */}
      <input
        type="text"
        onChange={handleChange}
        placeholder="Type something (check console)"
        style={{ display: 'block', margin: '10px 0', padding: '8px' }}
      />

      {/* Keyboard Event */}
      <input
        type="text"
        onKeyPress={handleKeyPress}
        placeholder="Press Enter"
        style={{ display: 'block', margin: '10px 0', padding: '8px' }}
      />

      {/* Submit Event */}
      <form onSubmit={handleSubmit} style={{ marginTop: '20px' }}>
        <input type="text" placeholder="Name" style={{ padding: '8px' }} />
        <button type="submit" style={{ marginLeft: '10px', padding: '8px' }}>
          Submit Form
        </button>
      </form>

      {/* Inline Events */}
      <button
        onClick={() => console.log('Inline function called')}
        style={{ display: 'block', margin: '10px 0' }}
      >
        Inline Function
      </button>

      {/* Event with Arguments */}
      <button
        onClick={() => alert('Button ID: ' + 'btn-1')}
        style={{ display: 'block', margin: '10px 0' }}
      >
        Click with ID
      </button>
    </div>
  );
}

export default EventsDemo;
Test: Go to http://localhost:3000 and interact with all events

FORMS & CONTROLLED COMPONENTS
Controlled Form Component
bash
touch src/components/LoginForm.jsx
JavaScript
// src/components/LoginForm.jsx

import { useState } from 'react';

function LoginForm() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    rememberMe: false,
    country: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    setSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      username: '',
      password: '',
      rememberMe: false,
      country: ''
    });
    setSubmitted(false);
  };

  return (
    <div style={{
      maxWidth: '400px',
      margin: '20px auto',
      padding: '20px',
      border: '1px solid #ddd',
      borderRadius: '8px'
    }}>
      <h2>Login Form</h2>

      <form onSubmit={handleSubmit}>
        {/* Text Input */}
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="username" style={{ display: 'block', marginBottom: '5px' }}>
            Username:
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Enter username"
            style={{
              width: '100%',
              padding: '8px',
              border: '1px solid #ddd',
              borderRadius: '4px',
              boxSizing: 'border-box'
            }}
          />
        </div>

        {/* Password Input */}
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="password" style={{ display: 'block', marginBottom: '5px' }}>
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter password"
            style={{
              width: '100%',
              padding: '8px',
              border: '1px solid #ddd',
              borderRadius: '4px',
              boxSizing: 'border-box'
            }}
          />
        </div>

        {/* Select */}
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="country" style={{ display: 'block', marginBottom: '5px' }}>
            Country:
          </label>
          <select
            id="country"
            name="country"
            value={formData.country}
            onChange={handleChange}
            style={{
              width: '100%',
              padding: '8px',
              border: '1px solid #ddd',
              borderRadius: '4px',
              boxSizing: 'border-box'
            }}
          >
            <option value="">Select a country</option>
            <option value="USA">USA</option>
            <option value="UK">UK</option>
            <option value="Canada">Canada</option>
            <option value="India">India</option>
          </select>
        </div>

        {/* Checkbox */}
        <div style={{ marginBottom: '15px' }}>
          <label>
            <input
              type="checkbox"
              name="rememberMe"
              checked={formData.rememberMe}
              onChange={handleChange}
            />
            {' '}Remember me
          </label>
        </div>

        {/* Buttons */}
        <button
          type="submit"
          style={{
            padding: '10px 20px',
            backgroundColor: '#667eea',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            marginRight: '10px'
          }}
        >
          Submit
        </button>
        <button
          type="button"
          onClick={handleReset}
          style={{
            padding: '10px 20px',
            backgroundColor: '#ccc',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Reset
        </button>
      </form>

      {/* Display submitted data */}
      {submitted && (
        <div style={{
          marginTop: '20px',
          padding: '15px',
          backgroundColor: '#e7f5e7',
          borderRadius: '4px'
        }}>
          <h3>✓ Submitted Data:</h3>
          <p><strong>Username:</strong> {formData.username}</p>
          <p><strong>Password:</strong> {formData.password}</p>
          <p><strong>Country:</strong> {formData.country}</p>
          <p><strong>Remember Me:</strong> {formData.rememberMe ? 'Yes' : 'No'}</p>
        </div>
      )}
    </div>
  );
}

export default LoginForm;
Test: Go to http://localhost:3000

LIST RENDERING & KEYS
Rendering Lists
bash
touch src/components/ListDemo.jsx
JavaScript
// src/components/ListDemo.jsx

import { useState } from 'react';

function ListDemo() {
  const [items, setItems] = useState([
    { id: 1, name: 'Learn React', completed: false },
    { id: 2, name: 'Build a project', completed: false },
    { id: 3, name: 'Deploy to production', completed: false }
  ]);

  const [newItem, setNewItem] = useState('');

  const addItem = () => {
    if (newItem.trim()) {
      const newId = Math.max(...items.map(i => i.id), 0) + 1;
      setItems([...items, {
        id: newId,
        name: newItem,
        completed: false
      }]);
      setNewItem('');
    }
  };

  const deleteItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const toggleItem = (id) => {
    setItems(items.map(item =>
      item.id === id ? { ...item, completed: !item.completed } : item
    ));
  };

  return (
    <div style={{ maxWidth: '500px', margin: '20px auto' }}>
      <h2>Shopping List</h2>

      {/* Add new item */}
      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && addItem()}
          placeholder="Add a new item..."
          style={{
            padding: '8px',
            width: '70%',
            marginRight: '10px'
          }}
        />
        <button onClick={addItem}>Add</button>
      </div>

      {/* Display list */}
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {items.map(item => (
          <li
            key={item.id}
            style={{
              padding: '12px',
              marginBottom: '8px',
              backgroundColor: item.completed ? '#d4edda' : '#fff',
              border: `1px solid ${item.completed ? '#28a745' : '#ddd'}`,
              borderRadius: '4px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              textDecoration: item.completed ? 'line-through' : 'none'
            }}
          >
            <div>
              <input
                type="checkbox"
                checked={item.completed}
                onChange={() => toggleItem(item.id)}
                style={{ marginRight: '10px' }}
              />
              {item.name}
            </div>
            <button
              onClick={() => deleteItem(item.id)}
              style={{
                backgroundColor: '#ff6b6b',
                color: 'white',
                border: 'none',
                padding: '4px 8px',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

      <p style={{ marginTop: '20px', color: '#666' }}>
        Total items: {items.length} | Completed: {items.filter(i => i.completed).length}
      </p>
    </div>
  );
}

export default ListDemo;
Test: Go to http://localhost:3000

Important: Notice how key={item.id} is used. This helps React track which items changed.

CONDITIONAL RENDERING
Different Conditional Patterns
bash
touch src/components/ConditionalDemo.jsx
JavaScript
// src/components/ConditionalDemo.jsx

import { useState } from 'react';

function ConditionalDemo() {
  const [status, setStatus] = useState('pending');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Conditional Rendering Patterns</h2>

      {/* Pattern 1: if/else outside JSX */}
      <div style={{ marginBottom: '20px' }}>
        <h3>Pattern 1: if/else (outside JSX)</h3>
        {(() => {
          if (status === 'pending') {
            return <p>⏳ Loading...</p>;
          } else if (status === 'success') {
            return <p>✓ Success!</p>;
          } else {
            return <p>✗ Error occurred</p>;
          }
        })()}
        <div style={{ marginTop: '10px' }}>
          <button onClick={() => setStatus('pending')}>Pending</button>
          <button onClick={() => setStatus('success')} style={{ marginLeft: '5px' }}>Success</button>
          <button onClick={() => setStatus('error')} style={{ marginLeft: '5px' }}>Error</button>
        </div>
      </div>

      {/* Pattern 2: Ternary operator */}
      <div style={{ marginBottom: '20px' }}>
        <h3>Pattern 2: Ternary operator</h3>
        <p>
          {isLoggedIn ? '✓ Welcome back!' : '✗ Please log in'}
        </p>
        <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
          {isLoggedIn ? 'Logout' : 'Login'}
        </button>
      </div>

      {/* Pattern 3: Logical AND (&&) */}
      <div style={{ marginBottom: '20px' }}>
        <h3>Pattern 3: Logical AND (&&)</h3>
        {isLoggedIn && <p>You can see this because you're logged in!</p>}
        {!isLoggedIn && <p>Login to see more content</p>}
      </div>

      {/* Pattern 4: Switch statement */}
      <div style={{ marginBottom: '20px' }}>
        <h3>Pattern 4: Switch statement</h3>
        {(() => {
          switch (status) {
            case 'pending':
              return <div style={{ color: 'orange' }}>⏳ Loading...</div>;
            case 'success':
              return <div style={{ color: 'green' }}>✓ Success!</div>;
            case 'error':
              return <div style={{ color: 'red' }}>✗ Error!</div>;
            default:
              return <div>Unknown status</div>;
          }
        })()}
      </div>

      {/* Pattern 5: Object lookup */}
      <div style={{ marginBottom: '20px' }}>
        <h3>Pattern 5: Object lookup</h3>
        {(() => {
          const messages = {
            pending: '⏳ Loading...',
            success: '✓ Success!',
            error: '✗ Error!'
          };
          return <p>{messages[status]}</p>;
        })()}
      </div>
    </div>
  );
}

export default ConditionalDemo;
Test: Go to http://localhost:3000

COMPONENT COMPOSITION
Composition Example
bash
mkdir -p src/components/composition
touch src/components/composition/Button.jsx
touch src/components/composition/Card.jsx
touch src/components/composition/CompositionDemo.jsx
JavaScript
// src/components/composition/Button.jsx

function Button({ onClick, children, type = 'primary', disabled }) {
  const colors = {
    primary: '#667eea',
    danger: '#ff6b6b',
    success: '#51cf66'
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        padding: '10px 20px',
        backgroundColor: colors[type],
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.5 : 1
      }}
    >
      {children}
    </button>
  );
}

export default Button;
JavaScript
// src/components/composition/Card.jsx

function Card({ title, children, footer }) {
  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '20px',
      marginBottom: '20px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
    }}>
      <h3>{title}</h3>
      <div>{children}</div>
      {footer && <div style={{ marginTop: '20px', borderTop: '1px solid #ddd', paddingTop: '10px' }}>
        {footer}
      </div>}
    </div>
  );
}

export default Card;
JavaScript
// src/components/composition/CompositionDemo.jsx

import Button from './Button';
import Card from './Card';
import { useState } from 'react';

function CompositionDemo() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ maxWidth: '500px', margin: '20px auto' }}>
      <h2>Component Composition</h2>

      <Card
        title="Card 1"
        footer={<small>Created today</small>}
      >
        <p>This is composed content inside a Card</p>
      </Card>

      <Card
        title="Counter Card"
        footer={<p style={{ margin: 0 }}>Count: {count}</p>}
      >
        <Button onClick={() => setCount(count + 1)}>
          Increment
        </Button>
        <Button
          onClick={() => setCount(0)}
          type="danger"
          style={{ marginLeft: '10px' }}
        >
          Reset
        </Button>
      </Card>

      <Card title="Buttons Example">
        <Button type="primary">Primary</Button>
        <Button type="danger" style={{ marginLeft: '5px' }}>Danger</Button>
        <Button type="success" style={{ marginLeft: '5px' }}>Success</Button>
        <Button disabled style={{ marginLeft: '5px' }}>Disabled</Button>
      </Card>
    </div>
  );
}

export default CompositionDemo;
Use in App.js:

JavaScript
// src/App.js

import CompositionDemo from './components/composition/CompositionDemo';

function App() {
  return (
    <div className="App">
      <CompositionDemo />
    </div>
  );
}

export default App;
Test: Go to http://localhost:3000

PERFORMANCE OPTIMIZATION
useMemo Hook
bash
touch src/components/MemoDemo.jsx
JavaScript
// src/components/MemoDemo.jsx

import { useState, useMemo } from 'react';

function MemoDemo() {
  const [count, setCount] = useState(0);
  const [multiplier, setMultiplier] = useState(1);

  // Without useMemo - recalculates every render
  const expensiveCalculation = () => {
    console.log('Calculating...');
    let result = 0;
    for (let i = 0; i < 1000000000; i++) {
      result += i;
    }
    return result;
  };

  // With useMemo - only recalculates when multiplier changes
  const memoizedResult = useMemo(() => {
    console.log('Memoized calculation...');
    let result = 0;
    for (let i = 0; i < 1000000000; i++) {
      result += i;
    }
    return result * multiplier;
  }, [multiplier]);

  return (
    <div style={{ padding: '20px' }}>
      <h2>useMemo Performance Optimization</h2>

      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>

      <p style={{ marginTop: '20px' }}>Multiplier: {multiplier}</p>
      <button onClick={() => setMultiplier(multiplier + 1)}>
        Increase Multiplier
      </button>

      <p style={{ marginTop: '20px' }}>
        <strong>Memoized Result:</strong> {memoizedResult}
      </p>

      <p style={{ fontSize: '12px', color: 'gray', marginTop: '20px' }}>
        Open console (F12) to see when calculations happen.
        Click "Increment Count" multiple times - notice no new calculation.
        Click "Increase Multiplier" - notice new calculation.
      </p>
    </div>
  );
}

export default MemoDemo;
React.memo for Component Memoization
bash
touch src/components/ExpensiveChild.jsx
JavaScript
// src/components/ExpensiveChild.jsx

import React from 'react';

function ExpensiveChild({ name, count }) {
  console.log(`ExpensiveChild rendered with name: ${name}`);

  // Simulate expensive render
  let sum = 0;
  for (let i = 0; i < 1000000; i++) {
    sum += i;
  }

  return (
    <div style={{
      padding: '10px',
      margin: '10px',
      border: '1px solid #ddd',
      backgroundColor: '#f9f9f9'
    }}>
      <p>Name: {name}</p>
      <p>Count: {count}</p>
      <p>Sum: {sum}</p>
    </div>
  );
}

// Wrap with React.memo to prevent unnecessary renders
export default React.memo(ExpensiveChild);
Use it:

bash
touch src/components/MemoParent.jsx
JavaScript
// src/components/MemoParent.jsx

import { useState, useCallback } from 'react';
import ExpensiveChild from './ExpensiveChild';

function MemoParent() {
  const [count, setCount] = useState(0);
  const [other, setOther] = useState(0);

  // Without useCallback - creates new function every render
  // This causes ExpensiveChild to re-render even though props didn't change
  const handleClick = () => {
    console.log('Clicked');
  };

  // With useCallback - same function reference across renders
  const handleClickMemo = useCallback(() => {
    console.log('Clicked (memoized)');
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h2>React.memo & useCallback</h2>

      <button onClick={() => setOther(other + 1)}>
        Change Other State ({other})
      </button>

      <p style={{ color: '#666', fontSize: '12px', marginTop: '10px' }}>
        Click button above - watch console.
        ExpensiveChild re-renders even though its props don't change!
      </p>

      <ExpensiveChild name="John" count={count} />
    </div>
  );
}

export default MemoParent;
PRACTICE EXERCISES
Exercise 1: Create a Calculator
Create file:

bash
touch src/components/Calculator.jsx
Task: Build a simple calculator with:

Number buttons (0-9)
Operation buttons (+, -, *, /)
Equals button
Display screen
Clear button
Solution:

JavaScript
// src/components/Calculator.jsx

import { useState } from 'react';

function Calculator() {
  const [display, setDisplay] = useState('0');
  const [previousValue, setPreviousValue] = useState(null);
  const [operation, setOperation] = useState(null);
  const [waitingForNewValue, setWaitingForNewValue] = useState(false);

  const handleNumber = (num) => {
    if (waitingForNewValue) {
      setDisplay(String(num));
      setWaitingForNewValue(false);
    } else {
      setDisplay(display === '0' ? String(num) : display + num);
    }
  };

  const handleOperation = (op) => {
    const currentValue = parseFloat(display);

    if (previousValue === null) {
      setPreviousValue(currentValue);
    } else if (operation) {
      const result = calculate(previousValue, currentValue, operation);
      setDisplay(String(result));
      setPreviousValue(result);
    }

    setOperation(op);
    setWaitingForNewValue(true);
  };

  const calculate = (prev, current, op) => {
    switch (op) {
      case '+': return prev + current;
      case '-': return prev - current;
      case '*': return prev * current;
      case '/': return prev / current;
      default: return current;
    }
  };

  const handleEquals = () => {
    if (operation && previousValue !== null) {
      const result = calculate(previousValue, parseFloat(display), operation);
      setDisplay(String(result));
      setPreviousValue(null);
      setOperation(null);
      setWaitingForNewValue(true);
    }
  };

  const handleClear = () => {
    setDisplay('0');
    setPreviousValue(null);
    setOperation(null);
    setWaitingForNewValue(false);
  };

  const buttonStyle = {
    padding: '20px',
    fontSize: '20px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    backgroundColor: '#f0f0f0',
    margin: '5px'
  };

  const displayStyle = {
    width: '100%',
    padding: '20px',
    fontSize: '24px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    marginBottom: '10px',
    textAlign: 'right',
    boxSizing: 'border-box'
  };

  return (
    <div style={{
      maxWidth: '300px',
      margin: '20px auto',
      padding: '20px',
      border: '1px solid #ddd',
      borderRadius: '8px'
    }}>
      <h2>Calculator</h2>
      <input type="text" value={display} style={displayStyle} readOnly />

      <div>
        <button onClick={handleClear} style={{ ...buttonStyle, backgroundColor: '#ff6b6b', color: 'white' }}>C</button>
        <button onClick={() => handleOperation('/')} style={{ ...buttonStyle, backgroundColor: '#667eea', color: 'white' }}>/</button>
        <button onClick={() => handleOperation('*')} style={{ ...buttonStyle, backgroundColor: '#667eea', color: 'white' }}>*</button>
        <button onClick={() => handleOperation('-')} style={{ ...buttonStyle, backgroundColor: '#667eea', color: 'white' }}>-</button>
      </div>

      <div>
        {[7, 8, 9].map(num => (
          <button key={num} onClick={() => handleNumber(num)} style={buttonStyle}>{num}</button>
        ))}
        <button onClick={() => handleOperation('+')} style={{ ...buttonStyle, backgroundColor: '#667eea', color: 'white' }}>+</button>
      </div>

      <div>
        {[4, 5, 6].map(num => (
          <button key={num} onClick={() => handleNumber(num)} style={buttonStyle}>{num}</button>
        ))}
      </div>

      <div>
        {[1, 2, 3].map(num => (
          <button key={num} onClick={() => handleNumber(num)} style={buttonStyle}>{num}</button>
        ))}
      </div>

      <div>
        <button onClick={() => handleNumber(0)} style={{ ...buttonStyle, flex: 1, width: '65%' }}>0</button>
        <button onClick={() => handleNumber('.')} style={buttonStyle}>.</button>
        <button onClick={handleEquals} style={{ ...buttonStyle, backgroundColor: '#51cf66', color: 'white' }}>=</button>
      </div>
    </div>
  );
}

export default Calculator;
Test it:

bash
# Add to App.js
# Import Calculator and use it
# Go to http://localhost:3000
Exercise 2: Weather Widget
Create a simple weather display component that:

Shows current temperature
Shows weather condition
Has a button to toggle between Celsius and Fahrenheit
Displays mock weather data
Try building this yourself!

Exercise 3: Todo App (Advanced)
Build a complete todo application with:

Add todos
Delete todos
Mark as complete
Filter (all, active, completed)
Save to localStorage
Display total count
PROJECTS
Project 1: Movie Browser
Features:

Search movies
Display movie cards
Show movie details
Add to favorites
Responsive design
Create project structure:

bash
mkdir -p src/projects/moviebrowser
touch src/projects/moviebrowser/MovieBrowser.jsx
Start building:

JavaScript
// src/projects/moviebrowser/MovieBrowser.jsx

import { useState } from 'react';

const MOCK_MOVIES = [
  { id: 1, title: 'The Shawshank Redemption', year: 1994, rating: 9.3 },
  { id: 2, title: 'The Godfather', year: 1972, rating: 9.2 },
  { id: 3, title: 'The Dark Knight', year: 2008, rating: 9.0 },
  { id: 4, title: 'Pulp Fiction', year: 1994, rating: 8.9 },
  { id: 5, title: 'Forrest Gump', year: 1994, rating: 8.8 }
];

function MovieBrowser() {
  const [searchTerm, setSearchTerm] = useState('');
  const [favorites, setFavorites] = useState([]);

  const filteredMovies = MOCK_MOVIES.filter(movie =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleFavorite = (movieId) => {
    setFavorites(prev =>
      prev.includes(movieId)
        ? prev.filter(id => id !== movieId)
        : [...prev, movieId]
    );
  };

  return (
    <div style={{ maxWidth: '800px', margin: '20px auto', padding: '20px' }}>
      <h1>🎬 Movie Browser</h1>

      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search movies..."
        style={{
          width: '100%',
          padding: '10px',
          marginBottom: '20px',
          border: '1px solid #ddd',
          borderRadius: '4px',
          boxSizing: 'border-box'
        }}
      />

      <p>Found {filteredMovies.length} movies</p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '20px' }}>
        {filteredMovies.map(movie => (
          <div
            key={movie.id}
            style={{
              border: '1px solid #ddd',
              borderRadius: '8px',
              padding: '15px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
            }}
          >
            <h3>{movie.title}</h3>
            <p>Year: {movie.year}</p>
            <p>Rating: ⭐ {movie.rating}</p>
            <button
              onClick={() => toggleFavorite(movie.id)}
              style={{
                backgroundColor: favorites.includes(movie.id) ? '#ff6b6b' : '#f0f0f0',
                color: favorites.includes(movie.id) ? 'white' : 'black',
                padding: '10px 20px',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                width: '100%'
              }}
            >
              {favorites.includes(movie.id) ? '❤️ Favorited' : '🤍 Add to Favorites'}
            </button>
          </div>
        ))}
      </div>

      <div style={{ marginTop: '40px', padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '8px' }}>
        <h3>Favorites ({favorites.length})</h3>
        {favorites.length === 0 ? (
          <p>No favorites yet</p>
        ) : (
          <ul>
            {favorites.map(favId => {
              const movie = MOCK_MOVIES.find(m => m.id === favId);
              return <li key={favId}>{movie?.title}</li>;
            })}
          </ul>
        )}
      </div>
    </div>
  );
}

export default MovieBrowser;
Use in App.js:

JavaScript
// src/App.js

import MovieBrowser from './projects/moviebrowser/MovieBrowser';

function App() {
  return (
    <div className="App">
      <MovieBrowser />
    </div>
  );
}

export default App;
DEBUGGING & USEFUL TOOLS
React Developer Tools
Install the browser extension:

bash
# For Chrome
# Go to: https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi

# For Firefox
# Go to: https://addons.mozilla.org/firefox/addon/react-devtools/
Use it:

Press F12 in browser
Look for "Components" tab (React DevTools)
Inspect components and their state/props
Console Logging
JavaScript
// Add logs to understand what's happening
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Component mounted');
    console.log('Current count:', count);

    return () => {
      console.log('Component unmounting');
    };
  }, [count]);

  return <div>{count}</div>;
}
Check logs:

bash
# Press F12 in browser
# Go to Console tab
# See what's logged
Common Debugging Tips
JavaScript
// 1. Check if component is rendering
function Component() {
  console.log('Component rendered');
  return <div>Hello</div>;
}

// 2. Check state changes
const [count, setCount] = useState(0);
console.log('Count updated to:', count);

// 3. Check props
function Component(props) {
  console.log('Props:', props);
  return <div>{props.name}</div>;
}

// 4. Check render counts with custom hook
function useRenderCount() {
  const renderCount = useRef(0);
  useEffect(() => {
    renderCount.current += 1;
    console.log('Renders:', renderCount.current);
  });
  return renderCount.current;
}
DEPLOYMENT
Deploy to Vercel
bash
# 1. Create account at https://vercel.com

# 2. Install Vercel CLI
npm i -g vercel

# 3. Deploy
vercel

# 4. Follow prompts and your app is live!
Deploy to Netlify
bash
# 1. Build your app
npm run build

# 2. Go to https://app.netlify.com
# 3. Drag and drop the 'build' folder
# 4. Your app is live!
Deploy to GitHub Pages
bash
# 1. Add to package.json
"homepage": "https://yourusername.github.io/my-first-app"

# 2. Install gh-pages
npm install --save-dev gh-pages

# 3. Add scripts to package.json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}

# 4. Deploy
npm run deploy
QUICK REFERENCE CHEATSHEET
Common Commands
bash
# Create app
npx create-react-app my-app

# Start development
npm start

# Build for production
npm build

# Stop server
Ctrl + C

# Install package
npm install package-name

# List all installed packages
npm list
Common Imports
JavaScript
// Hooks
import { useState, useEffect, useContext, useReducer, useMemo, useCallback, useRef } from 'react';

// Creating Context
import { createContext } from 'react';

// Components
import Component from './Component';

// Styling
import styles from './Component.module.css';
Common Patterns
JavaScript
// State
const [value, setValue] = useState(initialValue);

// Effect
useEffect(() => {
  // run code
  return () => {
    // cleanup
  };
}, [dependencies]);

// Context
const value = useContext(Context);

// Reducer
const [state, dispatch] = useReducer(reducer, initialState);
SUMMARY
✅ Installed Node.js, npm, and VS Code ✅ Created your first React app ✅ Learned all React fundamentals ✅ Built multiple practice components ✅ Understood state and hooks ✅ Practiced event handling and forms ✅ Built real projects ✅ Learned debugging techniques ✅ Ready to deploy

Next Steps:

Build more projects
Learn routing (React Router)
Learn state management (Redux, Context API)
Learn API integration
Build the Weather Dashboard (from earlier lesson)