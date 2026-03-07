export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-indigo-500 flex items-center justify-center">
              <span className="text-white text-xs font-bold">BU</span>
            </div>
            <span className="text-sm font-medium">Builders Unchained</span>
          </div>
          <p className="text-xs text-muted-foreground">
            The community for AI-native engineers.
          </p>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Builders Unchained
          </p>
        </div>
      </div>
    </footer>
  )
}
