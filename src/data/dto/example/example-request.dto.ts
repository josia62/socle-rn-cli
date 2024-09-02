export type ExampleRequestDTO = {
  username:string
  email: string;
  sex: string;
  agreeToTerms: boolean,
  selectedOption: string,
};

export const defaultExampleRequest  = {
  username: "",
  email: "",
  sex: "",
  agreeToTerms: false,
  selectedOption: '3',
}

export const EXAMPLE_FIELD  = {
  USER_NAME: 'username',
  EMAIL: 'email',
  SEX: 'sex',
  AGREE_TO_TERMS: "agreeToTerms",
  SELECTED_OPTION: 'selectedOption',
}


export const EXAMPLE_TITLE  = {
  USER_NAME: "Nom d'utilisateur",
  EMAIL: 'Adresse email',
  SEX: 'Votre sexe ',
  AGREE_TO_TERMS: "J'accepte les termes et conditions"
}


