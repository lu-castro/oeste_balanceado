import { makeStyles } from '@material-ui/core/styles'

// import banner from '../assets/banner.jpeg'

const NavbarHeader = () => {
    const classes = useStyle()
    
    return (
        <div>
        {/* <div className={classes.headerFlex}> 
            <a href="#" className="logo">Oeste Balanceados</a>
            <ul className="navList">
                <li><a href="#"> Home About Store Contact</a></li>
            </ul>
        </div>
        <div className={classes.banner}>
            <div className="imgBx">
                <img src={banner} alt="banner"/>
            </div>
        </div> */}
        </div>

    )
}

export const useStyle = makeStyles(theme => ({
    // headerFlex: {
    //     display: 'flex',
    //     position: 'fixed',
    //     width: '100%',
    //     justifyContent: 'center',
    //     zIndex: '1000',
    //     padding: '10px ',
    //     backgroundColor: '#000000',
    //     '& .logo': {
    //         position: 'relative',
    //         color: '#fff',
    //         fontWeight: '700',
    //         fontSize: '2em',
    //         textDecoration: 'none'
    //     },
    //     '& .navList': {
    //         position: 'relative',
    //         display: 'flex',
    //         justifyContent: 'center',
    //         alignItems: 'center',
    //         '& li': {
    //             position: 'relative',
    //             listStyle: 'none',
    //             margintLeft: '50px',
    //             '& a': {
    //                 color: '#fff',
    //                 textDecoration: 'none',
    //             }
    //         }
    //     }
    // }, 
    // banner: {
    //     position: 'relative',
    //     width: '100%',
    //     minHeight: '100vh',
    //     '& .imgBx': {
    //         position: 'absolute',
    //         top: '0',
    //         left: '0',
    //         width: '100%',
    //         height: '100%',
    //         '& img': {
    //             position: 'absolute',
    //             top: '0',
    //             left: '0',
    //             width: '100%',
    //             height: '100%',
    //             objectFit: 'cover',
    //             opacity: '1',
    //             transition: '0.5',
    //             backgroundPosition: 'center',
    //         }
    //     }, 
    // }
}))

export default NavbarHeader