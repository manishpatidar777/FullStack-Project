import React, {useState} from 'react'
import axios from 'axios'
import './ToDoList.css'

export default function ToDoList() {

    const [list, setList] = useState()
    const [item, setItem] = useState()

    const show = async() =>{
        const res = await axios.get("http://localhost:8001/")
        setList(res.data)
    }


    const add =async()=>{
         const res = await axios.post("http://localhost:8001/", {groceryItem: item, isPurchased: 'false'})
         show()
    }

    const update =async(val)=>{
        console.log("Front-End",val.groceryItem)
        const res = await axios.put(`http://localhost:8001/${val.groceryItem}`,
        {isPurchased:'true'})
        show()
   }

    const remove = async(val)=>{
        const res = await axios.delete(`http://localhost:8001/${val}`)
        show()
    }

    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

    const d = new Date();
    let month = months[d.getMonth()];
    

  return (
    <>
        <h2>Monthly Grocery Planning App</h2>
        <div className='js1'>
            <h3>Plan for the month of the {month} </h3>
            <div className='btn-1'>
                <input onChange={(e)=>setItem(e.target.value)} 
                placeholder="Add Shopping Item" >
                </input>
                <button className='o-1' type="submit" onClick={add}>Submit</button>
                
            </div>
            <table border= "1">
                {
                    list &&
                    list.map((el,index)=>{
                        return(
                            <div className="list">
                                <tr>
                                    <td className="pp-1"
                                    style= {{textDecoration: el.isPurchased==='true' ? 'line-through':''}}>
                                    {el.groceryItem}</td>
                                    
                                    <td><button onClick={()=>update(el)}>Purchased</button></td>
                                    <td><button onClick={()=>remove(el.groceryItem)}>X</button></td>
                                </tr>
                            </div>
                        )
                    })
                }
            </table>
        </div>

    </>
  )
}

