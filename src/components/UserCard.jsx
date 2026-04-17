export default function UserCard(props) {
  return (
    <button className="user-card" onClick={() => props.handleSelect(props.id)}>
      <img className="avatar" src={props.image} alt={`${props.firstName} ${props.lastName}`} />
      <p className="user-name">{props.firstName} {props.lastName}</p>
      <p className="user-dept">{props.department}</p>
    </button>
  )
}