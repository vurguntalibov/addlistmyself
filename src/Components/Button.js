import React from 'react'
import "../Css/Button.css"
import user from "../Img/user.png"



const Button = () => {
  
      const[show,setAddShow]=React.useState(false);
      const [name, setName] = React.useState("");
      const [surname, setSurname] = React.useState("");
      const [work, setWork] = React.useState("")

      const [list, setList] = React.useState(
        JSON.parse(localStorage.getItem("list0324")) || []
      );

      const dele=(index)=>{
       let x=list;
       x.splice(index,1)
       setList([...x])
       localStorage.setItem("list0324", JSON.stringify(x))
      }
      
      return (
    <div>

   <button className='Button'  onClick={()=>setAddShow(!show)}> add
   </button>
     

   {show && 
   <div className='page'>
          <div>
          <label>Name</label>
        <div>  <input onChange={(e) => setName(e.target.value)}
          /></div>
          <label>Surname</label>
          <div><input onChange={(e) => setSurname(e.target.value)}
          /></div>

        <label>Work</label>
          <div><input onChange={(e) => setWork(e.target.value)}
          /> </div>

          <button
           className="save"
            onClick={() => {
                let newList = list;
                newList.push({
                    name: name,
                    surname: surname,
                    work: work
                })
                localStorage.setItem("list0324", JSON.stringify(newList))
                setList(newList)
                setAddShow(false)

                

            }}
             >Save </button> 
            </div>  </div>
          }
       <div className='card'>
      {list.map((item,index)=>(
        <div className='inner'>
          <div><img src={user} style={{height:"50px",width:"100px"}}></img></div>
      <div className='name' key={index}>
      <div className='name'>name:{item.name}</div> 
      <div className='surname'>surname:{item.surname}</div> 
      <div className='work'>work:{item.work}
      </div>
      <button onClick={()=>{dele()}}>Delete</button>
      
      
      
      
      
      
      
      
       </div>
      </div>
   ))

   } </div>
    
   
   
    </div>
   )
}

export default Button