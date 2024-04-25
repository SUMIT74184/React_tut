import './item.css'

function Item(props){
  const itemName=props.name;
return(
 <div>
    <p className="nirma">{itemName}</p>
    {props.children}
 </div>
 
)
}
export default Item;
// javascript xml code---jsx