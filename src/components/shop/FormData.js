import { useContext } from "react"
import { useForm } from "react-hook-form";
import { CartContext } from "../../context/Context";
import { Link } from "react-router-dom";


const FormData = ()=>{

    const {itemsCart, order, setOrder, totalPrice} = useContext(CartContext);
    
    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = (buyer) =>{
      setOrder({...order, buyer, itemsCart, totalPrice});
      let btn = document.getElementById('btn-end');
      btn.removeAttribute('disabled', '')
    }

return(
<>
    <form onSubmit={handleSubmit(onSubmit)}>
        <div className="m-3">
            <input name='nombre' type='text' className='form-control m-3 w-75' placeholder='Nombre completo' {...register('nombre')} required/>
            <input name='email' type='email' className='form-control m-3 w-75' placeholder='Email' {...register('emial')} required/>
            <input name='direccion' type='adress' className='form-control m-3 w-75' placeholder='Direccion' {...register('direccion')} required/>
            <input name='telefono' type='tel' className='form-control m-3 w-75' placeholder='Telefono' {...register('telefono')} required/>
            <button className="btn App-btn btn-sm text-white m-3">Validar datos</button>
        </div>
    </form>
    <div className='modal-footer'>
        <Link to={'/cart/order'} >
            <button id="btn-end" disabled className='text-white btn mt-3 App-btn btn-sm' data-bs-dismiss="modal" aria-label="Close">Finalizar</button>
        </Link>
    </div>
</>
)
}

export default FormData