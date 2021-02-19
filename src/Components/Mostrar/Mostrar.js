import UseFilter from "../../UseForm/UseFilter"

const Vista = () => {
    const { proyectar, lunes, Martes, Miercoles, Jueves, Viernes, Sabado, Domingo } = UseFilter()
    
    return (
        <div>
            <div className="container">
                <div className="box">
                    <>{proyectar}</>
                    <a href="https://www.youtube.com/" className="buy">Buy New</a>
                    <div className="circle"></div>
                    <img src="https://www.seekpng.com/png/full/169-1698224_minus-aleja-pinterest-granjas-sol-minus.png" className="product" />
                </div>
            </div>
        </div>
    );
}
export default Vista;