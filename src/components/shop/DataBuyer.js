import { Link } from "react-router-dom"
import FormData from "./FormData";

const DataBuyer = () => {;

    return(
        <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">Completa tus datos</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <FormData />
                <div className='modal-footer'>
                    <Link to={'/cart/order'} >
                        <button className='text-white btn mt-3 App-btn btn-sm' data-bs-dismiss="modal" aria-label="Close">Finalizar</button>
                    </Link>
                </div>
            </div>
        </div>
    </div>
    )
}

export default DataBuyer