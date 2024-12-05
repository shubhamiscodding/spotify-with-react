import { useState } from 'react'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SideBar/>
      <Mainpage/>
      <PlayBar/>
    </>
  )
}

export default App
