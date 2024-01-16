import man from '../assets/man.png';

const Suggestion = (props) => {
  return (
    <div className="suggestion-container" onClick={() => props.handleUserSelection(props.user)}>
        <img className="dp" src={man} alt="new"/>
        <div className="name">
            {props.user.name}
        </div>
        <div className="mail">
            {props.user.mail}
        </div>
    </div>
  )
}

export default Suggestion