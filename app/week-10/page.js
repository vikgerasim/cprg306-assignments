"use client";

import Link from "next/link";
import { useUserAuth } from "./_utils/auth-context";

export default function SignInPage() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  async function handleSignIn() {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.log(error);
    }
  }

  async function handleSignOut() {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.log(error);
    }
  }

  console.dir(user);

  return (
    <main className=" bg-black w-full min-h-screen">
      <header>
        <h1 className="p-5 text-3xl font-bold text-white">Shopping List App</h1>
      </header>
      {user ? (
        <div className="text-white pl-5 text-xl">
          <p>Welcome {user.displayName}!</p>
          <div>
            <Link href="/week-10/shopping-list">
              <button
                type="button"
                className="text-lg bg-blue-600 text-white rounded px-2 py-1 mt-4"
              >
                Continue to your Shopping List
              </button>
            </Link>
          </div>
          <button
            type="button"
            className="text-lg bg-blue-600 text-white rounded px-2 py-1 mt-4"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      ) : (
        <div className="pl-5">
          <button
            type="button"
            className="text-lg bg-blue-600 text-white rounded px-2 py-1 mt-4"
            onClick={handleSignIn}
          >
            Sign In with GitHub
          </button>
        </div>
      )}
    </main>
  );
}
