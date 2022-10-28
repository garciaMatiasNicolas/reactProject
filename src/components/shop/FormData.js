import { useContext } from "react"
import { useForm } from "react-hook-form";
import { CartContext } from "../../context/Context";
import { Link } from "react-router-dom";


const FormData = ()=>{

    const {itemsCart, order, setOrder, totalPrice, setTotalPrice} = useContext(CartContext);
    
    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = (buyer) =>{
      setOrder({...order, buyer, itemsCart, totalPrice});
      let btn = document.getElementById('btn-end');
      btn.removeAttribute('disabled', '')
    }

    const handleOnChange = (e) => {
        const value = e.target.value
        if(value === 'SI'){
            setTotalPrice(totalPrice.push(500));
            e.target.setAttribute("disabled", "");
            setTotalPrice(totalPrice.reduce((a,b)=> a + b, 0))
        };
    }

return(
<div>
    <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mt-5">
            <input name='nombre' type='text' className='form-control w-100 rounded-0 mt-3' placeholder='Nombre completo' {...register('nombre')} required autoComplete="off"/>
            <input name='email' type='email' className='form-control w-100 rounded-0 mt-3' placeholder='Email' {...register('emial')} required autoComplete="off"/>
            <input name='direccion' type='adress' className='form-control w-100 rounded-0 mt-3' placeholder='Direccion' {...register('direccion')} required autoComplete="off"/>
            <input name='telefono' type='tel' className='form-control w-100 rounded-0 mt-3' placeholder='Telefono' {...register('telefono')} required autoComplete="off"/>
            <div className="mt-3">
                <h2 className="App-paragraph">¿Desea agregar envio? (Solo Cordoba capital + 500$)</h2>
                <select id="value" onChange={handleOnChange} className="form-select form-select-sm w-100 rounded-0">
                    <option selected disabled="disabled" aria-required>Seleccione una opcion</option>
                    <option >SI</option>
                    <option>NO</option>
                </select>
            </div>
            <button className="btn App-btn btn-sm text-white mt-3">Validar datos</button>
        </div>
    </form>
    <div>
        <Link to={'/cart/order'} >
            <button id="btn-end" disabled className='text-white btn mt-3 App-btn btn-sm' data-bs-dismiss="modal" aria-label="Close">Finalizar 
            <span className="ms-3">
            <i class="fa-solid fa-arrow-right"></i>
            </span>
            </button>
        </Link>
    </div>
</div>
)
}

export default FormData