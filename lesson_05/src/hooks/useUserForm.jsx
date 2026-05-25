import { service } from "../services/users";

export default function useUserForm(addNewUser) {
  const addUser = async (newUser) => {
    try {
      const addedUser = await service.post(newUser);
      addNewUser(addedUser);
    } catch (error) {
      console.log(error.message);
    }
  };

  return { addUser };
}
