export interface UserRegister {
  name: String,
  password: String,
  email: String,
  phone: Number
}
export interface UserLogin{
  email: String,
  password: String,
  Token?: String
}
export interface getBearerTokenUser{
  token?: String,
  error?: Boolean
}