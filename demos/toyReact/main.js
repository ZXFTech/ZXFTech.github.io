import { createElement, Component, render } from './toy-react'

class MyComponent extends Component {
  render() {
    return <div>my component</div>
  }
}

render(<MyComponent id="a" class="c" >
  <div></div>
</MyComponent>)

