// HOOKS
import { useUserToken} from "hooks";

import { SignupUser } from "./SignUpUser";
import { ModifyUser } from "./ModifyUser";

export function MyDataForm() {
  const [userToken, setUserToken] = useUserToken();
  return userToken ? <ModifyUser /> : <SignupUser />;
}
