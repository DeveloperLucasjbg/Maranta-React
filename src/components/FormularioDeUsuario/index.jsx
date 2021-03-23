import React from "react";
import { useForm } from "react-hook-form";
import "./formClass.css";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

const FormularioDeUsuario = ({ setBuyer,setValid }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    setBuyer(data);
    setValid(true)
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="formClass">
        <TextField
          inputRef={register({ required: true })}
          label="Nombre"
          name="Nombre"
        />
        <TextField
          inputRef={register({ required: true })}
          label="Apellido"
          name="Apellido"
        />
        <TextField
          inputRef={register({ required: true })}
          label="Telefono"
          name="Telefono"
        />
        <TextField
          inputRef={register({ required: true })}
          label="Email"
          name="Email"
        />

        <Button variant="outlined" type="submit">
          Confirmar Datos
        </Button>
      </form>
    </>
  );
};

export default FormularioDeUsuario;
