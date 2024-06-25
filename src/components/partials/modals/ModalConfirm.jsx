import React from "react";
import ModalWrapper from "./ModalWrapper";
import { LiaTimesSolid } from "react-icons/lia";
import { PiArchive } from "react-icons/pi";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { queryData } from "../../helpers/queryData";
import { StoreContext } from "../../../store/StoreContext";
import {
	setIsActive,
	setMessage,
	setSuccess,
} from "../../../store/StoreAction";

const ModalConfirm = ({ position, queryKey, endpoint, isArchiving }) => {
	const { dispatch, store } = React.useContext(StoreContext);
	const handleClose = () => dispatch(setIsActive(false));

	const queryClient = useQueryClient();
	const mutation = useMutation({
		mutationFn: (values) => queryData(endpoint, "put", values),
		onSuccess: (data) => {
			// Invalidate and refetch
			queryClient.invalidateQueries({ queryKey: [queryKey] });

			if (data.success) {
				dispatch(setIsActive(false));
				dispatch(setSuccess(true));
				dispatch(
					setMessage(
						`Record successfully ${isArchiving ? "Restored" : "Archived"}.`
					)
				);
				// console.log(isArchiving);
			} else {
				setIsError(true);
				setMessage(data.error);
			}
		},
	});

	const handleConfirm = async () => {
		mutation.mutate({
			isActive: isArchiving,
		});
	};
	return (
		<>
			<ModalWrapper position={position}>
				{/* if */}
				{isArchiving === 0 ? (
					<div className='modal-main max-w-[401px] w-full'>
						<div className='modal-header flex justify-between center bg-warning text-white p-3 px-4 rounded-t-md'>
							<h4 className='mb-0 text-white'>Confirm Archive?</h4>
							<button
								type='button'
								onClick={handleClose}>
								<LiaTimesSolid className='text-xl font-600' />
							</button>
						</div>
						<div className='modal-body p-4 rounded-b-md bg-primary text-content'>
							<div className='flex gap-4 items-center'>
								<PiArchive className='text-4xl text-warning mb-3' />
								<div>
									<h2 className='mb-2'>Archive Record?</h2>
									<p className='mb-5'>
										Are you sure you want to Archive this record?
									</p>
								</div>
							</div>

							<div className='flex gap-2 justify-end'>
								<button
									className='btn btn-warningConfirm btn-form w-1/4'
									onClick={handleConfirm}>
									Confirm
								</button>
								<button
									className='btn btn--cancel btn-form w-1/4'
									onClick={handleClose}>
									Cancel
								</button>
							</div>
						</div>
					</div>
				) : // else if archive is true
				isArchiving === 1 ? (
					<div className='modal-main max-w-[401px] w-full'>
						<div className='modal-header flex justify-between bg-info text-white p-3 px-4 rounded-t-md'>
							<h4 className='mb-0 text-white'>Confirm Restoration?</h4>
							<button
								type='button'
								onClick={handleClose}>
								<LiaTimesSolid />
							</button>
						</div>
						<div className='modal-body p-4 rounded-b-md bg-primary text-content'>
							<div className='flex flex-col gap-4 items-center'>
								<PiArchive className='text-4xl text-info mb-3' />
								<div className='text-center'>
									<h2 className='mb-2'>Restore Record?</h2>
									<p className='mb-5'>
										Are you sure you want to Restore this record?
									</p>
								</div>
							</div>

							<div className='flex gap-2 justify-center w-full'>
								<button
									className='btn btn--info btn-form w-1/2'
									onClick={handleConfirm}>
									Confirm
								</button>
								<button
									className='btn btn--cancel btn-form w-1/2'
									onClick={handleClose}>
									Cancel
								</button>
							</div>
						</div>
					</div>
				) : (
					// else
					<div>PutError.Data</div>
				)}
			</ModalWrapper>
		</>
	);
};

export default ModalConfirm;
