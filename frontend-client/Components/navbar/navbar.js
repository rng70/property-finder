import { useRouter } from 'next/router';
import Link from 'next/link';
import { useState } from 'react';
import styles from '../../styles/NavBar.module.css';
import Image from 'next/image';

const NavBar = (props) => {

    const router = useRouter();
    const [showDropDown, setShowDropDown] = useState(false);

    const handleOnClickLogIn = (e) => {
        e.preventDefault()
        router.push('/signintype')
    }

    const handleOnClickRegister = (e) => {
        e.preventDefault()
        router.push('/signuptype')
    }

    const handleShowDropDown = (e) => {
        e.preventDefault();
        setShowDropDown(!showDropDown);
    }
    

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <a className={styles.logoLink} href="/">
                    <div className={styles.logoWrapper}>
                        PropertyFinder
                    </div>
                </a>
{/*             
                <ul className={styles.navItems}>
                    <li className={styles.navItem} onClick={handleOnClickLogIn}>Log In</li>
                    <li className={styles.navItem} onClick={handleOnClickRegister}>Register</li>
                </ul> */}

                <nav className={styles.navContainer}>

                <ul className={styles.navItems}>
                    <li className={styles.navItem} onClick={handleOnClickLogIn}>Sign In</li>
                    <li className={styles.navItem} onClick={handleOnClickRegister}>Sign Up</li>
                </ul>
                    <div>
                        <button className={styles.usernameButton} onClick={handleShowDropDown}>
                            <p className={styles.username}>Username: Tanin</p>
                        </button>
                        {showDropDown && <div className={styles.navDropDown}>
                            <div>
                                <Link href="/signin">
                                    <a className={styles.linkName}>
                                        Sign out
                                    </a>
                                </Link>
                                
                                <div className={styles.lineWrapper}></div>
                            </div>
                            
                        </div>}
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default NavBar;