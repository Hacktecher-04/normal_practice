import Link from "next/link";

export default function Header() {
    return (
        <header>
            <nav>
                <h1>Logo</h1>
                <ul>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/">Add Task</Link>
                    </li>
                    <li>
                        <Link href="/">View Task</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
