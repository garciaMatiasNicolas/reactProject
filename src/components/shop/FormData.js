import { useContext, useState } from "react"
import { useForm } from "react-hook-form";
import { CartContext } from "../../context/Context";
import Order from "./Order";


const FormData = ()=>{

    const {itemsCart, order, setOrder} = useContext(CartContext);
    
    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = (data) =>{
      setOrder({...order, data, itemsCart})
    }

return(

    <form onSubmit={handleSubmit(onSubmit)}>
        <div className="m-3">
            <input name='nombre' type='text' className='form-control m-3 w-75' placeholder='Nombre completo' {...register('nombre')} required/>
            <input name='email' type='email' className='form-control m-3 w-75' placeholder='Email' {...register('emial')} required/>
            <input name='direccion' type='adress' className='form-control m-3 w-75' placeholder='Direccion' {...register('direccion')} required/>
            <input name='telefono' type='tel' className='form-control m-3 w-75' placeholder='Telefono' {...register('telefono')} required/>
            <button className="btn App-btn btn-sm text-white m-3">Validar datos</button>
        </div>
    </form>
)
}

export default FormData