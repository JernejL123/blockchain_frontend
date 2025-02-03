import Blockchain from './blockchain/blockchain'
import MineBlock from './mine/mine'
import Peers from './addPeer/addPeer'
import './App.css'

function App() {


  return (
    <>
       <MineBlock/>
       <Peers/>
       <Blockchain/>
    </>
  )
}

export default App
