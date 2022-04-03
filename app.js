// TODO

// CLASS COMPONENT
class GroceryListItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    done: false
    };
  }

  onListItemClick() {
    this.setState({
      done: !this.state.done
    })
  }

  render() {
    var style = {
      textDecoration: this.state.done ? 'line-through' : 'none'
    };

    return (
    <li style={style} onClick={this.onListItemClick.bind(this)}>{this.props.groceryItem}</li>
    )
  }
}

var GroceryList = (props) => (
  <ul>My Grocery List
    {props.groceryItems.map((grocery) => (
      <GroceryListItems groceryItem={grocery} />
    ))}
  </ul>
)

ReactDOM.render(<GroceryList groceryItems={['apple', 'pear', 'peach']}/>, document.getElementById("app"));


// HANDLING USER EVENT
// var GroceryList = (props) => {
//   var onListItemClick = (event) => {
//     console.log(event);
//     alert('I got clicked!');
//   };

//   return (
//     <ul>My Grocery List
//       <li onClick={onListItemClick}>{props.grocery[0]}</li>
//       <li onClick={onListItemClick}>{props.grocery[1]}</li>
//       <li onClick={onListItemClick}>{props.grocery[2]}</li>
//     </ul>
//   )
// }

// ReactDOM.render(<GroceryList grocery={['apple', 'banana', 'cabbage']} />, document.getElementById("app"));


// USE PROPS - COMPONENT PROPERTY
// var GroceryList = (props) => (
//   <ul>My Grocery List
//     <li>{props.grocery[0]}</li>
//     <li>{props.grocery[1]}</li>
//     <li>{props.grocery[2]}</li>
//   </ul>
// );

// ReactDOM.render(<GroceryList grocery={['apple', 'banana', 'cabbage']} />, document.getElementById("app"));


// USE REACT COMPONENT IN NESTED REACT COMPONENT
// var Dress = () => (
//   <li>Knee-length beige skirt</li>
// );

// var Top = () => (
//   <li>Short sleeve graphic t-shirt</li>
// );

// var ShoppingList = () => (
//   <ul>My Shopping List
//     <Dress />
//     <Top />
//   </ul>
// );

// ReactDOM.render(<ShoppingList />, document.getElementById("app"));

// CREASE A REACT COMPONENT
// var GroceryList = () => (
//   <ul>Grocery List
//     <li>banana</li>
//     <li>cabbage</li>
//   </ul>
// );

// ReactDOM.render(<GroceryList />, document.getElementById("app"));


