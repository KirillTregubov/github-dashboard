type Props = {
  children: React.ReactNode
}

export default function Greeting({ children }: Props) {
  const hours = new Date().getHours()
  const greeting =
    hours < 12 ? 'Good morning' : hours < 18 ? 'Good afternoon' : 'Good evening'
  return (
    <div>
      {greeting}, <span className="font-medium">{children}</span>
    </div>
  )
}
