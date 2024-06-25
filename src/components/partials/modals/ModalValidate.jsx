import React from "react";
import ModalWrapper from "./ModalWrapper";
import { LiaTimesSolid } from "react-icons/lia";
import { RiInformationLine } from "react-icons/ri";
import { StoreContext } from "../../../store/StoreContext";
import { setError } from "../../../store/StoreAction";

const ModalValidate = ({ position }) => {
	const { dispatch, store } = React.useContext(StoreContext);
	const handleClose = () => {
		dispatch(setError(false));
	};
	return (
		<>
			<ModalWrapper position={position}>
				<div className='modal-main max-w-[400px] w-full'>
					<div className='modal-header flex justify-between center bg-warning text-white p-3 px-4 rounded-t-md'>
						<h4 className='mb-0 text-white'>Confirm Validation?</h4>
						<button
							type='button'
							onClick={handleClose}>
							<LiaTimesSolid className='text-xl font-600' />
						</button>
					</div>
					<div className='modal-body p-4 rounded-b-md bg-secondary text-content text-center'>
						<RiInformationLine className='text-4xl mx-a text-info mb-3' />
						<h2 className='mb-2'>Validation</h2>
						<p className='mb-5'>Record already exists!</p>
						<button className='btn btn--info btn-form w-full'>Okay</button>
					</div>
				</div>
			</ModalWrapper>
		</>
	);
};

export default ModalValidate;
