import Divider from "./components/Divider"
import Footer from "./components/Footer"
import Form from "./components/Form"
import Introduction from "./components/Introduction"
import Navbar from "./components/Navbar"
import Tasks from "./components/Tasks"

function App() {
  return <>
    <section className="flex flex-col h-screen justify-between">
      <nav className="p-2">
        <Navbar/>
      </nav>

      <section className="flex-grow">
        <main className="grid grid-rows-1 gap-2 place-items-center">
          <section>
            <Introduction/>
            &nbsp;
            <Form/>
          </section>
          &nbsp;
          <section className="">
            <Tasks/>
          </section>
        </main>
      </section>
      
      <footer className="h-15 bg-blue-500">
        <Footer/>
      </footer>

    </section>
  </>
}

export default App

