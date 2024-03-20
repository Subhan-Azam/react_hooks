import Link from "next/link";

export default function Navbar() {
  return (
    <div>
        <Link style={{color:'blue', margin:'20px' }} href="/">Home</Link>
        <Link style={{color:'blue', margin:'20px' }} href="/githubAPI">Github API</Link>
        <Link style={{color:'blue', margin:'20px' }} href="/clientSideAPI">Client Side API</Link>
        <Link style={{color:'blue', margin:'20px' }} href="/serverSideAPI">Server Side API</Link>
    </div>
  );
}
