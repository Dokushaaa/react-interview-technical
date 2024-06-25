import React from "react";
import { Link } from "react-router-dom";
import {
	FaCode,
	FaFacebook,
	FaInstagram,
	FaLinkedin,
	FaMapPin,
	FaTwitter,
} from "react-icons/fa";
import { baseImgUrl, ImgUrl } from "../../helpers/functions-general";
import useQueryData from "../../custom-hook/useQueryData";

const Footer = () => {
	const [isSearch, setIsSearch] = React.useState(false);
	const [keyword, setKeyword] = React.useState("");
	const { data: contacts } = useQueryData(
		isSearch ? "/v1/contacts/search" : "/v1/contacts", // endpoint
		isSearch ? "post" : "get", // method
		"contacts", //key
		// ["contacts", isSearch],
		{
			searchValue: keyword,
		}
	);
	return (
		<>
			<footer className='footer bg-header h-auto py-10'>
				<div className='container'>
					<div className='flex flex-col gap-2 md:flex md:flex-row md:justify-around'>
						<div className='footer_info flex flex-col w-full md:w-1/3 md:text-left text-center'>
							<h4 className=''>&copy;Dokusha; A Web Developer</h4>
							<h4 className='items-center gap-2 hidden md:flex'>
								<FaMapPin /> San Pablo City, Laguna 4000
							</h4>
						</div>
						<div className='flex flex-col w-full md:w-1/3 items-center text-center'>
							<img
								className='size-20'
								src={`${ImgUrl}/MiniLogo.svg`}
								alt=''
							/>
						</div>
						<div className='flex flex-col w-full md:w-1/3'>
							<ul className='socials-list flex flex-col md:flex-row gap-2'>
								{contacts?.data.map((item, key) => (
									<li
										key={key}
										className='socials-item'>
										<button className='btn btn-footer w-full md:mx-5'>
											<Link
												target='_blank'
												to={item.contacts_userhandle}>
												{item.contacts_web}
											</Link>
										</button>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
};

export default Footer;
