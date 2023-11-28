import React from "react";
import FadeIn from "./FadeIn";
import TextInput from "./TextInput";
import RadioInput from "./RadioInput";
import Button from "./Button";

const ContactForm = () => {
  return (
    <FadeIn>
      <form>
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Consulta de trabajos
        </h2>
        <div className="isolate mt-6 -space-y-px rounded-2xl bg-white/50">
          <TextInput label="Nombre" name="name" autoComplete="name" />
          <TextInput
            label="Correo"
            type="email"
            name="email"
            autoComplete="email"
          />
          <TextInput
            label="Compañia"
            name="company"
            autoComplete="organization"
          />
          <TextInput label="Telefono" type="tel" name="phone" autoComplete="tel" />
          <TextInput label="Descripción" name="message" />
          <div className="border border-neutral-300 px-6 py-8 first:rounded-t-2xl last:rounded-b-2xl">
            <fieldset>
              <legend className="text-base/6 text-neutral-500">Presupuesto</legend>
            </fieldset>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-8">
              <RadioInput label="$500 – $1000" name="budget" value="25" />
              <RadioInput label="$1000 – $1500" name="budget" value="50" />
              <RadioInput label="$1500 – $2000" name="budget" value="100" />
              <RadioInput label="Más de $2000" name="budget" value="150" />
            </div>
          </div>
        </div>
        <Button type="submit" className="mt-10">
          Enviar
        </Button>
      </form>
    </FadeIn>
  );
};

export default ContactForm;
