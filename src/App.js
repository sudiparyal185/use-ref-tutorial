import { useRef, useEffect } from "react";
function App() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    inputRef.current.value = "";
  };
  return (
    <div className='App'>
      <h1>useRef Tutorial</h1>
      <form onSubmit={handleFormSubmit}>
        <input ref={inputRef} type='text' />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default App;
