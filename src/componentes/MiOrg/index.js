import "./MiOrg.css"

const MiOrg = (props) => {
    //Estado usando hooks
    //useState()
    //Const [nombreVariable,funcionActualiza] = useState(valorInicial)
    //const [mostrar,actualizarMostrar] = useState (true)
    //const manejarClick = () => {
    //    console.log("Mostrar/ocultar elemento",!mostrar)
    //    actualizarMostrar(!mostrar)
    //}

    return <section className="orgSection">
        <h3 className="tittle">Mi organización</h3>
        <img src="/img/add.png" alt="add" onClick={props.cambiarMostrar}/>
    </section>
}

export default MiOrg