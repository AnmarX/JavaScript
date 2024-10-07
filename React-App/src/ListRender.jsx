const List = () => {
    // List
    // const fruits = ["apple", "orange", "banana", "beach", "coconut"]

    // const listItems = fruits.map(fruit => <li>{fruit}</li>)

    // return <ul>{listItems}</ul>




    // Object
    const fruits = [
        { id: 1, name: "beach", cal: 95 },
        { id: 2, name: "orange", cal: 100 },
        { id: 3, name: "banana", cal: 200 },
        { id: 4, name: "apple", cal: 34 },
        { id: 5, name: "coconut", cal: 82 },
        { id: 6, name: "rreq", cal: 132 }
    ]


    //alphabatic sort
    // fruits.sort((a, b) => a.name.localeCompare(b.name)) 

    //alphabatic reverse sort
    // fruits.sort((a, b) => b.name.localeCompare(a.name))

    //numeric sort
    // fruits.sort((a,b) => a.cal - b.cal)

    //numeric reverse sort
    fruits.sort((a, b) => b.cal - a.cal)


    // filter
    const lowCalFruits = fruits.filter(fruit => fruit.cal <= 100)

    // with filter
    const listItems = lowCalFruits.map(lowCalFruits =>
        <li key={lowCalFruits.id}>
            {lowCalFruits.name}: &nbsp;<b>{lowCalFruits.cal}</b>
        </li>)

    // without filter
    // const listItems = fruits.map(fruit =>
    //     < li key={fruit.id} >
    //         {fruit.name}: & nbsp; <b>{fruit.cal}</b>
    //     </li >)

    return <ul>{listItems}</ul>
}

export default List

// dynamic list rendering 
// const List = (props) => {
//     const listItems = props.items.map(item => <li key={item}>{item}</li>);

//     return <ul>{listItems}</ul>;
// }

// // Example usage
// const App = () => {
//     const fruits = ["apple", "orange", "banana", "peach", "coconut"];
//     return <List items={fruits} />;
// }

