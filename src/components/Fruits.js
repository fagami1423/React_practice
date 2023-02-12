
function Fruits(props) {
    return (
        <div>
            {props.fruits.map(fruit => <p id={fruit.id}>{fruit.fruitName}</p>)}
        </div>
    )
}

export default Fruits;