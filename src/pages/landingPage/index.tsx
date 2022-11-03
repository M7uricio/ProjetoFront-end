import { DivLandingPage } from "./style";
import logo from "../../assets/img/logoPet.png";
import { Title } from "../../styles/title";
import Link from "../../components/Links";

const LandingPage = () => {
  return (
    <DivLandingPage>
      <div className="navLandinPage">
        <Link to="/login">Login</Link>
        <div className="logo">
          <div className="writeLogo">
            <Title variant="title1" color="var(--grey-2)">
              Net
            </Title>
            <Title variant="title1" color="var(--brand-2)">
              Pet
            </Title>
          </div>
          <img src={logo} alt="" />
        </div>
        <Link to="/register">Registre-se</Link>
      </div>
      <div className="registerServices">
        <Title variant="title2" color="var(--grey-1)">
          Caso queria registrar a sua empresa
        </Title>
        <Link to="/register" variant="LinkWrite">
          clique aqui !
        </Link>
      </div>
    </DivLandingPage>
  );
};

export default LandingPage;
