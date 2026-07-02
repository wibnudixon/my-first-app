function JSXDemo() {
    const name = "Ted John"
    const age = 30;
    const isStudent = true;
    const items = ["Apple", "Banana", "Orange"];
    return (
        <div>
            <h2>JSX Examples</h2>

            {/* 1.Simple expression */}
            <p>Hello, {name}!</p>

            {/* 2. Arithmetic */}
            <p>Age next year: {age +1} </p>

            {/* 3.Conditional*/}
            <p>Status: {isStudent ? "Student" : "Not a student"}</p>
            
            {/* 4. Array mapping */}
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>

            {/* 5. Inline styles */}
            <p style={{ color: "blue", fontSize: "20px" }}>This is a styled text.</p>

            {/* 6. Event handling */}
            <button onClick={() => alert("Button clicked!")}>Click Me</button>  

            {/* 7. Fragment */}
            <>
                <p>This is the first paragraph.</p>
                <p>This is the second paragraph.</p>
            </>

            {/* 8. Conditional rendering */}
            {isStudent && <p>This person is a student.</p>}

            {/* 9. Ternary operator */}
            <p>{isStudent ? "This person is a student." : "This person is not a student."}</p>
               
        
        
        
        </div>

    )
}

export default JSXDemo;