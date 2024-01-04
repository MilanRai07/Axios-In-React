import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const FormAxios=()=>{
    const [initialValues,setInitialValues]=useState({title:"",body:""});
    const [formVal,setFormVal]=useState(initialValues);
    useEffect(()=>{
        console.log(formVal);
    })
    const handleChange=(event)=>{
        const {name,value}=event.target;
        setFormVal({...formVal,[name]:value});
    }
    const submit=(event)=>{
     event.preventDefault();
     axios.post("https://jsonplaceholder.typicode.com/posts", formVal) //.post for posting values(put request)
     .then((response)=>
     console.log(response))
     .catch((error)=>{
        console.log(error)
    })
    }
    const update=()=>{
        axios.put("ttps://jsonplaceholder.typicode.com/posts" ,formVal) //put for update value
        .then((response)=>{
          console.log(response)
        })
        .catch((error)=>{
            console.log(error)
        })
    }
    const deleted=()=>{
        axios.delete("https://jsonplaceholder.typicode.com/posts/1") //for deleting the values
        .then((response)=>{
         console.log(response);
        })
        .catch((error)=>{
            console.log(error)
        })
    }
    return(
        <>
        <div>
           <form onSubmit={submit}>
             <input type="text"
             placeholder="title"
             name="title"
             value={formVal.title}
             onChange={handleChange}
             />
             <input type="text"
             placeholder="body"
             name="body"
             value={formVal.body}
             onChange={handleChange}
             />
             <button type="submit">Submit</button>
             <button onClick={update}>Update</button>
             <button onClick={deleted}>Delete</button>
           </form>
        </div>
        </>
    )
}
export default FormAxios;