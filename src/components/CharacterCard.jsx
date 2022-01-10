import {Link} from "react-router-dom"


import style from "./css/CharacterCard.module.css"


function CharacterCard(props){
    const data = props.data
    
    return(
        <div className={style.card}>
            <div className={style.imgcontainer}><img src={data.image} alt={data.name} /></div>
            <Link to={`/character/${data.id}`}><div className={style.linkContainer}>{data.name}</div></Link>
        </div>
    )
}


export default CharacterCard