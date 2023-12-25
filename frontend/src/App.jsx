import Divider from "./components/Divider"
import Form from "./components/Form"
import Navbar from "./components/Navbar"
import Tasks from "./components/Tasks"

function App() {
  return <>
    <nav className="p-2">
      <Navbar/>
    </nav>

    <main className="grid grid-rows-1 gap-2 place-items-center">
      <Form/>
      &nbsp;
      <Tasks/>
    </main>
  </>
}

export default App

