import { makeStyles } from '@material-ui/core/styles'

import NavbarHeader from '../components/header'

const HomePage = () => {
     const classes = useStyle()

    return (
        <div className={classes.containerGrid}>
            <div className={classes.header}> <NavbarHeader/> </div>
            <div className={classes.decorateImage}> DECORATION IMAGE </div>
            <div className={classes.categoryIcons}> CATEGORY ICONS  </div>
            <div className={classes.sloganProducts}> SLOGAN PRODUCTS </div>
            <div className={classes.popularProducts}> POPULAR PRODUCTS </div>
            <div className={classes.contact}> CONTACT WITH THE ADMIN </div>
            <div className={classes.sloganComments}> SLOGAN COMMENTS </div>
            <div className={classes.bestComments}> BEST COMENTS </div>
            <div className={classes.footer}> FOTTER </div>
            <div className={classes.terms}> TERMS and COND </div>
        </div>
    ) 
}

export const useStyle = makeStyles(theme => ({
    containerGrid: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
    },
}))

export default HomePage

