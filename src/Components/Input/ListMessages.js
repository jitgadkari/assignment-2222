import React,{useState} from 'react'
import ListInputsItem from './ListInputsItem'
import Navbar from './Navbar'



export default function ListMessages(props) {
    // if(props.lists.length===0){
    //     return <h2 >No messages written yet</h2>
    // }
    const [pinMessage, setPinMessages] = useState([])


    const pinItemHandler = (id,pinMessage) => {
        setPinMessages(
            prevPinMessages=>{
                return  [pinMessage.id]
            // pinMessage => {[...pinMessage,pinMessage.inputId]
        })
        return ;
    }

    return (
        <ul >
            <Navbar />
            {props.lists.map((input) => (<ListInputsItem key={input.id} id={input.id} message={input.message} 
            onPinItem={pinItemHandler}
            />
            ))}
            {props.lists.map((input) => (<ListInputsItem key={input.id} id={input.id} message={input.message} onDelete={props.onDeleteItem} 
            
            onPinItem={props.onPinItem}
            />
            ))}

        </ul>
    )
}
