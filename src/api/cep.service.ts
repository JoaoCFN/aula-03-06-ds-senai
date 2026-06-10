import { client } from "./client";

export async function fetchAddressByCep(cep: string) {
	const response = await client.get(`/cep/${cep}/json/`);
	return response.data;
}