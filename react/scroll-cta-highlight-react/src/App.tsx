import ScrollCta from './components/ScrollCta';

function App() {
  return (
    <div style={{ height: '2000px', padding: '50px' }}>
      <ScrollCta
        threshold={300}
        label="Sign Up"
        onClick={() => alert('Button clicked!')} // Example click behavior
      />
    </div>
  );
}

export default App;