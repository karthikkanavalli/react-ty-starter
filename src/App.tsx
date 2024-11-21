import { FC, useState } from "react"
import { Button } from "./components/ui/button"

const App: FC = () => {
  const [str, setStr] = useState("hello")
  return (
    <div>
    <Button variant={"destructive"} className="m -4"   onClick={() => setStr("welcome")}>Click</Button>
      {str}</div>
  )
}

export default App