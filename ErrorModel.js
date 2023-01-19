import React  from "react";
import Card from "../Card/Card";
import Button from "../Button/Button";
import classes from "./ErrorModel.module.css"

const ErrorModel= props =>{
    
    return(<div>
        <div className={classes.backdrop} onClick={props.onConfirm}>
            <Card className={classes.modal}>
                <header className={classes.header}>
                    <h2>{props.title}
                    </h2>
                </header>
                <div className={classes.content}>
                    <p>{props.message}</p>
                </div>
                <footer className={classes.actions}>
                    <Button onClick={props.onClick}>Okay</Button>

                </footer>
            </Card>
        </div>

    </div>) 

};

export default ErrorModel;