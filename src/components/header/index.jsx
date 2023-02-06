import Image from 'next/image';
import Link from 'next/link'

function Header() {
    return (
        <header>
            <div className='heading'>
                <Image src={"/images/zevent_logo.png"} alt="logo" width={200} height={100} />
                <nav className="navbar">
                    <ul>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/events">Events</Link></li>
                        <li><Link href="/about-us">About Us</Link></li>
                    </ul>
                </nav>
            </div>
            <h1>Sed ut perspiciatis unde omnis</h1>
        </header>
    );
}

export default Header;
