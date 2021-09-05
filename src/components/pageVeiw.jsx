import Button from './Button';
import classes from './css/pageVeiw.module.css';

const PageVeiw = ({ veiwTodo, handelDelete }) => {
    const [detail] = veiwTodo;
    return (
        <div className={classes.page}>
            <h1>Employee Details</h1>
            <div className={classes.details}>
                <p>
                    <span>First Name: </span>
                    {detail.firstName}
                </p>
                <p>
                    <span>Last Name: </span>
                    {detail.lastName}
                </p>
                <p>
                    <span>Email: </span>
                    {detail.email}
                </p>
            </div>

            <div className={classes.deleteBtn}>
                <Button type="button" text="Delete" onClick={() => handelDelete(detail.id)} />
            </div>
        </div>
    );
};

export default PageVeiw;
