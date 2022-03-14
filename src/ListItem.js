const ListItem = (props) => {
    return (
        <ul className="list-item">
            {props.list.map(item => (
                <li key={item.id}>
                  { item.value }
                  <button onClick={() => props.handleDelete(item.id)}>X</button>
                </li>  
            ))}
        </ul>
    );
}
 
export default ListItem;