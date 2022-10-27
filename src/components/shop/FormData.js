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
<div className="modal-body">
    <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mt-5">
            <input name='nombre' type='text' className='form-control m-3 w-75' placeholder='Nombre completo' {...register('nombre')} required autoComplete="off"/>
            <input name='email' type='email' className='form-control m-3 w-75' placeholder='Email' {...register('emial')} required autoComplete="off"/>
            <input name='direccion' type='adress' className='form-control m-3 w-75' placeholder='Direccion' {...register('direccion')} required autoComplete="off"/>
            <input name='telefono' type='tel' className='form-control m-3 w-75' placeholder='Telefono' {...register('telefono')} required autoComplete="off"/>
            <button className="btn App-btn btn-sm text-white m-3">Validar datos</button>
        </div>
    </form>
    <div className='modal-footer'>
        <Link to={'/cart/order'} >
            <button id="btn-end" disabled className='text-white btn mt-3 App-btn btn-sm' data-bs-dismiss="modal" aria-label="Close">Finalizar</button>
        </Link>
    </div>
</div>
)
}

export default FormData