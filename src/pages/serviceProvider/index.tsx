import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { BiArrowToLeft } from "react-icons/bi";
import Button from "../../components/Button";
import { UserContext } from "../../contexts/UserContext";
import { instance } from "../../services/api";
import { toast } from "react-toastify";
import { ProviderContext } from "../../contexts/ServiceProviderContext";
import { ModalCreateService } from "../../components/ModalCreateService";
import { CreateServiceForm } from "../../components/CreateServiceForm";
import { ModalEditService } from "../../components/ModalEditService";
import { EditServiceForm } from "../../components/EditServiceForm";
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
  const { openModalCreateService, openModalEditService, setServiceId } = useContext(ProviderContext);
  const [services, setServices] = useState<iServiceData[]>([]);
  const [servicesUser, setServicesUser] = useState<iServiceData[]>([]);

  useEffect(() => {
    const filterUserService = () => {
      let userServices = services.filter((service) => {
        return service.userId === user?.id;
      });

      setServicesUser(userServices);
    };
    try {
      axios
        .get(`https://pets-json-server-m3.herokuapp.com/services`, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          setServices(res.data);
          filterUserService();
        });
    } catch (error) {}
  }, [services, user?.id]);

  const deleteService = async (id: number) => {
    const token = localStorage.getItem("@NetPetToken:")
    try {
      instance.defaults.headers.authorization = `Bearer ${token}`;
      await
      instance.delete(`/services/${id}`);
      toast.success("Tecnologia excluída com sucesso!", {
        autoClose: 1000,
      });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error.message);
        toast.error(error.message, {
          autoClose: 2000,
        });
      }
    }
  };

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
