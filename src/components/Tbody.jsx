import Button from './Button';
import classes from './css/tbody.module.css';

const Tbody = ({ todos, handelUpdate, handelDelete, handelVeiw }) => (
    <tbody>
        {todos.map((todo) => (
            <tr key={todo.id}>
                <td>{todo.firstName}</td>
                <td>{todo.lastName}</td>
                <td>{todo.email}</td>
                <td>
                    <div className={classes.btnGroup}>
                        <Button type="button" text="Update" onClick={() => handelUpdate(todo.id)} />
                        <Button
                            type="button"
                            className={classes.delete}
                            text="Delete"
                            onClick={() => handelDelete(todo.id)}
                        />

                        <Button type="button" text="Veiw" onClick={() => handelVeiw(todo.id)} />
                    </div>
                </td>
            </tr>
        ))}
    </tbody>
);

export default Tbody;
