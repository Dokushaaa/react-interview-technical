import { useField } from "formik";

export const InputText = ({ label, ...props }) => {
	const [field, meta] = useField(props);
	return (
		<>
			<div className='input-wrap'>
				<label
					htmlFor={props.id || props.name}
					className={meta.touched && meta.error ? "error-msg" : ""}>
					{label}
				</label>
				<input
					{...field}
					{...props}
					className={meta.touched && meta.error ? "error-msg" : ""}
					autoComplete='off'
				/>
				{meta.touched && meta.error ? (
					<small className='error-msg'>{meta.error}</small>
				) : (
					""
				)}
			</div>
		</>
	);
};
export const InputSelect = ({ label, onChange = null, ...props }) => {
	const [field, meta] = useField(props);

	return (
		<>
			<label
				htmlFor={props.id || props.name}
				className={meta.touched && meta.error ? "custom error-show" : "custom"}>
				{label}
			</label>

			<select
				{...field}
				{...props}
				className={meta.touched && meta.error ? "error-show" : null}
				onChange={(e) => {
					onChange !== null && onChange(e);
					field.onChange(e);
				}}
			/>

			{meta.touched && meta.error ? (
				<span className='error-show'>{meta.error}</span>
			) : null}
		</>
	);
};
export const InputTextArea = ({
	label,
	onChange = null,
	className = "",
	...props
}) => {
	const [field, meta] = useField(props);

	return (
		<>
			<label
				htmlFor={props.id || props.name}
				className={meta.touched && meta.error ? "error-msg" : ""}>
				{label}
			</label>
			<textarea
				className={
					meta.touched && meta.error ? `error-msg ${className}` : className
				}
				{...field}
				{...props}
				autoComplete='off'
				onChange={(e) => {
					onChange !== null && onChange(e);
					field.onChange(e);
				}}></textarea>
			{meta.touched && meta.error ? (
				<small className='error-msg'>{meta.error}</small>
			) : null}
		</>
	);
};

// for image upload:
export const InputFileUpload = ({ label, ...props }) => {
	const [field, meta] = useField(props);
	return (
		<>
			<label
				htmlFor={props.id || props.name}
				className={meta.touched && meta.error ? "custom error-show" : "custom"}>
				{label}
			</label>
			<input
				{...field}
				{...props}
			/>
			{meta.touched && meta.error ? (
				<span className='error--msg'>{meta.error}</span>
			) : null}
		</>
	);
};

{
	/* <div className="input-wrap">
<label htmlFor="">Name</label>
<input type="text" />
<small className='error-msg'>Required*</small>
</div> */
}
