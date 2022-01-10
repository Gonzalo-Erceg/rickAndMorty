
import style from "./css/characterGrid.module.css"
import CharacterCard from "./CharacterCard.jsx"
import InfiniteScroll from "react-infinite-scroll-component"

function CharacterGrid(props){
    
    const hasmore = props.hasmore
    const data = props.data
    const setURL = props.seturl
    
    
    if(data.error){
        return(<div className={style.error}>
            <h1>No se ha encontrado ningun personaje</h1>


        </div>)
    }else{
        return(
            <InfiniteScroll
            dataLength={data.results.length}
            hasMore={hasmore}
            next={()=> setURL(data.info.next)}
            
            
            
            >
                <ul className={style.characterList}>
                {data.results.map((e,i)=>
                    <li key={i}><CharacterCard data={e}/></li>
                )}
                </ul>
            </InfiniteScroll>
            
        )
    }
}

export default CharacterGrid