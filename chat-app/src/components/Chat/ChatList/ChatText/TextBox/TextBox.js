import { useState } from 'react';
import './TextBox.css';


function TextBox (props){
    const [text,setText] = useState('');
    const [data_children,setdatachildren] = useState([])
    //transfer tin nhan cua nguoi dung vao ChatInterface
    const TransferData = (event) => {
        if (event.key === 'Enter'){
          setText(event.target.value);
          setdatachildren((prevArray) => [...prevArray, text])
          props.ChangeData(data_children)
          props.ChangeText(text);
        }
    }

    return(
        <div>
                <div className='Text'></div>
                <input onKeyDown={TransferData} className="text-box" type="text" placeholder="Aa"></input>
                <div></div>
        </div>
    )
}

export default TextBox;