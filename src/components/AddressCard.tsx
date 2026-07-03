import type { Address } from "../api/types";
import { Field } from "./Field";

interface AddressCardProps {
	address: Address
}

export function AddressCard({ address }: AddressCardProps) {
	return (
		<div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
			<Field label="Logradouro" value={address.city} wide />
			<Field label="Bairro" value={address.neighborhood} />
			<Field label="Cidade" value={address.city} />
			<Field label="CEP" value={address.cep} />
			<Field label="DDD" value={address.ddd} />
		</div>
	);
}