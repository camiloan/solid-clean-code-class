import './style.css'
import './clean-code/04-homework'

// biome-ignore lint/style/noNonNullAssertion: <explanation>
const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = `
  <h1>CleanCode y SOLID</h1>
  <span>Revisar la consola de JavaScript</span>
`

