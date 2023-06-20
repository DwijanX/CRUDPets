import { useFormik } from 'formik';


const PetForm=({id="",petName="",weight="",submitHandler})=>{
    const registerPetFormik = useFormik({
        initialValues: {
          id:id,petName:petName,weight:weight
        },
        validate:(values)=>{
          const errors={}
          if (!values.id){
            errors.petName="id is required"
          }
          if (!values.petName){
            errors.petName="pet name is required"
          }
          if (!values.weight){
            errors.weight="Weight is required"
          }
          return errors;
        },
        onSubmit: async values => {
            await submitHandler(values.id,values)
            alert(JSON.stringify(values, null, 2));
        },
      });

      return (
            <form onSubmit={registerPetFormik.handleSubmit}>
            <label>ID</label>
              <input
                id="id"
                type="text"
                name="id"
                onChange={registerPetFormik.handleChange}
                value={registerPetFormik.values.id}
                onBlur={registerPetFormik.handleBlur}
              />
            {registerPetFormik.errors.id && registerPetFormik.touched.id && registerPetFormik.errors.id}
    
            <label>Pet Name</label>
              <input
                id="petName"
                type="text"
                name="petName"
                onChange={registerPetFormik.handleChange}
                value={registerPetFormik.values.petName}
                onBlur={registerPetFormik.handleBlur}
              />
              {registerPetFormik.errors.petName && registerPetFormik.touched.petName && registerPetFormik.errors.petName}
              <label>Weight</label>
              <input
                type="number"
                name="weight"
                onChange={registerPetFormik.handleChange}
                value={registerPetFormik.values.weight}
                onBlur={registerPetFormik.handleBlur}
    
              />
              {registerPetFormik.errors.weight && registerPetFormik.touched.weight && registerPetFormik.errors.weight}
    
              <button type="submit" >
                Submit
              </button>
            </form>
      );
}
export default PetForm