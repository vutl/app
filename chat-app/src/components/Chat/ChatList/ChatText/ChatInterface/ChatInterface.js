import './ChatInterface.css';
import Message from './Message/Message';

function ChatInterface (props) {
    return (

        <div>
        {props.data.map((text) => <Message text={text}/>)}    
        </div>
    );
}

export default ChatInterface