import axios from "axios";

export const client = axios.create({
	baseURL: "https://viacep.com.br/ws",
});