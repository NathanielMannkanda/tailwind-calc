type CalcButtonProps = {
  children: React.ReactNode
  onClick?: () => void
  variant?: "default" | "operator" | "secondary"
  className?: string
}

export default function CalcButton({
  children,
  onClick,
  variant = "default",
  className = "",
}: CalcButtonProps) {
  const base =
    "h-14 rounded-lg text-xl font-semibold flex items-center justify-center transition active:scale-95"

  const variants = {
    default: "bg-gray-700 text-white",
    operator: "bg-orange-500 text-white",
    secondary: "bg-gray-500 text-black",
  }

  return (
    <button
      onClick={onClick}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  )
}
