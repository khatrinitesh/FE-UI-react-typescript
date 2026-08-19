import GitHubButton from "react-github-btn";

export default function GitHubButtonComponent() {
  return (
    <div>
      <GitHubButton
        href="https://github.com/khatrinitesh"
        data-size="large"
        data-show-count="true"
        aria-label="Follow @khatrinitesh on GitHub"
      >
        Follow @khatrinitesh
      </GitHubButton>
    </div>
  );
}
