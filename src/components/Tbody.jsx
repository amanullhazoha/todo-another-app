import Button from './Button';
import classes from './css/tbody.module.css';

const Tbody = () => (
    <tbody>
        <tr>
            <td>RamesH</td>
            <td>Fadatare</td>
            <td>ram@gmail.com</td>
            <td>
                <div className={classes.btnGroup}>
                    <Button type="button" text="Update" />
                    <Button type="button" className={classes.delete} text="Delete" />

                    <Button type="button" text="View" />
                </div>
            </td>
        </tr>
    </tbody>
);

export default Tbody;
