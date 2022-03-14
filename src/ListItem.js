const ListItem = (props) => {
    return (
        <ul className="list-item">
            {props.list.map(item => (
              <li key={item.id}>{ item.value }</li>  
            ))}
        </ul>
    );
}
 
export default ListItem;