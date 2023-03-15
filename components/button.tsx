import cx from '@/lib/cx'

type Props = {
  children: React.ReactNode
  onClick: () => void
  className?: string
}

export default function Button({ children, onClick, className }: Props) {
  return (
    <button
      className={cx(
        'rounded-md border border-neutral-600 px-4 py-2 text-base text-black ring-neutral-900 hover:border-white hover:bg-black hover:text-white focus:outline-none focus-visible:ring-2 active:border-white active:bg-neutral-700 active:text-white motion-safe:transition-colors',
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
