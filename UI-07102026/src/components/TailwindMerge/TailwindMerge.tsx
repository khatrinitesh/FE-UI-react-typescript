import { twMerge } from 'tailwind-merge'

export function Demo() {
  const className = twMerge(
    'cursor-pointer px-4 py-2 bg-red-500 text-white',
    'px-8 bg-blue-500',
  )

  return (
    <>
    <Button className="cursor-pointer  bg-blue-500 px-10">
        Save
        </Button>
    
    <button className={className}>
      Button
    </button>
    </>
  )
}



type ButtonProps = {
  className?: string
  children: React.ReactNode
}

 function Button({
  className,
  children,
}: ButtonProps) {
  return (
    <button
      className={twMerge(
        'cursor-pointer rounded-md bg-black px-4 py-2 text-white',
        className,
      )}
    >
      {children}
    </button>
  )
}