
const CheckBox = ({label, small, click}) => {

	const text = small ? (<small>{label}</small>) : label

	return (

		<label htmlFor="checkbox" className="control control--checkbox">
			{text}
	      	<input onClick={click} id="checkbox" type="checkbox"/>
	      	<div className="control__indicator"></div>
	    </label>



	)
}


export default CheckBox
