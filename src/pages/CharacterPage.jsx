import {useParams} from "react-router-dom"
import {useEffect,useState} from "react"
import style from "./css/CharacterPage.module.css"
function CharacterPage(){
    const [character, setCharacter] = useState()
    const { charid } = useParams()
    
    useEffect(()=>{
        fetch(`https://rickandmortyapi.com/api/character/${charid}`).then(e=>e.json()).then(data=>setCharacter(data))
    },[charid])
    
    
    if(character){
        return(
            <div className={style.container}>
                <h1 className={style.name}>{character.name}</h1>
                <img src={character.image} alt="" /> 
                <ul>
                    <li>Especie: {character.species}</li>
                    <li>Genero: {character.gender}</li>
                    <li>Estado: {character.status}</li>
                    <li>Ultima Localizacion: {character.location.name}</li>
                    <li>Aparecio en {character.episode.length} episodio/s</li>
                    <li></li>
                </ul>
            </div>
        )
    }else{
        return null
    }
}



export default CharacterPage