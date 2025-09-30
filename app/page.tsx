import { auth } from '@/lib/auth';

import { signIn, signUp } from '@/server/users';

import { headers } from 'next/headers';

import SignOut from './signout';

export default async function Home() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  return (
    <main className="flex flex-col gap-3 items-center justify-center p-10">
      <div className="flex gap-4">
        <button
          className="bg-netural-1000 text-white p-10 rounded-md"
          onClick={signIn}
        >
          Sign in
        </button>
        <button
          className="bg-neutral-900 text-white p-2 rounded-md"
          onClick={signUp}
        >
          Sign up
        </button>

        <SignOut />
      </div>
      <p>{!session ? 'Not authenticated' : session.user.name}</p>
    </main>
  );
}
