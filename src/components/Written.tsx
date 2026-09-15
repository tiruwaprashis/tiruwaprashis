import { useState } from "react";
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
  ChevronUp,
  Sparkles
} from "lucide-react";

interface Note {
  id: string;
  title: string;
  category: string;
  readTime: string;
  updatedAt: string;
  content: string;
}

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

└> The internet is a global system of interconnected computer networks that use standardized communication protocols (primarily TCP/IP) to facilitate packet-switched data transmission between devices, enabling decentralized information exchange across heterogeneous (फरक-फरक) hardware and autonomous network infrastructures.

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

└> Used for B2B collaboration`
  }
];

export const Written = () => {
  // Keeps track of which note is expanded (null means all are collapsed)
  const [expandedNoteId, setExpandedNoteId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const toggleNote = (id: string) => {
    setExpandedNoteId(expandedNoteId === id ? null : id);
  };

  const filteredNotes = NOTES_DATA.filter((note) =>
    note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    note.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleCopy = (content: string, id: string, e: React.MouseEvent) => {
    e.stopPropagation(); // Prevents card from collapsing when clicking copy
    navigator.clipboard.writeText(content);
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
            <span className="uppercase tracking-wider text-xs sm:text-sm">Revision Notes & Writtenups</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
            Tech Writtenups & Blogs
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
                      <div className={`p-2 rounded-xl transition-colors ${
                        isExpanded ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground group-hover:text-primary"
                      }`}>
                        <FileText className="w-5 h-5" />
                      </div>
                      
                      <div>
                        <h3 className={`font-bold text-base sm:text-lg transition-colors ${
                          isExpanded ? "text-primary" : "text-foreground group-hover:text-primary"
                        }`}>
                          {note.title}
                        </h3>

                        <div className="flex flex-wrap items-center gap-3 mt-1.5 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1 bg-secondary/80 px-2.5 py-0.5 rounded-full text-foreground/80 font-medium">
                            <Tag className="w-3 h-3 text-primary" />
                            {note.category}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {note.readTime}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Expand Chevron Icon */}
                    <div className="flex items-center gap-2 shrink-0">
                      <span className="text-xs font-semibold text-primary hidden sm:inline-block">
                        {isExpanded ? "Collapse" : "Expand Note"}
                      </span>
                      <div className={`p-1.5 rounded-full bg-secondary transition-transform duration-300 ${isExpanded ? "rotate-180 bg-primary/20 text-primary" : "text-muted-foreground"}`}>
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

                      {/* Raw Content Box */}
                      <div className="p-6 overflow-x-auto">
                        <pre className="font-mono text-xs sm:text-sm md:text-base leading-relaxed whitespace-pre-wrap text-foreground/90 selection:bg-primary selection:text-primary-foreground">
                          {note.content}
                        </pre>
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
