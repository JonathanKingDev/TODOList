/*
    En este caso las credenciales del view model del componente login coinciden con las credenciales del api-model,
    en caso de que no coincidan podemos hacer un mapeador como este con el que conseguimos:
    Facilitar la gestión y transformación de datos entre la API y los componentes del frontend,
    asegurando que cada parte de la aplicación trabaje con el formato de datos más adecuado para su funcionamiento.
    Esto mejora la separación de concerns, la consistencia, la flexibilidad y reduce la complejidad general del código.
*/

import * as apiModel from "../../services/api/models/login.api-model";
import * as viewModel from "./login.vm";

export const mapCredentialsFormToRequest = (
  credentials: viewModel.AppUser
): apiModel.ApiCredentials => ({
  usernameOrEmail: credentials.username,
  password: credentials.password,
});
