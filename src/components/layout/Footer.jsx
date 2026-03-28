import { profile } from "../../data/portfolio";

export default function Footer() {
  return (
    <footer>
      <div className="f-logo">{profile.name}</div>
      <div className="f-copy">Built with precision · © 2026</div>
      <div className="f-links">
        <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        <a href={profile.leetcode} target="_blank" rel="noreferrer">LeetCode</a>
        <a href="#contact">Contact</a>
      </div>
    </footer>
  );
}
