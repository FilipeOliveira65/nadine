// import logo from './logo.svg';
import "./help.css";
import "./style.css";
import Header from "./components/header";
import Principal from "./components/principal";
import Professionals from "./components/professionals";
import List from "./components/list";
import ListItem from "./components/list-item";
import LifeValorization from "./components/cvv";
import Footer from "./components/footer";



export default function App() {
  const professionalsInformations = [
    {
      institute: "Instituto de psicologia da USP:",
      adress: "Av. Prof. Mello Moraes, 1721, Bloco D - Butatã - São Paulo",
      phone: "3091-8248",
      email: "clinica@usp.br",
    },

    {
      institute: "Universidade Prebiteriana Mackenzie:",
      adress: "Rua Piaui, 181 - Higienópolis - São Paulo",
      phone: "2114-8342",
    },

    {
      institute: "UNINOVE - Campus Vergueiro:",
      adress: "Rua Vergueiro, 235 - Liberdade - São Paulo",
      phone: "2633-9000",
    },

    {
      institute: "UNIB - Universidade Ibirapuera:",
      adress: "Avenida Interlagos, 1329 - Chácara Flora - São Paulo",
      phone: "5694-7961",
    },

    {
      institute: "UNIP - Campus Vergueiro",
      adress: "Rua Apeninos, 267 - Aclimação - São Paulo ",
      phone: "3341-4250 ou 3347-1000",
    },

    {
      institute: "UNISUL - Campus São Miguel",
      adress: "Av. Dr. Ussiel Cirilo, 255 - Vila Jacuí - São Paulo",
      phone: "2037-5853",
    },

    {
      institute: "UNISUL - Campus Anália Franco",
      adress: "Av. Regente Feijó, 1295 - Anália Franco - São Paulo",
      phone: "2268-0867",
    },

    {
      institute: "UNISUL - Campus Liberdade",
      adress: "Rua Galvão Bueno, 868 - 1° andar - Liberdade - São Paulo",
      phone: "3385-3108 ",
    },

    {
      institute: "Clínica Aberta de Psicanálise na Casa do Povo",
      adress: "Ruas Três Rios, 252 - Bom Retiro - São Paulo",
      phone: "3227-4015",
    },
  ];

  console.log(professionalsInformations[0].adress);

  return (
    <>
      <Header />
      <Principal>
        <h1>Hey, ta afim de profissionais gratuitos?</h1>

        <p>Se liga nessa lista:</p>

        {professionalsInformations.map((professionals, index) => (
          <Professionals key={index}>
            <h3>{professionals.institute}</h3>

            <List>
              <ListItem category="Endereço:" item={professionals.adress} />
              <ListItem category="Telefone:" item={professionals.phone} />
              <ListItem
                category={professionals.email != null ? "E-mail:" : " "}
                item={professionals.email}
              />
            </List>
          </Professionals>
        ))}

        <LifeValorization />
      </Principal>
      <Footer />
    </>
  );
}

