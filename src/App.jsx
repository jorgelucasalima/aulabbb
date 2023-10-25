
function App() {

  function click(params) {
    alert('clicou')
  }

  return (
    <div>
      <button onClick={click}>Clique me</button>
    </div>
  )
}

export default App
