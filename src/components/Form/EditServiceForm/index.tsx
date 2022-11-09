import { useContext } from "react";
import { toast } from "react-toastify";
import Button from "../../Button";
import { useForm } from "react-hook-form";
import axios from "axios";
import { yupResolver } from "@hookform/resolvers/yup";
import { editServiceSchema } from "../../../validations/editServiceSchema";
import { instance } from "../../../services/api";
import { ModalContext } from "../../../contexts/ModalContext";
import { ServiceContext } from "../../../contexts/ServicesContext";

export interface iServiceDataEdit {
  cnpj?: string;
  description?: string;
  id?: number;
  images?: string[];
  logo?: string;
  phone?: string;
  servicename?: string;
  typeofservice?: string;
  userId?: number;
}

export const EditServiceForm = () => {
  const { setModalEdit } = useContext(ModalContext);
  const { service, servicesUser, setServicesUser } = useContext(ServiceContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iServiceDataEdit>({
    resolver: yupResolver(editServiceSchema),
    defaultValues: {
      servicename: service?.servicename,
      cnpj: service?.cnpj,
      phone: service?.phone,
      description: service?.description,
      typeofservice: service?.typeofservice,
      images: service?.images,
      logo: service?.logo,
    },
  });

  const patchService = async (data: iServiceDataEdit) => {
    const token = localStorage.getItem("@NetPetToken:");
    try {
      instance.defaults.headers.authorization = `Bearer ${token}`;
      const resp = await instance.patch(`/services/${service?.id}`, data);
      toast.success("Seviço editado com sucesso", {
        isLoading: false,
        autoClose: 1000,
      });
      setServicesUser([
        ...servicesUser.filter(
          (element) => element.servicename !== service?.servicename
        ),
        resp.data,
      ]);
      console.log(resp);
      setModalEdit(false);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error);
        toast.error(error.message, {
          autoClose: 2000,
        });
      }
    }
  };

  return (
    <div>
      <form id="editService" onSubmit={handleSubmit(patchService)}>
        <label htmlFor="">Nome do serviço</label>
        <input
          type="text"
          placeholder="nome do serviço"
          {...register("servicename")}
        />
        {errors.servicename?.message}
        <label htmlFor="">CNPJ</label>
        <input type="text" placeholder="CNPJ" {...register("cnpj")} />
        {errors.cnpj?.message}
        <label htmlFor="">Telefone</label>
        <input
          type="number"
          placeholder="(00)0000-0000"
          {...register("phone")}
        />
        {errors.phone?.message}
        <label htmlFor="">Descrição</label>
        <input
          type="text"
          placeholder="Conte sobre o seu serviço"
          {...register("description")}
        />
        {errors.description?.message}
        <label htmlFor="">Tipo de serviço</label>
        <select
          id=""
          placeholder="Em qual categoría o seu serviço se encaixa?"
          {...register("typeofservice")}
        >
          <option value="Veterinaria">Veterinária</option>
          <option value="Hotel">Hotel</option>
          <option value="Petshop">PetShop</option>
          <option value="Outros">Outros</option>
        </select>
        {errors.typeofservice?.message}
        <label htmlFor="">Imagens do serviço</label>
        <input
          type="text"
          placeholder="url da imagem"
          {...register("images")}
        />
        {errors.images?.message}
        <label htmlFor="">Logo da empresa</label>
        <input type="text" placeholder="url da imagem" {...register("logo")} />
        {errors.logo?.message}
        <Button type="submit">Editar serviço</Button>
      </form>
    </div>
  );
};
