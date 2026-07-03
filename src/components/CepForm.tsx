import { formatCep } from '../utils/mask';
import { isValidCep } from '../api/utils';
import { useState, type SyntheticEvent } from 'react';

interface CepFormProps {
	onSearch: (cep: string) => void
	isLoading: boolean
}

export function CepForm({ onSearch, isLoading }: CepFormProps) {
	const [cep, setCep] = useState("");

	const canSubmit = isValidCep(cep) && !isLoading;

	const handleSubmit = (event: SyntheticEvent) => {
		event.preventDefault();

		if (!canSubmit) {
			return;
		}

		onSearch(cep);
	};

	return (
		<form onSubmit={handleSubmit} className='flex flex-col gap-3 sm:flex-row'>
			<input 
				value={cep}
				onChange={(event) => setCep(formatCep(event.target.value))} 
				inputMode="numeric"
				placeholder="Digite o Cep"
				className='flex-1 rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:ring-2'
			/>
			<button 
				type="submit" 
				disabled={!canSubmit}
				className='rounded-xl bg-blue-500 px-6 py-3 font-medium text-white shadow-lg shadow-blue-500/30 transition hover:bg-blue-700'
			>
				{isLoading ? 'Buscando...' : 'Buscar'}
			</button>
		</form>
	);
}