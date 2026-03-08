// Root component for the Memory Game application
// Responsible for rendering the Gameboard and servig as the top level wrapper
import { Gameboard } from './Gameboard'

export function App() {

  return (
    <div className="memoryGame">
      {/* Main game container. renders the full memory game interface */}
      <Gameboard/>
    </div>
  )
}
