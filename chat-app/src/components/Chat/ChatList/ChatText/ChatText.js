import TextBox from "./TextBox/TextBox";
import './ChatText.css'
import { useState } from "react";
import ChatInterface from "./ChatInterface/ChatInterface";

function ChatText () {
    const [data,setdata] = useState([]);
    const [text,settext] = useState('');
    //ham chuyen data tu component con vao component cha
    const ChangeData = (data) => {
        setdata(data);
        console.log(data);
    }
    const ChangeText = (text) => {
        settext(text);
    }
    return (
        <div className="container">
          <ChatInterface data = {data} text = {text}></ChatInterface> 
          <TextBox ChangeText = {ChangeText} ChangeData = {ChangeData}></TextBox>
        </div>
    )
}

export default ChatText;