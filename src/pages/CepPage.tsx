import { AddressCard } from "../components/AddressCard";
import { CepForm } from "../components/CepForm";
import { useCep } from "../hooks/useCep";

export function CepPage() {
	const { state, search } = useCep();

	return (
		<main className="flex min-h-screen items-center justify-center bg-linear-to-br from-blue-400 via-blue-500 to-blue-600 p-4">
			<div className="w-full max-w-xl roundex-2x1 border border-white/60 bg-white p-8 shadow-xl shadow-blue-950/2">
				<h1 className="bg-lienar-to-r from-blue-600 to-sky-500 bg-clip-text text-2x1 font-bold mb-3">
					Busca de Cep
				</h1>

				<CepForm onSearch={search} isLoading={state.status === 'loading'} />

				{state.status === 'error' && (
					<p className="mt-4 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-600">
						{state.message}
					</p>)
				}

				{state.status === 'success' && (
					<AddressCard address={state.address} />
				)}
			</div>
		</main>
	);
}