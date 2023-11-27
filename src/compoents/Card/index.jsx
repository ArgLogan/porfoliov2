import './card.css'

const Card = (props)=>{
    return(
        <div className="c-card">
            <div className='foto'>
                <img src="../imgs/Banner.jpg" alt="foto portada" />
            </div>
            <h1>DESCRIPCION</h1>
            <h4>detalle</h4>
        </div>
    )
}

export default Card