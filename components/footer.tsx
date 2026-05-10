export function Footer() {
  return (
    <footer id="contact" className="border-t border-border py-10">
      <div className="section-shell">
        <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <p className="text-sm text-muted-foreground">
            &copy; 2025 nxtcorex cloud
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              隐私政策
            </a>
            <a href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              服务条款
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
