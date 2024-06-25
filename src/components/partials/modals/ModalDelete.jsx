import React from "react";
import ModalWrapper from "./ModalWrapper";
import { LiaTimesSolid, LiaTrashAltSolid } from "react-icons/lia";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { queryData } from "../../helpers/queryData";
import { StoreContext } from "../../../store/StoreContext";
import {
	setIsDelete,
	setMessage,
	setSuccess,
} from "../../../store/StoreAction";
import { MdOutlineQuestionMark } from "react-icons/md";
import { FaTimesCircle } from "react-icons/fa";

const ModalDelete = ({
	isVisible,
	position,
	queryKey,
	endpoint,

	setIsError,
}) => {
	const { dispatch, store } = React.useContext(StoreContext);
	const handleClose = () => dispatch(setIsDelete(false));

	const queryClient = useQueryClient();

	const mutation = useMutation({
		mutationFn: (values) => queryData(endpoint, "delete", values),
		onSuccess: (data) => {
			// Invalidate and refetch
			queryClient.invalidateQueries({ queryKey: [queryKey] });

			if (data.success) {
				dispatch(setIsDelete(false));
				dispatch(setSuccess(true));
				dispatch(setMessage("Record Successfully Deleted"));
				// console.log(store.isDelete);
			} else {
				setIsError(true);
				setMessage("Delete failed!");
			}
		},
	});

	const handleDelete = async () => {
		mutation.mutate();
	};
	return (
		<>
			<ModalWrapper position={position}>
				<>
					<div className='parent bg-primary w-1/8 '>
						<ModalWrapper position={"center"}>
							<div
								className={`bg-primary h-[300px] w-[400px] p-5 rounded-xl flex flex-col justify-evenly gap-4 ${
									isVisible === true
										? `border border-content rounded-xl`
										: `none`
								} `}>
								<div className='flex justify-end items-center '>
									<button
										className='text-xl text-accent  '
										onClick={handleClose}>
										<FaTimesCircle />
									</button>
								</div>
								<div className='flex items-center justify-center text-accent text-center text-7xl'>
									<MdOutlineQuestionMark />
								</div>
								<div className='text-center'>
									<h4 className='text-center mb-0'>
										Are you sure you want to delete this record?
									</h4>
									<p>You can't undo this action.</p>
								</div>

								<button
									onClick={handleDelete}
									className='bg-accent rounded-lg p-2 text-primary'>
									Confirm
								</button>
							</div>
						</ModalWrapper>
					</div>
				</>
			</ModalWrapper>
		</>
	);
};

export default ModalDelete;
