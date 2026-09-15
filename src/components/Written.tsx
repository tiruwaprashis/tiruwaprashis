// src/components/Written.tsx
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { BookOpen, Copy, Check, FileText } from "lucide-react";
import { cn } from "@/lib/utils";

interface Note {
  id: string;
  title: string;
  category: string;
  content: string;
}

const notesData: Note[] = [
  {
    id: "basic-internet",
    title: "Basic knowledge of Internet",
    category: "Networking & Banking",
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

└> Used for B2B collaboration`,
  },
];

const Written = () => {
  const [activeNoteId, setActiveNoteId] = useState<string>(notesData[0].id);
  const [copied, setCopied] = useState(false);

  const activeNote = notesData.find((n) => n.id === activeNoteId) || notesData[0];

  const handleCopy = () => {
    navigator.clipboard.writeText(activeNote.content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="written" className="py-24 bg-background relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <BookOpen className="w-4 h-4" />
            <span>Revision Notes & Writtenups</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Technical Knowledge Base
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            Structured notes and quick revision summaries formatted for instant reference.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Note Selection Buttons */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-1">
              Select Note Topic
            </p>
            {notesData.map((note) => (
              <Button
                key={note.id}
                variant={activeNoteId === note.id ? "default" : "outline"}
                className={cn(
                  "justify-start text-left h-auto py-4 px-5 transition-all duration-200",
                  activeNoteId === note.id
                    ? "shadow-md scale-[1.01]"
                    : "hover:bg-accent/50"
                )}
                onClick={() => setActiveNoteId(note.id)}
              >
                <div className="flex flex-col items-start gap-1 w-full">
                  <div className="flex items-center gap-2 w-full justify-between">
                    <span className="font-semibold text-sm sm:text-base">
                      {note.title}
                    </span>
                    <FileText className="w-4 h-4 opacity-70 flex-shrink-0" />
                  </div>
                  <span className="text-xs opacity-80 font-normal">
                    {note.category}
                  </span>
                </div>
              </Button>
            ))}
          </div>

          {/* Note Viewer Card */}
          <div className="lg:col-span-8">
            <div className="rounded-xl border bg-card text-card-foreground shadow-sm overflow-hidden">
              {/* Card Header Toolbar */}
              <div className="p-4 sm:p-6 border-b bg-muted/30 flex items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold">{activeNote.title}</h3>
                  <span className="text-xs text-muted-foreground font-medium">
                    Category: {activeNote.category}
                  </span>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleCopy}
                  className="gap-2 text-xs"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-500" />
                      <span className="text-emerald-500">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copy Raw</span>
                    </>
                  )}
                </Button>
              </div>

              {/* Exact Text Display */}
              <div className="p-6 overflow-x-auto max-h-[650px] overflow-y-auto bg-background/50">
                <pre className="font-mono text-xs sm:text-sm text-foreground/90 leading-relaxed whitespace-pre-wrap select-text">
                  {activeNote.content}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Written;
