import React, { useState } from 'react'

import UserInput from '../UserInput/UserInput';
// import "./Input.css";
import Card from '../Card/Card';
import ListMessages from './ListMessages';

// import PinListMessages from './PinListMessages';

const provideInput=[
    {
      id:"1",
      message:"Please Enter a message!",
      
      
    },
    {
        id:"2",
        message:"You can pin or delete the entered message"
    }
  ]

// const userNavigation=[
//     {
//         id:"1",
//         path:"Home"
//     },
//     {
//         id:"2",
//         path:"UserInterface"
//     }
// ]

// const pinInput=[];
export default function Input() {
    // const [pin, setPin] = useState(true);
    // const [pinMessage,setPinMessages]=useState(pinInput)

 
    // const userInputChangeHandler = (event) => {
    //     setUserInput(event.target.value);
    // }

    // const userInputSubmitHandler = (event) => {
    //     event.preventDefault();
    //     const userInputData = {
    //         message: userInput
    //     }
    // }

    const [messages,setMessages]=useState(provideInput)
    // const [navMessage,setNavMessages]=useState(userNavigation)

    const addMessagesHandler=(message)=>{
        setMessages(prevMessages=>{
            return [...prevMessages,message]
            // const newMessages=[...prevMessages];
            // newMessages.unshift({message:message,id:Math.random().toString()})
        })

    }

    const deleteItemHandler=inputId=>{
        setMessages(prevMessages=>{
            const newMessages=prevMessages.filter(message=>message.id !==inputId);
            return newMessages;
        })
    }

    // const pinItemHandler = inputId=>{
    //     setMessages(prevMessages=>{
    //         const newMessages=prevMessages.filter(message=>message.id !==inputId);
    //         return newMessages;
    //     })
    // }

    //     setPinMessages(prevMessages=>{
    //         const newMessages=prevMessages.filter(message=>message.id ===inputId)})
    //         return newMessages;
    //     }
    // }
    // const navHandler=(nav)=>{
    //     setNavMessages(prevMessages=>{
    //         return [...prevMessages,nav].contains("home")
        
    //     })
    

    

    return (
        <div>
            <Card className='structure'>
                <ListMessages lists={messages}  onDeleteItem={deleteItemHandler} 
                //  onPinItem={pinItemHandler}
                 />
                <UserInput onAddMessages={addMessagesHandler} />
            </Card>
        </div>
    );
}

