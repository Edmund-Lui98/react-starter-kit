import { React, useEffect, useState }  from 'react';

function Chat({socket, username, room}) {
    const [message, setMessage] = useState("");
    const [messageList, setMessageList] = useState([]);

    const sendMessage = async () => {
        if (message !== "") {
          const messageData = {
            room: room,
            author: username,
            message: message,
            time:
              new Date(Date.now()).getHours() +
              ":" +
              new Date(Date.now()).getMinutes(),
          };
    
          await socket.emit("send_message", messageData);
          setMessageList((list) => [...list, messageData]);
          setMessage("");
        }
      };
    

    useEffect(() => {
        socket.on("receive_message", (data) => {
            setMessageList((list) => [...list, data]);
        });
    }, [socket])

    return (
        <div>
            <div className='chat-header'>
                <p>Live Chat</p>
            </div>
            <div className='chat-body'>
                {messageList.map((messageContent) => {
                    return <h1>{messageContent.message}</h1>
                })}
            </div>
            <div className='chat-footer'>
                <input type="text" placeholder='Enter message here' onChange={(e => {setMessage(e.target.value)})}/>
                <button onClick={sendMessage}>send</button>
            </div>

        </div>
    );
}

export default Chat;