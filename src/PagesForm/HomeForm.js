import Vista from "../Components/VistaHome/Vista"

const HomeFrom = () => {
    return (
      <div>
        <Vista />
        <div className="Routes">
          <a href="/home"><i><b>Agregar +</b></i></a>
        </div>
      </div>
    );
}
export default HomeFrom;