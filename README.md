# Flex
Flex is lightweight, react-kind framework with html operators like in angular.

# Goals
* Easy to extend
* Easy to modify
* Focus on removing javascript from html
* TBC

# Release date : probably never

# Components
Components seems quite similar to react/vue<br>
Below you can see fully working example ( no DOM updates for now )<br>

```javascript
import Flex   from './flex';
class Main extends Flex.Component{

  constructor() {
    super();
    this.enabled = false;
    this.list = ['asdasd', 'asdasd', 'asasd'];
    super.run();
  }

  render() {
    return(
      <div>
        <h2>Flex - html logic operators</h2>

        <h3>v-if</h3>
        <ul class="list-if">
          <li>item 1</li>
          <li v-if={this.enabled}>item 2</li>
        </ul>

        <h3>v-for</h3>
        <ul class="list-for">
          <li v-for={this.list}>item 1</li>
        </ul>

        <h3>v-forEach</h3>
        <ul class="list-forEach">
          <li v-forEach="item in list">Hi ! {(args) => { return args['item'] }}</li>
        </ul>
      </div>
    );
  }
}
```
