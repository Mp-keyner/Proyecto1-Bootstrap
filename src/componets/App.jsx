import Favicon from '../componets/Favicon.png'

export const Body = () => {
    return (
        <div className='container p-5 my-4 rounded'>
            <div className='row pt-3'>
                <div className="col-md-4 col-sm-12 ">
                    <Form />
                </div>
                <Table/>
            </div>
        </div>
    )
}

export const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-5">
                <img src={Favicon} className="mx-4 rounded" alt='logo'/>
                <a className="navbar-brand" href="https://mp-keyner.github.io/" target={"_blank"} rel="noreferrer">Ko</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="https://mp-keyner.github.io/" target={"_blank"} rel="noreferrer">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://mp-keyner.github.io/" target={"_blank"} rel="noreferrer">Features</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://mp-keyner.github.io/" target={"_blank"} rel="noreferrer">Pricing</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="https://mp-keyner.github.io/" target={"_blank"} rel="noreferrer">Disabled</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export const Botones = ({estado, clase}) =>{
    return (
        <button className={clase}>{estado}</button>
    )
}

export const Form = () => {
    return (
        <>
            <form>
                <div className="form-group">
                    <label for="Nombre">Lenguaje *</label>
                    <input type="text" className="form-control" id="Nombre" placeholder="Nombre del lenguaje" />
                </div>
                <div className="form-group">
                    <label for="descripcion">descripcion</label>
                    <textarea className="form-control" id="descripcion" rows="3" placeholder='Este lenguaje me parece ......'></textarea>
                </div>
                <div className="form-group">
                    <label for="programadores">Number de Programadores</label>
                    <input type='number' className='form-control'></input>
                </div>
                <Botones estado='guardar' clase='btn btn-secondary m-2'/>
                <Botones estado='limpiar' clase='btn btn-outline-secondary m-2'/>
            </form>
        </>
    )
}
export const Table = () => {
    return (
        <div className="col-md-8 col-sm-12 text-center bg-dark text-white rounded">
            <h2>Lista de lenguaje</h2>
            <table className='table table-striped table-dark'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Lenguaje</th>
                        <th>Cantidad de programadores</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Javascrips</td>
                        <td>12</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>c++</td>
                        <td>15</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>c#</td>
                        <td>20</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Python</td>
                        <td>30</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
