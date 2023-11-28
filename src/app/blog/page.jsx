import PageIntro from "@/components/PageIntro";

const BlogPage = () => {
  const buttonStyle = {
    display: 'inline-block',
    padding: '10px 15px',
    fontSize: '16px',
    backgroundColor: '#000', // Fondo negro
    color: '#fff', // Texto blanco
    textDecoration: 'none',
    border: 'none',
    borderRadius: '20px',
    cursor: 'pointer',
  };
  return (
    <>
      <PageIntro eyebrow="Blog" title="La Excelencia en Servicios Financieros a Tu Alcance">
        <p style={{ textAlign: 'justify' }}>
        Los trámites financieros son algo esencial en la vida, al momento de cumplir la edad de 18 años 
        se requieren 
        ciertos trámites que se deben cumplir, ya que esto es parte de la legalidad, toda persona 
        debe tener en cuenta que debe estar registrado en algunos sitios como el INE, SAT, o que 
        por voluntad propia desean realizar como para tarjeta de débito, crédito, consultar su AFORE, 
        INFONAVIT, etc.
        Las personas cada vez están más interesadas en recibir información acerca de algunos temas, 
        trámites que tienen dudas para hacer, esta plataforma es una ayuda para poder esparcir algunas preguntas 
        que se tienen.
        </p>
        <br />
        <a href="https://iead.es/recursos-financieros-que-son-para-que-sirven-que-tipos-hay/#:~:text=Los%20recursos%20financieros%20son%20esenciales,trabajar%2C%20y%20mejorar%20la%20productividad." target="_blank" rel="noopener noreferrer" style={buttonStyle}>
          Más información
        </a>
      </PageIntro>
    </>
  );
};

export default BlogPage;
