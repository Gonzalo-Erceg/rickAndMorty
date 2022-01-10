import style from "./css/footer.module.css"

function Footer(){
    return(
        <div className={style.footer}>
            <div>
            <span>App create by Gonzalo Erceg</span>
            <div><a href="https://github.com/Gonzalo-Erceg" target="__BLANK">Ir a mi Github</a></div>
            </div>
        </div>
    )
}


export default Footer