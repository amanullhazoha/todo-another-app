import Button from './Button';
import classes from './css/model.module.css';

const Model = ({ children, isOpen, toggler }) => (
    <div className={classes.modelContainer} style={{ display: isOpen ? 'block' : 'none' }}>
        <div className={classes.modelOverlay}>
            <div className={classes.model}>
                <Button type="button" className={classes.closeBtn} text="x" onClick={toggler} />
                {children}
            </div>
        </div>
    </div>
);

export default Model;
