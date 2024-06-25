import React from "react";
import { LiaEdit, LiaHistorySolid, LiaTrashAltSolid } from "react-icons/lia";
import { PiArchive } from "react-icons/pi";
import { StoreContext } from "../../../../store/StoreContext";
import {
	setIsActive,
	setIsAdd,
	setIsDelete,
} from "../../../../store/StoreAction";
import TableLoader from "../../../partials/TableLoader";
import NoData from "../../../partials/NoData";
import SpinnerFetching from "../../../partials/spinners/SpinnerFetching";
import ModalConfirm from "../../../partials/modals/ModalConfirm";
import ModalDelete from "../../../partials/modals/ModalDelete";

const DashboardTable = ({ isLoading, users, isFetching, setItemEdit }) => {
	let counter = 1;
	const { store, dispatch } = React.useContext(StoreContext);
	const [isArchiving, setIsArchiving] = React.useState(0);
	const [id, setId] = React.useState("");

	// edits the parent row's values:
	const handleEdit = (item) => {
		setItemEdit(item);
		dispatch(setIsAdd(true));
	};
	// deletes row
	const handleDelete = (item) => {
		dispatch(setIsDelete(true));
		setId(item.users_aid);
	};
	return (
		<>
			<div>
				<div className='table-wrapper relative'>
					{/* {isFetching && <SpinnerFetching />} */}
					<table>
						<thead className='border-b border-content'>
							<tr className='bg-content/10'>
								<th className='w-[50px]'>#</th>
								<th className='w-[100px]'>Status</th>
								<th className='w-[175px]'>Name</th>
								<th className='w-[50px]'>ID No.</th>
								<th className='w-[175px]'>Work Email</th>
								<th className='w-[100px]'>Report To</th>
								<th className='w-[100px]'>Actions</th>
							</tr>
						</thead>
						<tbody>
							{isLoading && (
								<tr>
									<td colSpan={7}>
										{isLoading && (
											<TableLoader
												count='20'
												cols='7'
											/>
										)}
									</td>
								</tr>
							)}
							{users?.data.length === 0 && (
								<tr>
									<td colSpan={7}>
										<NoData />
									</td>
								</tr>
							)}
							{users?.data.map((item, key) => (
								<tr key={key}>
									<td>{counter++}.</td>
									<td>
										<p
											className={`${
												item.users_is_active === 1
													? `bg-green-300 rounded-full px-3 w-fit mt-2 text-green-950`
													: `bg-red-300 rounded-full px-3 w-fit mt-2 text-red-950`
											}`}>
											{item.users_is_active === 1 ? "Active" : "Inactive"}
										</p>
									</td>
									<td>
										{item.users_sname}, {item.users_fname} {item.users_mname}
									</td>
									<td>{item.users_workid}</td>

									<td>{item.users_email}</td>
									<td>{item.users_manager}</td>
									<td className='table-action'>
										<ul>
											<li>
												<button
													className='tooltip tools hover:bg-accent hover:text-primary transition-all duration-500'
													onClick={() => handleEdit(item)}
													data-tooltip='Edit'>
													<LiaEdit />
												</button>
											</li>

											<li>
												<button
													className='tooltip tools hover:bg-accent hover:text-primary transition-all duration-500'
													data-tooltip='Delete'
													onClick={() => handleDelete(item)}>
													<LiaTrashAltSolid />
												</button>
											</li>
										</ul>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
			{store.isActive && (
				<ModalConfirm
					position={"center"}
					queryKey={"users"}
					endpoint={`/v1/users/active/${id}`}
					isArchiving={isArchiving}
				/>
			)}
			{store.isDelete && (
				<ModalDelete
					position={"center"}
					queryKey={"users"}
					endpoint={`/v1/users/${id}`}
				/>
			)}
		</>
	);
};

export default DashboardTable;
