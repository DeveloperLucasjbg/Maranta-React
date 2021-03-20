import React,{useState,useEffect} from "react";
import { useForm } from "react-hook-form";
import "./formClass.css";
import Button from "@material-ui/core/Button";

const FormularioDeUsuario = ({setBuyer}) => {
  const { register, handleSubmit} = useForm();

 
  const onSubmit = (data) =>{ 
    setBuyer(data)
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="formClass">
        <label for="name">Nombre</label>
        <input id="name" name="Nombre" ref={register({ required: true })} />
        <label for="Apellido">Apellido</label>
        <input type="text" name="Apellido" ref={register({ required: true })} />

        <label for="Telefono">Telefono</label>
        <input name="Telefono" ref={register({ required: true })} />
        <label for="Email">Email</label>
        <input name="Email" ref={register({ required: true })} />
        <label for="payment">Forma De Pago</label>
        <select id="payment" name="Forma De Pago">
          <option value="Mercado Pago">Marcado Pago</option>
          <option value="Debito">Débito</option>
          <option value="Credito">Crédito</option>
        </select>
        <Button variant="outlined"  type="submit">Confirmar Datos</Button>

      </form>
    </>
  );
};

export default FormularioDeUsuario;
