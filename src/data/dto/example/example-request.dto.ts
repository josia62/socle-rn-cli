export type ExampleRequestDTO = {
  username:string
  email: string;
  sex: string;
  agreeToTerms: boolean
};

export const defaultExampleRequest  = {
  username: "",
  email: "",
  sex: "",
  agreeToTerms: false
}

export const EXAMPLE_FIELD  = {
  USER_NAME: 'username',
  EMAIL: 'email',
  SEX: 'sex',
  AGREE_TO_TERMS: "agreeToTerms"
}


export const EXAMPLE_TITLE  = {
  USER_NAME: "Nom d'utilisateur",
  EMAIL: 'Adresse email',
  SEX: 'Votre sexe ',
  AGREE_TO_TERMS: "J'accepte les termes et conditions"
}


