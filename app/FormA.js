"use client";
import { useState } from "react";
function FormA({ showSummary, age }) {
	const [dcShow, setDCShow] = useState("");
	const handleSubmit = (event) => {
		event.preventDefault();
		if (dcShow === "") return;
		const data = { age, show: dcShow, formType: "A" };
		showSummary(data);
	};
	return (
		<form id="dc" onSubmit={handleSubmit}>
			<h2>Form A</h2>
			<label>
				Select DC Shows:
				<select onChange={(e) => setDCShow(e.target.value)}>
					<option value="">--Select--</option>
					<option value="The Flash">The Flash</option>
					<option value="Arrow">Arrow</option>
					<option value="Supergirl">Supergirl</option>
					<option value="Legends of Tomorrow">
						Legends of Tomorrow
					</option>
				</select>
			</label>
			<br />
			<label>
				Enter your age:
				<input type="number" value={age} disabled />
			</label>
			<br />
			<button id="submit-dc" type="submit">
				Submit
			</button>
		</form>
	);
}
export default FormA;
