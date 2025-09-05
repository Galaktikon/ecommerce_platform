import { redirect } from 'next/navigation'
import { createSupabaseServerClient } from '@/lib/supabase-server'

export default async function DashboardPage() {
  const supabase = createSupabaseServerClient()
  const { data: { session } } = await supabase.auth.getSession()

  if (!session) {
    redirect('/login')
  }

  return (
    <main className="max-w-2xl mx-auto mt-16">
      <h1 className="text-3xl font-bold">Welcome, {session.user.email}</h1>
    </main>
  )
}
