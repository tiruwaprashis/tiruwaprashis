import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  FileText,
  Copy,
  Check,
  Search,
  Terminal,
  Tag,
  Clock,
  ChevronDown,
  Sparkles,
} from "lucide-react";

// --- TYPE DEFINITIONS ---

interface SubSection {
  heading: string;
  type:
    | "structure"
    | "steps"
    | "list-detailed"
    | "comparison-cards"
    | "bullets"
    | "table"
    | "code-tags"
    | "list-grouped";
  example?: string;
  breakdown?: { term: string; detail: string }[];
  items?: any[];
  description?: string;
  headers?: string[];
  rows?: string[][];
  tags?: { tag: string; desc: string }[];
  groups?: { category: string; tools: string[]; notes?: string[] }[];
}

interface StructuredContent {
  definition: string;
  subsections: SubSection[];
}

interface Note {
  id: string;
  title: string;
  category: string;
  readTime?: string;
  updatedAt?: string;
  content: string | StructuredContent;
}

// --- DATA DEFINITION ---

const NOTES_DATA: Note[] = [
  {
    id: "basic-internet",
    title: "Basic knowledge of Internet",
    category: "Networking & Banking",
    readTime: "5 min read",
    updatedAt: "2083 B.S. / Recent Revision",
    content: `History

-> ARPANET (Advanced Research Projects Agency Network) is the first research network developed by U.S. Department of Defense agency (DARPA) in 1969 A.D

-> In 1971 AD
└> US citizen Ray Tomlinson
└> developed "@" symbol
└> and use of email was started.

-> Tim Berners
↓ invented
World Wide Web (WWW)
↓ in
1989

-> From 1992 AD
└> service of internet
└> was started in world

-> From 1994 AD (email service began in 1993 via Mercantile Communications)
└> service of internet
└> was started in Nepal.

-> Vint Cerf.
└> Father of Internet

-> Ray Tomlinson
└> Father of Email

① What is Internet ?
technical def
└> The internet is a global system of interconnected computer networks that use standardized communication protocols (primarily TCP/IP) to facilitate packet-switched data transmission between devices, enabling decentralized information exchange across heterogeneous hardware and autonomous network infrastructures.

② Roles in banking sector
-> Enhanced Accessibility (24/7 Service)
• access banking services at any time from any location
• can check status, transfer funds, electronic payments. etc without visiting branch
-> Cost reduction
-> Real Time transactions processing
-> Customer Satisfaction
-> Expand banking sector
-> Data Analysis and Personalization
• better understand customer behaviour

③ Risk of internet in banking sector
-> Cybersecurity Threats
-> Fraudulent Activities
-> System Failures and Downtime
-> Regulatory Challenges
-> Privacy Concerns

④ Internet Terms
• Internet service provider (ISP)
└> WorldLink, Subisu, ViaNet, NTC
• Web Browser
└> Google Chrome, Mozilla Firefox, Microsoft Edge, Apple Safari
• Search Engine
└> Google, Bing, Yahoo, DuckDuckGo
• Website
• Web page
• WWW
└> collection of websites or webpages.
• Uniform Resource Locator (URL)
└> unique address of website or web page.
└> https:// www. psc.gov.np //notice ?year=2083
[protocol] [Subdomain/hostname] [Domain Name] [Path] [Query / Document]
└> Top-Level Domains (TLD) in nepal
• .com
• .org
• .edu
• .gov.np
• .np
• IP Address
└> an unique 32/128 bits address assigned to every device on a network.
• INTRANET
└> private network restricted to an organization
└> Accessible only to employees / authorized users
• EXTRANET
└> Accessible to selected external users (vendors, clients)
└> Used for B2B collaboration`,
  },
  {
    id: "email-system",
    title: "Email System",
    category: "Networking & Communication",
    readTime: "4 min read",
    updatedAt: "Recent Revision",
    content: {
      definition:
        "Email is a method of exchanging digital messages between people using electronic devices over the internet.",
      subsections: [
        {
          heading: "Email Address Structure",
          type: "structure",
          example: "username@gmail.com",
          breakdown: [
            { term: "username", detail: "User identity" },
            { term: "@", detail: "'At' symbol" },
            { term: "gmail", detail: "Mail server / Domain" },
            { term: ".com", detail: "Top-Level Domain (TLD)" },
          ],
        },
        {
          heading: "Working Process of Email System",
          type: "steps",
          items: [
            "Email Composition: Writing the message.",
            "Sending: Dispatching the mail.",
            "SMTP Server / Sender Mail Server: Processes outgoing email.",
            "Mail Transfer Agent (MTA): Transfers email across networks.",
            "Receiving Mail Server: Stores incoming email for recipient.",
            "Retrieval: Fetching mail to client device.",
            "Reading: Viewing the received email.",
          ],
        },
        {
          heading: "Key Email Protocols",
          type: "list-detailed",
          items: [
            {
              title: "SMTP (Simple Mail Transfer Protocol)",
              details: [
                "Storage not applicable (Transport only).",
                "Used for sending outgoing mail (Client → Server → Server).",
                "Works only in the 'send' direction; operates on Port 25.",
              ],
            },
            {
              title: "POP3 (Post Office Protocol v3)",
              details: [
                "Messages are downloaded to a local device and typically deleted from the server.",
                "Downloads mail to one device.",
                "Best for single-device access and offline reading.",
              ],
            },
            {
              title: "IMAP (Internet Message Access Protocol)",
              details: [
                "Messages stay stored on the server.",
                "Used for receiving email.",
                "Best for multi-device access across multiple platforms.",
              ],
            },
          ],
        },
        {
          heading: "Email Client vs. Webmail",
          type: "comparison-cards",
          items: [
            {
              title: "Email Client (Desktop App)",
              description:
                "Applications like Microsoft Outlook or Mozilla Thunderbird. Works offline and uses IMAP/POP3 to fetch mail and SMTP to send.",
            },
            {
              title: "Webmail (Browser-based)",
              description:
                "Services like Gmail, Yahoo, and Outlook.com. Requires an active internet connection and is accessible from any device.",
            },
          ],
        },
        {
          heading: "Uses of Email System in Banking & Business",
          type: "bullets",
          items: [
            "To communicate with customers.",
            "To transfer files.",
            "Used for promoting and marketing services.",
            "To send security alerts and notifications.",
            "Used for inquiries and reporting.",
            "To coordinate with business partners, vendors, and stakeholders.",
          ],
        },
      ],
    },
  },
  {
    id: "web-design",
    title: "Web Design",
    category: "Web Development",
    readTime: "6 min read",
    updatedAt: "Recent Revision",
    content: {
      definition:
        "Web Design is the process of planning, structuring, and styling websites to make them readable, functional, and user-friendly.",
      subsections: [
        {
          heading: "Static vs. Dynamic Websites",
          type: "table",
          headers: ["Feature / Type", "Static Website", "Dynamic Website"],
          rows: [
            ["Content", "Fixed content for every user.", "Content changes based on user data."],
            [
              "Technology",
              "Built with HTML/CSS; no database.",
              "Server-side languages (PHP, ASP.NET) + database.",
            ],
          ],
        },
        {
          heading: "HTML (HyperText Markup Language)",
          type: "code-tags",
          description: "HTML is the main building block of web pages.",
          tags: [
            { tag: "<html>", desc: "Defines the HTML document" },
            { tag: "<head>", desc: "Contains title, metadata, and links to CSS" },
            { tag: "<title>", desc: "Title shown on the browser tab" },
            { tag: "<body>", desc: "Visible content of the webpage" },
            { tag: "<h1> to <h6>", desc: "Headings" },
            { tag: "<p>", desc: "Paragraph text" },
            { tag: '<a href="">', desc: "Link to another page" },
            { tag: '<img src="">', desc: "Image inserted into the page" },
            { tag: "<table>, <tr>, <td>", desc: "Table structure with rows and cells" },
            { tag: "<div>, <span>", desc: "Containers used for layout and styling" },
          ],
        },
        {
          heading: "Website Hosting Types",
          type: "bullets",
          items: [
            "Shared Hosting: Multiple sites share server resources.",
            "Virtual Private Server (VPS): Virtual dedicated environment on a shared physical server.",
            "Dedicated Hosting: Entire physical server reserved for one website.",
            "Cloud Hosting: Scalable resources across network of connected servers.",
          ],
        },
        {
          heading: "Essential Web Design Tools",
          type: "list-grouped",
          groups: [
            { category: "Graphics Design Tools", tools: ["Adobe Photoshop", "Canva", "Figma"] },
            { category: "Code Editor Tools", tools: ["VS Code", "Notepad++"] },
            { category: "Website Builder Tools", tools: ["Wix", "Shopify"] },
            {
              category: "Content Management System (CMS)",
              tools: ["WordPress", "Shopify", "Joomla", "Drupal"],
              notes: [
                "Software used to create, manage, edit, and publish website content.",
                "Supports SEO activities.",
                "Manages pages, posts/blogs, media, users, etc.",
              ],
            },
          ],
        },
        {
          heading: "SEO (Search Engine Optimization)",
          type: "bullets",
          items: [
            "Optimizes website pages/blogs to rank higher on Google and other search engines.",
            "Focuses on keywords, titles, meta tags, quality content, etc.",
          ],
        },
      ],
    },
  },
];

