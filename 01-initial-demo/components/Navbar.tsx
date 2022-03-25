import { ActiveLink } from './ActiveLink';
import styles         from './Navbar.module.css';

const menuItem = [
    { text: 'Home', path: '/' },
    { text: 'About', path: '/about' },
    { text: 'Contact', path: '/contact' },
    { text: 'Pricing', path: '/pricing' }
];

export const Navbar = () => {
    return (
        <nav className={ styles[ 'menu-container' ] }>
            {
                menuItem.map( ( { text, path } ) => (
                    <ActiveLink key={ `${ text }-${ path }` } text={ text } href={ path } />
                ) )
            }
            {/*<ActiveLink text="Home" href="/" />*/ }
            {/*<ActiveLink text="About" href="/about" />*/ }
            {/*<ActiveLink text="Contact" href="/contact" />*/ }
            {/*<ActiveLink text="Pricing" href="/pricing" />*/ }
        </nav>
    )
}
