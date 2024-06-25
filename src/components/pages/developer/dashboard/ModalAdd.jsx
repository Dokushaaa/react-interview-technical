import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Form, Formik } from "formik";
import React from "react";
import { LiaTimesSolid } from "react-icons/lia";
import * as Yup from "yup";
import { string } from "yup";
import { StoreContext } from "../../../../store/StoreContext";
import ModalWrapper from "../../../partials/modals/ModalWrapper";
import {
	InputSelect,
	InputText,
	InputTextArea,
} from "../../../helpers/FormInputs";
import SpinnerButton from "../../../partials/spinners/SpinnerButton";
import {
	setError,
	setIsAdd,
	setMessage,
	setSuccess,
} from "../../../../store/StoreAction";
import { queryData } from "../../../helpers/queryData";
import { FaTimesCircle } from "react-icons/fa";

const ModalAdd = ({ itemEdit }) => {
	const { dispatch, store } = React.useContext(StoreContext);
	const handleClose = () => dispatch(setIsAdd(false));
	// add upload

	const queryClient = useQueryClient();
	const mutation = useMutation({
		mutationFn: (values) =>
			queryData(
				itemEdit ? `/v1/users/${itemEdit.users_aid}` : `/v1/users`,
				itemEdit ? "put" : "post",
				// `/v1/users`,
				// `post`,
				values
			),
		onSuccess: (data) => {
			queryClient.invalidateQueries({ queryKey: ["users"] });
			if (data.success) {
				dispatch(setIsAdd(false));
				dispatch(setSuccess(true));
				dispatch(setMessage(`Record has been successfully saved.`));
			} else {
				dispatch(setError(true));
				dispatch(setMessage(data.error));
				console.log(data.error);
			}
		},
	});

	const initVal = {
		users_fname: itemEdit ? itemEdit.users_fname : "",
		users_mname: itemEdit ? itemEdit.users_mname : "",
		users_sname: itemEdit ? itemEdit.users_sname : "",
		users_workid: itemEdit ? itemEdit.users_workid : "",
		users_email: itemEdit ? itemEdit.users_email : "",
		users_manager: itemEdit ? itemEdit.users_manager : "",
		users_is_active: itemEdit ? itemEdit.users_is_active : "",
	};
	const yupSchema = Yup.object({
		users_fname: string().required("First Name Required*"),
		users_mname: string().required("Middle Name Required*"),
		users_sname: string().required("Surname Required*"),
		users_workid: string().required("WorkId Required*"),
		// deployment only
		users_email: string().email().required("Vaild Email Required*"),
		users_manager: string().required("Employee's Manager*"),
	});
	return (
		<>
			<ModalWrapper position={"center"}>
				<div className='main-modal w-[400px] bg-primary text-content h-auto  rounded-xl'>
					<div className='bg-accent w-full flex items-center text-center px-4 rounded-t-xl text-primary justify-between'>
						<h4 className='mb-0 py-2 text-primary '>Add Employee</h4>
						<button
							className='text-xl text-primary'
							onClick={handleClose}>
							<FaTimesCircle />
						</button>
					</div>

					<div className='modal-body p-4'>
						<Formik
							initialValues={initVal}
							validationSchema={yupSchema}
							onSubmit={async (values) => {
								mutation.mutate(values);
							}}>
							<Form
								action=''
								className='flex flex-col h-full py-2'>
								<div className='grow overflow-y-auto'>
									<div className='input-wrap'>
										<InputText
											label='ID Number'
											type='text'
											name='users_workid'
										/>
									</div>
									<div className='input-wrap'>
										<InputText
											label='First Name'
											type='text'
											name='users_fname'
										/>
									</div>
									<div className='input-wrap'>
										<InputText
											label='Middle Name'
											type='text'
											name='users_mname'
										/>
									</div>
									<div className='input-wrap'>
										<InputText
											label='Last Name'
											type='text'
											name='users_sname'
										/>
									</div>
									<div className='input-wrap'>
										<InputText
											label='Work Email'
											type='text'
											name='users_email'
										/>
									</div>
									<div className='input-wrap'>
										<InputText
											label='Report To'
											type='text'
											name='users_manager'
										/>
									</div>
									<div className='input-wrap'>
										<InputSelect
											label='Status'
											type='text'
											name='users_is_active'>
											<option hidden>Select</option>
											<option value='1'>Active</option>
											<option value='0'>Inactive</option>
										</InputSelect>
									</div>
								</div>
								<div className='form-action'>
									<button
										className='btn btn-form bg-accent text-primary w-1/2 hover:bg-transparent hover:border-accent border hover:text-accent'
										type='submit'>
										{mutation.isPending ? <SpinnerButton /> : "Save"}
										{/* {<SpinnerButton /Savwed} */}
									</button>
									<button
										className='btn btn-form border border-accent transition-all duration-1000 hover:text-primary hover:bg-accent  w-1/2'
										type='button'
										onClick={handleClose}>
										Cancel
									</button>
								</div>
							</Form>
						</Formik>
					</div>
				</div>
			</ModalWrapper>
		</>
	);
};

export default ModalAdd;
