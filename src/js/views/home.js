import React from "react";
import "../../styles/home.css";
import { ContactList } from "./component/contactList.js";

export const Home = () => (
	<div className="text-center mt-5">
		<ContactList/>
	</div>
);