// --- HELPER RENDERING COMPONENTS ---

const RenderStructuredContent: React.FC<{ content: StructuredContent }> = ({ content }) => {
  return (
    <div className="space-y-6 text-sm sm:text-base">
      <p className="font-medium text-foreground leading-relaxed bg-secondary/30 p-4 rounded-xl border border-border">
        {content.definition}
      </p>

      {content.subsections.map((sub, idx) => (
        <div key={idx} className="space-y-3">
          <h4 className="font-bold text-base sm:text-lg text-primary">{sub.heading}</h4>

          {sub.description && (
            <p className="text-muted-foreground text-sm">{sub.description}</p>
          )}

          {/* Structure type */}
          {sub.type === "structure" && (
            <div className="bg-secondary/20 p-4 rounded-xl space-y-2 border border-border">
              <div className="font-mono text-sm font-semibold text-primary">
                Example: {sub.example}
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm pt-2">
                {sub.breakdown?.map((b, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="font-mono bg-secondary px-2 py-0.5 rounded text-foreground font-semibold">
                      {b.term}
                    </span>
                    <span className="text-muted-foreground">{b.detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Steps type */}
          {sub.type === "steps" && (
            <ol className="list-decimal list-inside space-y-1.5 text-foreground/90 pl-2">
              {sub.items?.map((item, i) => (
                <li key={i} className="leading-relaxed">
                  {item}
                </li>
              ))}
            </ol>
          )}

          {/* Bullets type */}
          {sub.type === "bullets" && (
            <ul className="list-disc list-inside space-y-1 text-foreground/90 pl-2">
              {sub.items?.map((item, i) => (
                <li key={i} className="leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>
          )}

          {/* Detailed List */}
          {sub.type === "list-detailed" && (
            <div className="space-y-3">
              {sub.items?.map((item, i) => (
                <div key={i} className="bg-secondary/20 p-3.5 rounded-xl border border-border">
                  <span className="font-semibold text-foreground block mb-1">{item.title}</span>
                  <ul className="list-disc list-inside space-y-0.5 text-xs sm:text-sm text-muted-foreground">
                    {item.details?.map((d: string, j: number) => (
                      <li key={j}>{d}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}

          {/* Comparison Cards */}
          {sub.type === "comparison-cards" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {sub.items?.map((item, i) => (
                <div key={i} className="p-4 bg-secondary/30 rounded-xl border border-border">
                  <h5 className="font-bold text-foreground mb-1">{item.title}</h5>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* Table */}
          {sub.type === "table" && sub.headers && sub.rows && (
            <div className="overflow-x-auto rounded-xl border border-border">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-secondary text-foreground uppercase text-[11px] tracking-wider">
                  <tr>
                    {sub.headers.map((h, i) => (
                      <th key={i} className="p-3">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {sub.rows.map((r, i) => (
                    <tr key={i} className="hover:bg-secondary/10">
                      {r.map((cell, j) => (
                        <td key={j} className="p-3 text-foreground/90">
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Code Tags */}
          {sub.type === "code-tags" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {sub.tags?.map((t, i) => (
                <div key={i} className="flex items-center gap-2 bg-secondary/20 p-2.5 rounded-lg border border-border">
                  <code className="text-xs font-mono text-primary font-bold bg-secondary px-2 py-0.5 rounded">
                    {t.tag}
                  </code>
                  <span className="text-xs text-muted-foreground">{t.desc}</span>
                </div>
              ))}
            </div>
          )}

          {/* Grouped List */}
          {sub.type === "list-grouped" && (
            <div className="space-y-3">
              {sub.groups?.map((g, i) => (
                <div key={i} className="p-3.5 bg-secondary/20 rounded-xl border border-border space-y-1">
                  <span className="font-semibold text-foreground text-xs uppercase tracking-wider text-primary block">
                    {g.category}
                  </span>
                  <p className="text-sm font-medium">{g.tools.join(", ")}</p>
                  {g.notes && (
                    <ul className="list-disc list-inside text-xs text-muted-foreground pt-1 space-y-0.5">
                      {g.notes.map((n, j) => (
                        <li key={j}>{n}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

// Convert string/object content to clean copyable text
const formatContentForClipboard = (content: string | StructuredContent): string => {
  if (typeof content === "string") return content;

  let text = `${content.definition}\n\n`;
  content.subsections.forEach((sub) => {
    text += `=== ${sub.heading} ===\n`;
    if (sub.type === "bullets" || sub.type === "steps") {
      sub.items?.forEach((item, i) => {
        text += sub.type === "steps" ? `${i + 1}. ${item}\n` : `• ${item}\n`;
      });
    } else if (sub.type === "structure") {
      text += `Example: ${sub.example}\n`;
      sub.breakdown?.forEach((b) => (text += `  - ${b.term}: ${b.detail}\n`));
    } else if (sub.type === "list-detailed") {
      sub.items?.forEach((item) => {
        text += `\n${item.title}:\n`;
        item.details?.forEach((d: string) => (text += `  - ${d}\n`));
      });
    } else if (sub.type === "comparison-cards") {
      sub.items?.forEach((item) => {
        text += `\n${item.title}: ${item.description}\n`;
      });
    } else if (sub.type === "table") {
      if (sub.headers) text += sub.headers.join(" | ") + "\n";
      sub.rows?.forEach((row) => (text += row.join(" | ") + "\n"));
    } else if (sub.type === "code-tags") {
      sub.tags?.forEach((t) => (text += `${t.tag}: ${t.desc}\n`));
    } else if (sub.type === "list-grouped") {
      sub.groups?.forEach((g) => {
        text += `\n[${g.category}]\nTools: ${g.tools.join(", ")}\n`;
        g.notes?.forEach((n) => (text += `  - ${n}\n`));
      });
    }
    text += "\n";
  });
  return text.trim();
};

// --- MAIN WRITTEN COMPONENT ---

export const Written = () => {
  const [expandedNoteId, setExpandedNoteId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const toggleNote = (id: string) => {
    setExpandedNoteId(expandedNoteId === id ? null : id);
  };

  const filteredNotes = NOTES_DATA.filter(
    (note) =>
      note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      note.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleCopy = (content: string | StructuredContent, id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const plainText = formatContentForClipboard(content);
    navigator.clipboard.writeText(plainText);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section id="written" className="py-20 bg-background text-foreground min-h-screen">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Header Section */}
        <div className="mb-10 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 text-primary font-semibold mb-2">
            <Terminal className="w-5 h-5" />
            <span className="uppercase tracking-wider text-xs sm:text-sm">
              Revision Notes & Writeups
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
            Tech Writeups & Blogs
          </h2>
          <p className="mt-2 text-muted-foreground text-sm sm:text-base max-w-2xl">
            Click on any topic title below to expand and read the complete revision notes.
          </p>
        </div>

        {/* Search Input Bar */}
        <div className="mb-8 relative max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search notes or categories..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-secondary/40 border border-border rounded-xl pl-9 pr-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
          />
        </div>

        {/* Note Cards List */}
        <div className="space-y-4">
          {filteredNotes.length === 0 ? (
            <div className="p-8 bg-card border border-border rounded-2xl text-center text-muted-foreground text-sm">
              No notes found matching "{searchQuery}"
            </div>
          ) : (
            filteredNotes.map((note) => {
              const isExpanded = expandedNoteId === note.id;

              return (
                <div
                  key={note.id}
                  className={`border rounded-2xl transition-all duration-300 overflow-hidden ${
                    isExpanded
                      ? "bg-card border-primary/60 shadow-xl ring-1 ring-primary/20"
                      : "bg-card/60 border-border hover:border-primary/40 hover:bg-card"
                  }`}
                >
                  {/* Title Button (Clickable Header) */}
                  <button
                    onClick={() => toggleNote(note.id)}
                    className="w-full text-left p-5 flex items-center justify-between gap-4 focus:outline-none group"
                  >
                    <div className="flex items-start sm:items-center gap-3">
                      <div
                        className={`p-2 rounded-xl transition-colors ${
                          isExpanded
                            ? "bg-primary text-primary-foreground"
                            : "bg-secondary text-muted-foreground group-hover:text-primary"
                        }`}
                      >
                        <FileText className="w-5 h-5" />
                      </div>

                      <div>
                        <h3
                          className={`font-bold text-base sm:text-lg transition-colors ${
                            isExpanded ? "text-primary" : "text-foreground group-hover:text-primary"
                          }`}
                        >
                          {note.title}
                        </h3>

                        <div className="flex flex-wrap items-center gap-3 mt-1.5 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1 bg-secondary/80 px-2.5 py-0.5 rounded-full text-foreground/80 font-medium">
                            <Tag className="w-3 h-3 text-primary" />
                            {note.category}
                          </span>
                          {note.readTime && (
                            <span className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {note.readTime}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Expand Chevron Icon */}
                    <div className="flex items-center gap-2 shrink-0">
                      <span className="text-xs font-semibold text-primary hidden sm:inline-block">
                        {isExpanded ? "Collapse" : "Expand Note"}
                      </span>
                      <div
                        className={`p-1.5 rounded-full bg-secondary transition-transform duration-300 ${
                          isExpanded
                            ? "rotate-180 bg-primary/20 text-primary"
                            : "text-muted-foreground"
                        }`}
                      >
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </div>
                  </button>

                  {/* Expanded Content View */}
                  {isExpanded && (
                    <div className="border-t border-border bg-background/90 transition-all animate-in fade-in duration-200">
                      {/* Inner Toolbar */}
                      <div className="bg-secondary/30 px-6 py-3 flex items-center justify-between text-xs text-muted-foreground border-b border-border/50">
                        <span className="flex items-center gap-1.5">
                          <Sparkles className="w-3.5 h-3.5 text-primary" />
                          Full formatting preserved
                        </span>

                        <Button
                          onClick={(e) => handleCopy(note.content, note.id, e)}
                          variant="ghost"
                          size="sm"
                          className="h-8 gap-1.5 text-xs"
                        >
                          {copiedId === note.id ? (
                            <>
                              <Check className="w-3.5 h-3.5 text-emerald-500" />
                              <span className="text-emerald-500">Copied</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3.5 h-3.5 text-muted-foreground" />
                              <span>Copy Text</span>
                            </>
                          )}
                        </Button>
                      </div>

                      {/* Content Render Box */}
                      <div className="p-6 overflow-x-auto">
                        {typeof note.content === "string" ? (
                          <pre className="font-mono text-xs sm:text-sm md:text-base leading-relaxed whitespace-pre-wrap text-foreground/90 selection:bg-primary selection:text-primary-foreground">
                            {note.content}
                          </pre>
                        ) : (
                          <RenderStructuredContent content={note.content} />
                        )}
                      </div>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
};

export default Written;
