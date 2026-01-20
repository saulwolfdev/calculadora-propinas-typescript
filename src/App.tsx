import { menuItems } from "./data/db"
import MenuItem from "./components/MenuItem"


function App() {
    return (
    <div>
    <header className="bg-teal-400 py-5">
        <h1 className="text-center text-4xl font-bold">Calcula de propinas</h1>
    </header>

    <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2">
      
    <div className="p-3">
        <h2 classname="text-4xl font-black">Menu</h2>
              <div className="space-y-3">
                            {
                        menuItems.map((item)=>{
                          return(
                            <MenuItem
                            key={item.id}
                            item={item} 
                            />
                          )
                        })
                      }
              </div>
      </div>

      <div className="space-y-3">
        <h2  classname="text-4xl font-black">Consumo</h2>
      </div>
    </main>

    </div>
  )
}

export default App
