import { useState } from "react";
import { fetchAddressByCep } from "../api/cep.service";
import type { Address } from "../api/types";

type CepState = 
	| { status: 'idle' }
	| { status: 'loading' }
	| { status: 'success'; address: Address }
	| { status: 'error'; message: string };

export function useCep() {
	const [state, setState] = useState<CepState>({ status: 'idle' });

	async function search(cep: string) {
		setState({ status: 'loading' });

		try {
			const address = await fetchAddressByCep(cep);

			setState({ status: 'success', address });
		}
		catch (error) {
			const errorMessage = error instanceof Error ? error.message : 'Erro desconhecido';

			setState({ status: 'error', message: errorMessage });
		}
	}

	return { state, search };
};
	