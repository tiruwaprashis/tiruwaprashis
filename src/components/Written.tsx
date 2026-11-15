import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

// My study notes live in one GitHub repo, so this section only links to it.
const NOTES_REPO = "https://github.com/tiruwaprashis/computer-science-notes";

// Each topic opens the repo. If a topic has its own folder, paste that
// folder's URL into its `href` and the link will open it directly.
const topics = [
  {
    title: "Cybersecurity and IT policies",
    summary: "CIA triad, access control, MFA, risk calculation, incident response.",
    href: NOTES_REPO,
  },
  {
    title: "Cryptography",
    summary: "Symmetric and asymmetric encryption, hashing, digital signatures, TLS.",
    href: NOTES_REPO,
  },
  {
    title: "Operating systems",
    summary: "Processes and threads, CPU scheduling, deadlock, OS security.",
    href: NOTES_REPO,
  },
  {
    title: "Database management systems",
    summary: "Keys, normalization, SQL, indexing, disaster recovery.",
    href: NOTES_REPO,
  },
  {
    title: "Computer architecture",
    summary: "Memory hierarchy, fetch-decode-execute cycle, CISC vs RISC.",
    href: NOTES_REPO,
  },
];

const Written = () => {
  return (
    <section id="written" className="py-20 bg-background">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Study notes</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My notes on computer science and security fundamentals, with diagrams and
            worked examples. They are kept on GitHub.
          </p>
        </div>

        <ul className="max-w-3xl mx-auto divide-y rounded-lg border bg-card">
          {topics.map((topic) => (
            <li key={topic.title}>
              <a
                href={topic.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-4 p-5 hover:bg-muted/50 transition-colors"
              >
                <div>
                  <h3 className="font-semibold">{topic.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{topic.summary}</p>
                </div>
                <ExternalLink className="w-4 h-4 shrink-0 text-muted-foreground" />
              </a>
            </li>
          ))}
        </ul>

        <div className="text-center mt-8">
          <Button asChild>
            <a href={NOTES_REPO} target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4 mr-2" />
              Open computer-science-notes
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Written;
