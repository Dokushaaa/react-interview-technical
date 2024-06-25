import React from "react";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { StoreContext } from "../../../../store/StoreContext";
import DbHeader from "./DbHeader";
import SearchBar from "./SearchBar";
import DashboardTable from "./DashboardTable";
import ModalAdd from "./ModalAdd";
import Toast from "../../../partials/Toast";
import ModalError from "../../../partials/modals/ModalError";
import useQueryData from "../../../custom-hook/useQueryData";
import { setIsAdd } from "../../../../store/StoreAction";
import ModalDelete from "../../../partials/modals/ModalDelete";
import { Link } from "react-router-dom";
import { FaDatabase } from "react-icons/fa";

const DashboardHome = () => {
	const { store, dispatch } = React.useContext(StoreContext);
	const [isSearch, setIsSearch] = React.useState(false);
	const [keyword, setKeyword] = React.useState("");
	const [itemEdit, setItemEdit] = React.useState("");

	const handleAdd = () => {
		// callbacks via store folder
		dispatch(setIsAdd(true));
		setItemEdit(null);
	};
	const {
		isLoading,
		isFetching,
		error,
		data: users,
	} = useQueryData(
		isSearch ? "/v1/users/search" : "/v1/users", // endpoint
		isSearch ? "post" : "get", // method
		"users", //key
		// ["Users", isSearch],
		{
			searchValue: keyword,
		}
	);

	return (
		<>
			<DbHeader
				title={`Employee Information System`}
				name={`Arris Saavedra`}
				email={`SaavedraArrisss@gmail.com`}
			/>
			<section
				className='Home'
				id='DbHome'>
				<div className='container'>
					<div className='flex items-center gap-5 justify-between pt-2 py-4'>
						<h4 className='mb-0 text-content font-bold'>MASTER LIST</h4>
						<div className='flex items-center gap-2 justify-evenly'>
							<p className='rounded-lg btn-int  text-sm px-2 py-1 bg-accent text-line   text-center gap-5 w-[200px] my-2'>
								Entries Existing: {users?.data.length}
							</p>
							<button className='btn btn-int bg-accent text-primary flex items-center  gap-2 justify-center w-[175px]'>
								<FaDatabase />
								<Link
									to='http://localhost/phpmyadmin/index.php?route=/table/structure&db=react-interview&table=tbl_users'
									target='_blank'>
									Database Link
								</Link>
							</button>
							<button
								className='btn btn-int bg-accent text-primary flex items-center justify-between gap-5 w-[75px]'
								onClick={handleAdd}>
								<BsFillPlusCircleFill />
								Add
							</button>
						</div>
					</div>
					<SearchBar />
					<DashboardTable
						setItemEdit={setItemEdit}
						isLoading={isLoading}
						users={users}
						isFetching={isFetching}
					/>
				</div>
				{/* <ModalDelete
					position={"center"}
					isVisible={true}
				/> */}

				{store.isAdd && <ModalAdd itemEdit={itemEdit} />}
				{store.success && <Toast type='xl' />}
				{store.error && <ModalError position={"center"} />}
			</section>
		</>
	);
};

export default DashboardHome;
