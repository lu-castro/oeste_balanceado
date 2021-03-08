import { makeStyles } from '@material-ui/core/styles'
import Icon from 'awesome-react-icons';


const CategoryIcons = () => {
    const classes = useStyle()

    return (
        <div className={classes.container}>
            <div className='textInfo'>
                <h3> TITULO ACA </h3>
                <p> mini parrrafo explicando aca </p>
            </div>
            <ul>
                <li> <Icon name="share-other" /> </li>
                <li> <Icon name="coffee" /> </li>
                <li> <Icon name="send" /> </li>
                <li> <Icon name="settings" /> </li>
            </ul>
        </div>
    )
}

export const useStyle = makeStyles(theme => ({
    container: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        padding: '10px',
        '& .textInfo': {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
        },
        '& ul': {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',            
        }
    }
}))

export default CategoryIcons