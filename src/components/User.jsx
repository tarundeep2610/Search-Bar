import man from '../assets/man.png';
import close from '../assets/close.png';

const User = (props) => {
  return (
    <div className='outer-user-box'>
      <div className='user-box'>
        <img className="dp" src={man} alt="new"/>
          <div className="name">{props.userData.name}</div>
          <button className='deselect-btn' onClick={() => props.handleUserDeselection(props.userData)}>
              <img src={close}/>
          </button>
      </div>
    </div>
  )
}

export default User