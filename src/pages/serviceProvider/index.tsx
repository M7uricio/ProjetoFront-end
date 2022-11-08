import { useContext } from "react";
import { BiArrowToLeft } from "react-icons/bi";
import Button from "../../components/Button";
import { UserContext } from "../../contexts/UserContext";
import { ProviderContext } from "../../contexts/ServiceProviderContext";
import { ModalCreateService } from "../../components/ModalCreateService";
import { CreateServiceForm } from "../../components/CreateServiceForm";
import { ModalEditService } from "../../components/ModalEditService";
import { EditServiceForm } from "../../components/EditServiceForm";
import { ModalContext } from "../../contexts/ModalContext";
import { ModalProfile } from "../../components/Modal/EditProfileUser";
import { ServiceContext } from "../../contexts/ServicesContext";
// import logo from "../../assets/img/logoPet.png";

export interface iServiceData {
  cnpj: string;
  description: string;
  id: number;
  images: string[];
  logo: string;
  phone: string;
  servicename: string;
  typeofservice: string;
  userId: number;
}

export function ServiceProvider() {
  const { user } = useContext(UserContext);
  const { deleteService, servicesUser } = useContext(ServiceContext);
  const { openModalCreateService, openModalEditService, setServiceId } =
    useContext(ProviderContext);
  const { openModalEditUser } = useContext(ModalContext);

  return (
    <>
      <nav>
        <BiArrowToLeft />
        {/* <img src={logo} alt="" /> */}
        <section>
          <div>
            <img src="" alt="" />
            <h1>{user?.name}</h1>
          </div>
          <div>
            <Button onClick={() => openModalCreateService()}>
              cadastrar novo serviço
            </Button>
            <Button onClick={() => openModalEditUser()}>Editar perfil</Button>
          </div>
        </section>
      </nav>
      <main>
        <ModalCreateService>
          <CreateServiceForm />
        </ModalCreateService>
        <ModalEditService>
          <EditServiceForm />
        </ModalEditService>
        <ModalProfile />
        <ul>
          {servicesUser.map((service) => {
            return (
              <li key={service.id}>
                <div>
                  <img src={service.logo} alt="" />
                  <span>{service.typeofservice}</span>
                </div>
                <h2>{service.servicename}</h2>
                <p>{service.description}</p>
                <p>{service.phone}</p>
                <Button
                  onClick={() => {
                    openModalEditService();
                    setServiceId(service.id);
                  }}
                >
                  Editar serviço
                </Button>
                <Button onClick={() => deleteService(service.id)}>
                  Excluir serviço
                </Button>
              </li>
            );
          })}
        </ul>
      </main>
    </>
  );
}
