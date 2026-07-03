interface FieldProps {
	label: string
	value: string
	wide?: boolean
}

export function Field({ label, value, wide }: FieldProps) {
	return (
		<div className={`rounded-xl border border-blue-100 bg-blue-500/60 p-3 dark:border-slate-700 ${wide ? 'sm:col-span-2': ''}`}>
			<p
				className="text-xs font-semibold uppercase tracking-mode text-blue-500 dark:text-blue-500"
			>{label}</p>
			<p className='text-white dark:text-slate-100'>
				{value || '-'}
			</p>
		</div>
	);
}