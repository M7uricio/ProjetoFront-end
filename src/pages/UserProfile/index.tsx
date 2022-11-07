import userEvent from "@testing-library/user-event";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

export interface iAddPet {
  userId: number;
  name: string;
  type: string;
  picture: string;
  race: string;
}

const Profile = () => {
  const { user } = useContext(UserContext);
  console.log(user);
  return (
    <>
      <div>
        <div>
          {/* <link>HOME TESTE</link> */}
          <img src="Logo Pet 5" alt="" />
        </div>
        <div>
          <div>
            <img src="" alt="" />
            <p>{user?.name}</p>
            <button>Editar Perfil</button>
            <button>Adicionar Pet</button>
          </div>
        </div>
      </div>
      <div>
        <ul>{}</ul>
      </div>
    </>
  );
};

export default Profile;
