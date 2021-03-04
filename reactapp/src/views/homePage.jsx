import { makeStyles } from '@material-ui/core/styles'

import menu from '../assets/menuIcon.png'
import close from '../assets/closeIcon.png'
import perro from '../assets/perro.png'
import gato from '../assets/gato.png'
import compras from '../assets/compras.png'
import pajaro from '../assets/pajaro.png'


const HomePage = () => {
     const classes = useStyle()

    return (
        <div>
            <section className={classes.titleSection}>
                <header className="header">
                    <a href="#" className="logo">Oeste Balanceados</a>
                    <div className="toggle" onClick={toggleMenu}></div>
                    <ul className="navigation">
                        <li><a href="#"> Home </a></li>
                        <li><a href="#"> Home </a></li>
                        <li><a href="#"> </a></li>
                        <li><a href="#">  </a></li>
                        <li><a href="#"> Home </a></li>
                        <li><a href="#"> Home </a></li>
                    </ul>
                </header>
                <div className={classes.container}>
                <div className="boxContainer">
                        <div className="imgBox">
                            <img src={perro} alt="perro"/>
                        </div>
                    </div>
                    <div className="boxContainer">
                        <div className="imgBox">
                            <img src={gato} alt="gato"/>
                        </div>
                    </div>
                    <div className="boxContainer">
                        <div className="imgBox">
                            <img src={pajaro} alt="pajaro"/>
                        </div>
                    </div>
                    <div className="boxContainer">
                        <div className="imgBox">
                            <img src={compras} alt="compras"/>
                        </div>
                    </div>
                </div>
                <div className={classes.footer}>
                    <ul className="social">
                        <li><a href=""> Facebook </a></li>
                        <li><a href=""> WhatsApp </a></li>
                        <li><a href=""> Instagram </a></li>
                    </ul>
                    <p className="copyright">
                        @Oeste Balanceados - 2021 
                    </p>
                </div>
            </section>
        </div>
    )
}

// select image
let imgBx = document.querySelectorAll('.imgBox')
imgBx.forEach(popup => popup.addEventListener('click', () => {
    popup.classList.toggle('activeImage')
}))

// open/close menu
function toggleMenu() {
    const menuToggle = document.querySelector('.toggle')
    const navigation = document.querySelector('.navigation')
    menuToggle.classList.toggle('active')
    navigation.classList.toggle('activenav')
}

export const useStyle = makeStyles(theme => ({
    titleSection: {
        background: '#893101',
        padding: '100px',
        '& .header': {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100px',
            padding: '',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
            alignItems: 'center',
            zIndex: 1000,
            '& .logo': {
                position: 'relative',
                justifyContent: 'center',
                fontSize: '28px',
                color: '#111',
                textDecoration: 'none',
                textTransform: 'uppercase',
                letterSpacing: '2px',
                fontWeight: 700,
                animation: "$slideLeft 2.5s"
            },
            '& .toggle': {
                justifyContent: 'center',
                position: 'relative',
                width: '30px',
                height: '30px',
                background: `url(${menu})`,
                backgroundSize: '30px',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                cursor: 'pointer',
                zIndex: 10000,
            },
            '& .active': {
                background: `url(${close})`,
                backgroundSize: '25px',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            },
            '& .navigation': {
                position: 'absolute',
                paddingTop: '10px',
                display: 'flex',
                justifyContent: 'center',
                opacity: 0,
                visibility: 'hidden',
                transition: '.5s',
                '& li': {
                    listStyle: 'none',
                    '& a': {
                        color: '#111',
                        textDecoration: 'none',
                        fontSize: '16px',
                        margin: '0 20px',
                        fontWeight: 600,
                        display: 'inlineBlock'
                    }
                }
            },
            '& .activenav': {
                opacity: 1,
                visibility: 'visible'
            }
        }
    },
    container: {
        position: 'absolute',
        display: 'flex',
        height: 'calc(100% - 200px)',
        width: 'calc(100% - 200px)',
        zIndex: 100,
        '& .boxContainer': {
            position: 'relative',
            width: '25%',
            height: '100%',
            overflow: 'hidden',
            border: '10px solid #FFF',
            '& .imgBox': {
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                transition: '.5s',
                '& img': {
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                },
                '&:hover': {
                    transform: 'scale(1.3)'
                }
            },
            '& .activeImage': {
                position: 'fixed',
                top: '100px',
                left: '100px',
                width: 'calc(100% - 200px)',
                height: 'calc(100% - 200px)',
                zIndex: 1000,
            }
        }
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: '100px',
        display: 'flex',
        justifyContent:'space-around',
        alignItems: 'center',
        '& .social': {
            position: 'relative',
            display: 'flex',
            '& li': {
                listStyle: 'none',
                '& a': {
                    color: '#111',
                    textDecoration: 'none',
                    fontWeight: 500,
                    marginRight: '20px',
                    display: 'inline-block',
                }
            }
        },
        '& .copyright': {
            color: '#111',
            fontWeight: 500
        }
    },
    // Animations 
    "@keyframes slideLeft": {
        "0%": {transform: 'translateX(-150px)', opacity: 0},
        "100%": {transform: 'translateX(0)', opacity: 1}
    }
}))

export default HomePage

     