export interface ViaCepResponse {
	cep: string
	logradouro: string
	complemento: string
	bairro: string
	localidade: string
	uf: string
	ddd: string
	erro?: boolean | string
};

export interface Address {
	cep: string
	street: string
	neighborhood: string
	city: string
	state: string
	ddd: string
}