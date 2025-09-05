import { redirect } from 'next/navigation'
import { createSupabaseServerClient } from '@/lib/supabase-server'

export default async function HomePage() {
  const supabase = createSupabaseServerClient()
  const {
    data: { session },
  } = await supabase.auth.getSession()

  if (session) {
    redirect('/dashboard')
  }

  return (
    <main className="flex flex-col items-center justify-center h-screen text-center space-y-4">
      <h1 className="text-4xl font-bold">Welcome to My E-Commerce App</h1>
      <p className="text-lg">Please log in or sign up to continue</p>
      <div className="space-x-4">
        <a href="/login" className="px-4 py-2 bg-black text-white rounded">Login</a>
        <a href="/signup" className="px-4 py-2 border border-black text-black rounded">Sign Up</a>
      </div>
    </main>
  )
}
