export default function Footer() {
  return (
    <footer className="footer mt-auto py-3 bg-light">
      <div className="container d-flex justify-content-between">
        <span className="text-muted">Made with ❤️</span>
        <div>
          <img style={{width: "1rem", height: "1rem"}} className="mx-1" alt="Github logo" src="/github.png" />
          <a href="https://github.com/kjaerb/UIUX-livecoding">Github</a>
        </div>
      </div>
    </footer>
  );
}
