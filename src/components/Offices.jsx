import clsx from "clsx";

function Office({ name, children, invert = false }) {
  return (
    <address
      className={clsx(
        "text-sm not-italic",
        invert ? "text-neutral-300" : "text-neutral-600"
      )}
    >
      <strong className={invert ? "text-white" : "text-neutral-950"}>
        {name}
      </strong>
      <br />
      {children}
    </address>
  );
}

const Offices = ({ invert = false, ...props }) => {
  return (
    <ul role="list" {...props}>
      <li>
        <Office name="MEXICO" invert={invert}>
          Matamoros, Municipio de Tamaulipas
        </Office>
      </li>
      <li>
        <Office name="H. Matamoros" invert={invert}>
        Carretera Lauro Villar Kilometro 6.5,
          <br />
          Tecnológico, 87490
        </Office>
      </li>
    </ul>
  );
};

export default Offices;
