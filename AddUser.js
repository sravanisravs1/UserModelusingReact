import React , {useState} from "react";
import Card from "../UI/Card/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button/Button";
import ErrorModel from "../UI/ErrorModel/ErrorModel";

const AddUser = props => {
    const [enteredUserName,setUserName ] = useState("");
    const [enteredAge,setUseAge] = useState('');
    const [error,setError] = useState();

    const addUserHandler = (event) => {
        event.preventDefault();
        if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0){
            setError({
                title:"Invalid Input",
                message:'Please enter a valid name and age (non-empty values).'
            })
            return
        }
        if (+enteredAge < 1){
            setError({
                title:"Invalid Age",
                message:"please enter a valid age(>0)."
            })
            return
        }
        //console.log(enteredUserName,enteredAge);
        props.onAddUser(enteredUserName,enteredAge);
        setUserName('');
        setUseAge('');
        }

    const userNameChangeHandler =(event) => {
        setUserName(event.target.value);
    }    

    const ageChangeHandler=(event) => {
        setUseAge(event.target.value);
    }

    const errorHandler =() =>{
        setError(null);
    }
    

    return (<div>
        {error && <ErrorModel title={error.title} message={error.message} onConfirm={errorHandler}/>}
        <Card className={classes.input}>
            <form onSubmit = {addUserHandler}>
                <label htmlFor="username">UserName</label>
                <input id ="username" 
                type="text" 
                value={enteredUserName}
                onChange={userNameChangeHandler}></input>
                <label htmlFor="age">Age</label>
                <input id ="age" 
                onChange={ageChangeHandler} 
                value={enteredAge}
                type="number"></input>
                <Button type="submit">Add User</Button>
            </form>

         </Card>

    </div>
    )

};

export default AddUser;