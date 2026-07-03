import { client } from "./client";
import type { Address, ViaCepResponse } from "./types";
import { isValidCep, mapViaCepResponseToAddress, sanitizeCep } from "./utils";

export async function fetchAddressByCep(rawCep: string): Promise<Address> {
	const cep = sanitizeCep(rawCep);

	if (!isValidCep(cep)) {
		throw new Error("CEP inválido. O CEP deve conter exatamente 8 dígitos.");
	}

	const { data } = await client.get<ViaCepResponse>(`/${cep}/json/`);

	if (data.erro) {
		throw new Error("CEP não encontrado.");
	}

	return mapViaCepResponseToAddress(data);
}