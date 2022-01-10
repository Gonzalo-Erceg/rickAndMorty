import {useEffect,useState} from "react"
import CharacterGrid from "../components/characterGrid.jsx"
import style from "./css/Home.module.css"

function Home(){
    const [hasmore,setHasmore] = useState(true)
    const [data, setData] = useState({results:[]})
    const [URL,setURL] = useState("https://rickandmortyapi.com/api/character/")
    function seturl(e){
        e.preventDefault()
        const name = `name=${e.target.name.value}`;
        const status = `status=${e.target.status.value}`;
       const gender = `gender=${e.target.gender.value}`
       setData({results:[]})
        setURL(`https://rickandmortyapi.com/api/character/?${name}&${status}&${gender}`)

    }
    
    useEffect(()=>{


        fetch(URL).then(e=>e.json()).then(e=>{
            if(!e.error){
                if(!e.info.next){
                    setHasmore(false)
                }
            }
            setData(prev=>{
            if(e.error){
                setData(e)
            }else{
                return{info:e.info, results:prev.results.concat(e.results)}
            }
        })})


        
    },[URL])
    
    

    return(
        <>
        <div className={style.banner}> <img className={style.imagen} src="./img/banner.png"  alt="" /></div>
        <form className={style.formulario} onSubmit={seturl} >
           <div>
           <input type="text" name="name" id="name" placeholder="Nombre del personaje"/>
           </div>
            
            <div>
            <label htmlFor="status">Estado:</label>
            <select name="status" id="status">
                <option value="">------</option>
                <option value="alive">vivo</option>
                <option value="dead">muerto</option>
                <option value="unknown">desconocido</option>
            </select>
            </div>
            <div>
                <label htmlFor="gender">Genero:</label>
                <select name="gender" id="gender">
                    <option value="">------</option>
                    <option value="male">Hombre</option>
                    <option value="female">Mujer</option>
                    <option value="genderless">sin genero</option>
                    <option value="unknown">desconocido</option>
                </select>
            </div>
            <div>
                <button type="submit">Filtrar</button>
            </div>
        </form>
        <CharacterGrid data={data} seturl={setURL} hasmore={hasmore}/>
        
        </>
        
    )
}


export default Home