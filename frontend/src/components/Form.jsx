function HandleSubmit (e) {
    e.preventDefault();
}

function Submit() {

}

export default function Form () {
    return <form onSubmit={HandleSubmit} method="POST">
      <section className="grid grid-rows-3 gap-2">
        <h2 className="p-2 col-span-2 text-center text-lg">Add Task</h2>
        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs"/>
        
        <button className="btn w-89 btn-secondary">
          Add
        </button>
      </section>
    </form>
  }