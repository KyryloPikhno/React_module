import {useCount1Reducer} from "../../reducers";
import {useForm} from "react-hook-form";
import {Cat} from "../cat/Cat";

let name = {}

const Count1 = () => {

      let {register, handleSubmit, formState:{errors,isValid},setValue} = useForm()

    const [state, dispatch] = useCount1Reducer()




    let submit = (obj) =>{
          name = obj
          console.log(name)
          dispatch({type: name.cats})
    }


    return (
        <div>


            <h1>cat: {state?.count1}</h1>


            <form onSubmit={handleSubmit(submit)}>
                <input type='text' placeholder={'cats'} {...register('cats')}/>
                <button>submit</button>
            </form>
        </div>
    );
};


export {Count1, name};