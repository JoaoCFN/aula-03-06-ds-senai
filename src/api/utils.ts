import type { ViaCepResponse, Address } from './types';

export function sanitizeCep(cep: string): string {
	return cep.replace(/\D/g, '');
}

export function isValidCep(cep: string): boolean {
	return sanitizeCep(cep).length === 8;
}

export function mapViaCepResponseToAddress(data: ViaCepResponse): Address {
	return {
		cep: data.cep,
		street: data.logradouro,
		neighborhood: data.bairro,
		city: data.localidade,
		state: data.uf,
		ddd: data.ddd,
	};
}