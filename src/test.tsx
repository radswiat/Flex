import Flex   from './flex';

class Main extends Flex.Component{

  // selector : 'app';

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


let t = new Main();
t.render();
