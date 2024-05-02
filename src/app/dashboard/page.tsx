import { redirect } from "next/navigation"

export default function DashboardPage() {
  if (true) {
    return redirect("/login")
  }
  return (
    <main></main>
  )
}
