import Button from './Button';
import classes from './css/control.module.css';

const Control = () => (
    <div className={classes.control}>
        <h3>Employees List</h3>
        <div className="AddEmployeBtn">
            <Button type="button" className="addBtn" text="Add Employee" />
        </div>
    </div>
);

export default Control;
