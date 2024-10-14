import Link from 'next/link';

export default function Home() {
    return (
        <main className="flex flex-col items-center justify-center h-screen">
            <Link
                href="/companies"
                className="text-blue-700 text-2xl mb-4 hover:text-blue-500 shadow-lg shadow-indigo-500/50 rounded-lg p-8"
            >
                Companies
            </Link>
            <Link
                href="/dashboard"
                className="text-blue-700 text-2xl hover:text-blue-500 shadow-lg shadow-indigo-500/50 rounded-lg p-8"
            >
                Dashboard
            </Link>
        </main>
    );
}

// import { redirect } from 'next/navigation';

// export default function Home() {
//   redirect('/dashboard');
// }