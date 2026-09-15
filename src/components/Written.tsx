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
  BookOpen 
} from "lucide-react";

interface Note {
  id: string;
  title: string;
  category: string;
  readTime: string;
  content: string;
}

const NOTES_DATA: Note[] = [
  {
    id: "basic-internet",
    title: "Basic knowledge of Internet",
    category: "Networking & Banking",
    readTime: "5 min read",
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
  const [selectedNoteId, setSelectedNoteId] = useState<string>(NOTES_DATA[0].id);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [copied, setCopied] = useState<boolean>(false);

  const activeNote = NOTES_DATA.find((note) => note.id === selectedNoteId) || NOTES_DATA[0];

  const filteredNotes = NOTES_DATA.filter((note) =>
    note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    note.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleCopy = () => {
    navigator.clipboard.writeText(activeNote.content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="written" className="py-20 bg-background text-foreground min-h-screen">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="mb-12 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 text-primary font-semibold mb-2">
            <Terminal className="w-5 h-5" />
            <span className="uppercase tracking-wider text-xs sm:text-sm">Revision Notes & Writtenups</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
            Tech Writtenups & Blogs
          </h2>
          <p className="mt-2 text-muted-foreground text-sm sm:text-base max-w-2xl">
            A structured repository of technical revision notes, exam prep notes, and quick references.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Topic Title Buttons / Sidebar */}
          <div className="lg:col-span-4 space-y-4">
            
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-secondary/50 border border-border rounded-xl pl-9 pr-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              />
            </div>

            {/* Note Title Buttons */}
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-muted-foreground px-1">
                <span>Topics ({filteredNotes.length})</span>
                <BookOpen className="w-3.5 h-3.5" />
              </div>

              {filteredNotes.length === 0 ? (
                <div className="p-4 bg-secondary/30 rounded-xl text-muted-foreground text-sm text-center border border-border">
                  No notes found matching "{searchQuery}"
                </div>
              ) : (
                filteredNotes.map((note) => {
                  const isSelected = note.id === activeNote.id;
                  return (
                    <button
                      key={note.id}
                      onClick={() => setSelectedNoteId(note.id)}
                      className={`w-full text-left p-4 rounded-xl border transition-all duration-200 flex flex-col justify-between group ${
                        isSelected
                          ? "bg-primary/10 border-primary text-foreground shadow-sm"
                          : "bg-card/60 border-border text-foreground/80 hover:border-primary/50 hover:bg-card"
                      }`}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <span className={`font-semibold text-sm sm:text-base leading-snug group-hover:text-primary transition-colors ${
                          isSelected ? "text-primary" : "text-foreground"
                        }`}>
                          {note.title}
                        </span>
                        {isSelected && (
                          <span className="w-2 h-2 rounded-full bg-primary shrink-0 mt-1.5" />
                        )}
                      </div>

                      <div className="flex items-center gap-3 mt-3 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1 bg-secondary/80 px-2 py-0.5 rounded text-foreground/80">
                          <Tag className="w-3 h-3 text-primary" />
                          {note.category}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {note.readTime}
                        </span>
                      </div>
                    </button>
                  );
                })
              )}
            </div>
          </div>

          {/* Detailed Note Container */}
          <div className="lg:col-span-8">
            <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-xl flex flex-col h-full">
              
              {/* Note Header Bar */}
              <div className="bg-secondary/40 border-b border-border px-6 py-4 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-foreground flex items-center gap-2">
                    <FileText className="w-5 h-5 text-primary" />
                    {activeNote.title}
                  </h3>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mt-1">
                    <span>Category: <strong className="text-foreground">{activeNote.category}</strong></span>
                  </div>
                </div>

                {/* Copy Button */}
                <Button
                  onClick={handleCopy}
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-1.5 text-xs font-medium"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-500" />
                      <span className="text-emerald-500">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-muted-foreground" />
                      <span>Copy Raw</span>
                    </>
                  )}
                </Button>
              </div>

              {/* Exact Formatting Render Box */}
              <div className="p-6 bg-background/90 overflow-x-auto flex-1">
                <pre className="font-mono text-xs sm:text-sm md:text-base leading-relaxed whitespace-pre-wrap text-foreground/90 selection:bg-primary selection:text-primary-foreground">
                  {activeNote.content}
                </pre>
              </div>

              {/* Card Footer */}
              <div className="bg-secondary/20 border-t border-border px-6 py-3 flex items-center justify-between text-xs text-muted-foreground">
                <span>Exact formatting preserved</span>
                <span>TpSecure Notes</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Written;
