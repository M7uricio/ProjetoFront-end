import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { toast } from "react-toastify";
import { ProviderContext } from "../../contexts/ServiceProviderContext";
import { UserContext } from "../../contexts/UserContext";
import { iServiceData } from "../../pages/serviceProvider";
import { instance } from "../../services/api";
import { serviceSchema } from "../../validations/createServiceSchema";
import Button from "../Button";
import { useForm } from "react-hook-form";

export const CreateServiceForm = () => {
    const { user } = useContext(UserContext);
    const {setModalCreate} = useContext(ProviderContext)

    const {register, handleSubmit, formState: {errors}} = useForm<iServiceData>({resolver: yupResolver(serviceSchema)})

    const createService = async (data: iServiceData) => {
        const newData = {
          userId: user?.id,
          servicename: data.servicename,
          cnpj: data.cnpj,
          phone: data.phone,
          description: data.description,
          typeofservice: data.typeofservice,
          images: data.images,
          logo: data.logo
        };
        const token = localStorage.getItem("@NetPetToken:")
        try {
          instance.defaults.headers.authorization = `Bearer ${token}`;
          await
          instance.post("/services", newData);
          toast.success("Seviço cadastrado com sucesso", {
            isLoading: false,
            autoClose: 1000,
          })
          setModalCreate(false)
        } catch (error) {
          console.log(error)
          toast.error(`${error}`, {
            isLoading: false,
            autoClose: 1000,
          })
        }
      }

    return(
            <div>
                <form id="createService" onSubmit={handleSubmit(createService)}>
                        <label htmlFor="">Nome do serviço</label>
                        <input type="text" placeholder="nome do serviço" {...register("servicename")}/>
                        {errors.servicename?.message}
                        <label htmlFor="">CNPJ</label>
                        <input type="text" placeholder="CNPJ" {...register("cnpj")}/>
                        {errors.cnpj?.message}
                        <label htmlFor="">Telefone</label>
                        <input  type="number" placeholder="(00)0000-0000" {...register("phone")}/>
                        {errors.phone?.message}
                        <label htmlFor="">Descrição</label>
                        <input type="text" placeholder="Conte sobre o seu serviço" {...register("description")}/>
                        {errors.description?.message}
                        <label htmlFor="">Tipo de serviço</label>
                        <select id="" placeholder="Em qual categoría o seu serviço se encaixa?" {...register("typeofservice")}>
                          <option value="Veterinaria">Veterinária</option>
                          <option value="Hotel">Hotel</option>
                          <option value="Petshop">PetShop</option>
                          <option value="Outros">Outros</option>
                        </select>
                        {errors.typeofservice?.message}
                        <label htmlFor="">Imagens do serviço</label>
                        <input type="text" placeholder="url da imagem" {...register("images")}/>
                        {errors.images?.message}
                        <label htmlFor="">Logo da empresa</label>
                        <input type="text" placeholder="url da imagem" {...register("logo")}/>
                        {errors.logo?.message}
                        <Button type="submit">Cadastrar serviço</Button>
                </form>
            </div>
    )
}