import { makeStyles } from '@material-ui/core/styles'

const NavbarHeader = () => {
    const classes = useStyle()
    
    return (
        <div className={classes.headerFlex}> 
            <span></span>
            <div> Oeste Balanceados </div>
            <div> Opcion 1</div>
            <div> Opcion 2 </div>
            <div> Modo oscuro </div>
            <div> Profile Icon </div>
        </div>
    )
}

export const useStyle = makeStyles(theme => ({
    headerFlex: {
        display: 'flex',
        justifyContent: 'space-between',
        backgroundColor: '#DD571C',
        padding: "10px"
    }

}))

export default NavbarHeader