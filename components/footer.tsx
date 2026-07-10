export function Footer() {
  return (
    <footer id="contact" className="border-t border-border py-10">
      <div className="section-shell">
        <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <p className="text-sm text-muted-foreground">
            &copy; 2025 nxtcorex
          </p>
          <div className="flex gap-6">
            <a
              href="https://beian.miit.gov.cn/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              京ICP备2025138063号-2
            </a>
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
