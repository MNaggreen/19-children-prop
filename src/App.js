import './App.css'
import Wrapper from './components/Wrapper'

function App() {
  return (
    <div className="App">
      <Wrapper color="lightblue"> {/* передаем цвет как свойство в style */}
        <h2>Text inside of the Wrapper</h2> {/* добавляем этот текст как свойство для компонента Wrapper через свойство children */}
        <button>Click me!</button>
      </Wrapper>
      <Wrapper color="lightgreen"> {/* передаем цвет как свойство в style */}
        <h2>Another text</h2> {/* добавляем этот текст как свойство для компонента Wrapper через свойство children */}
        <p>Some description</p>
        <input type="text" placeholder="Enter value"/>
      </Wrapper>
    </div>
  )
}

export default App
