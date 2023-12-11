import "./styles.css"

export default function Header() {
  return (
    <header>
      <div>
        <h1>React Hooks Doc</h1>

        <div className="info">
          <button>Toggle</button>
          <input type="text" placeholder="Search" />
        </div>
      </div>
    </header>
  )
}
