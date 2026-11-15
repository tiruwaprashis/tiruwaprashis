import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Search, BookOpen, FileText } from "lucide-react";

// My study notes live in one GitHub repo, so this section links to it and its specific markdown files.
const NOTES_REPO = "https://github.com/tiruwaprashis/computer-science-notes";

// Topics mapped to your actual repository files (cybersecurity, crypto, OS, DBMS, architecture)
const topics = [
  {
    title: "Cybersecurity and IT policies",
    summary: "CIA triad, access control, MFA, risk calculation, incident response.",
    href: `${NOTES_REPO}/blob/main/cybersecurity_and_IT_policies.md`,
    filename: "cybersecurity_and_IT_policies.md",
  },
  {
    title: "Basic knowledge of Internet,Email and Web Design",
    summary: "ARPANET, history, IP/TCP, roles in banking sector, ISP, DNS, and URL structure.",
    href: `${NOTES_REPO}/blob/main/internet_email_web_note.md`, // Update filename if different in your repo
    filename: "internet_email_web_note.md",
  },
  {
    title: "Cryptography",
    summary: "Symmetric and asymmetric encryption, hashing, digital signatures, TLS.",
    href: `${NOTES_REPO}/blob/main/crypto-notes.md`,
    filename: "crypto-notes.md",
  },
  {
    title: "Operating systems",
    summary: "Processes and threads, CPU scheduling, deadlock, OS security.",
    href: `${NOTES_REPO}/blob/main/os_notes.md`,
    filename: "os_notes.md",
  },
  {
    title: "Database management systems",
    summary: "Keys, normalization, SQL, indexing, disaster recovery.",
    href: `${NOTES_REPO}/blob/main/dbms.md`,
    filename: "dbms.md",
  },
  {
    title: "Computer architecture",
    summary: "Memory hierarchy, fetch-decode-execute cycle, CISC vs RISC.",
    href: `${NOTES_REPO}/blob/main/comp_architecture.md`,
    filename: "comp_architecture.md",
  },
];

const Written = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Filter topics based on search query
  const filteredTopics = useMemo(() => {
    if (!searchQuery.trim()) return topics;
    const q = searchQuery.toLowerCase();
    return topics.filter(
      (topic) =>
        topic.title.toLowerCase().includes(q) ||
        topic.summary.toLowerCase().includes(q) ||
        topic.filename.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  return (
    <section id="written" className="py-20 bg-background">
      <div className="container px-4">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Study notes</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My notes on computer science and security fundamentals, with diagrams and
            worked examples. They are kept on GitHub.
          </p>
        </div>

        {/* Search Notes Option */}
        <div className="max-w-3xl mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search study notes by title, topic, or file..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary shadow-sm transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-muted-foreground hover:text-foreground"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Notes List with Original Styling */}
        <div className="max-w-3xl mx-auto rounded-lg border border-border bg-card shadow-sm overflow-hidden divide-y divide-border">
          {filteredTopics.length === 0 ? (
            <div className="p-12 text-center">
              <BookOpen className="w-8 h-8 mx-auto text-muted-foreground mb-3 opacity-50" />
              <p className="text-muted-foreground font-medium">No matching study notes found.</p>
              <p className="text-xs text-muted-foreground mt-1">Try searching for "security", "OS", or "database".</p>
            </div>
          ) : (
            filteredTopics.map((topic) => (
              <a
                key={topic.title}
                href={topic.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-4 p-5 hover:bg-muted/50 transition-colors group"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-primary shrink-0" />
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {topic.title}
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground pl-6">{topic.summary}</p>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <span className="hidden sm:inline-block text-xs font-mono text-muted-foreground bg-secondary/50 px-2 py-1 rounded">
                    {topic.filename}
                  </span>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
              </a>
            ))
          )}
        </div>

        {/* Repository Link Button */}
        <div className="text-center mt-8">
          <Button asChild>
            <a href={NOTES_REPO} target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4 mr-2" />
              Open computer-science-notes repository
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Written;
