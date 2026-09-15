import React, { useState } from 'react';
import { 
  BookOpen, 
  Copy, 
  Check, 
  Search, 
  Tag, 
  Clock, 
  FileText,
  Terminal,
  Sparkles 
} from 'lucide-react';

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
    id: 'internet-basics',
    title: 'Basic knowledge of Internet',
    category: 'Networking & Banking',
    readTime: '5 min read',
    updatedAt: '2083 B.S. / Recent Revision',
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
  },
  {
    id: 'cybersecurity-fundamentals',
    title: 'Cybersecurity & Network Security Basics',
    category: 'Security',
    readTime: '3 min read',
    updatedAt: 'Upcoming Note',
    content: `[Placeholder: Add your next revision notes here in exact text format!]`
  }
];

export const Written: React.FC = () => {
  const [selectedNoteId, setSelectedNoteId] = useState<string>(NOTES_DATA[0].id);
  const [searchQuery, setSearchQuery] = useState<string>('');
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
    <section id="writtenups" className="py-20 bg-slate-950 text-slate-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="mb-12 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 text-emerald-400 font-semibold mb-2">
            <Terminal className="w-5 h-5" />
            <span>KNOWLEDGE BASE & REVISION NOTES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Writtenups & Tech Notes
          </h2>
          <p className="mt-2 text-slate-400 text-sm sm:text-base max-w-2xl">
            Quick revision sheets, conceptual breakdowns, and technical notes formatted for fast reference.
          </p>
        </div>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Sidebar / Title Buttons */}
          <div className="lg:col-span-4 space-y-4">
            
            {/* Search Input */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search notes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-900 border border-slate-800 rounded-lg pl-9 pr-4 py-2.5 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all"
              />
            </div>

            {/* Note Title Buttons List */}
            <div className="space-y-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 px-1">
                Available Topics ({filteredNotes.length})
              </span>

              {filteredNotes.length === 0 ? (
                <div className="p-4 bg-slate-900/50 rounded-lg text-slate-400 text-sm text-center border border-slate-800">
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
                          ? 'bg-emerald-950/40 border-emerald-500/60 text-white shadow-lg shadow-emerald-950/20'
                          : 'bg-slate-900/60 border-slate-800/80 text-slate-300 hover:border-slate-700 hover:bg-slate-900'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <span className={`font-semibold text-sm sm:text-base leading-snug group-hover:text-emerald-400 ${
                          isSelected ? 'text-emerald-300' : 'text-slate-200'
                        }`}>
                          {note.title}
                        </span>
                        {isSelected && (
                          <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 flex-shrink-0 mt-1.5" />
                        )}
                      </div>

                      <div className="flex items-center gap-3 mt-3 text-xs text-slate-400">
                        <span className="flex items-center gap-1 bg-slate-800/80 px-2 py-0.5 rounded text-slate-300">
                          <Tag className="w-3 h-3 text-emerald-400" />
                          {note.category}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3 text-slate-500" />
                          {note.readTime}
                        </span>
                      </div>
                    </button>
                  );
                })
              )}
            </div>
          </div>

          {/* Note Viewer Content Box */}
          <div className="lg:col-span-8">
            <div className="bg-slate-900/90 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col h-full">
              
              {/* Note Header Toolbar */}
              <div className="bg-slate-900 border-b border-slate-800 px-6 py-4 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <FileText className="w-5 h-5 text-emerald-400" />
                    {activeNote.title}
                  </h3>
                  <div className="flex items-center gap-3 text-xs text-slate-400 mt-1">
                    <span>Category: <strong className="text-slate-300">{activeNote.category}</strong></span>
                    <span>•</span>
                    <span>Ref: <strong className="text-slate-300">{activeNote.updatedAt}</strong></span>
                  </div>
                </div>

                {/* Copy Button */}
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-1.5 text-xs font-medium bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white px-3 py-2 rounded-lg border border-slate-700 transition-colors"
                  title="Copy full note content"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-slate-400" />
                      <span>Copy Raw</span>
                    </>
                  )}
                </button>
              </div>

              {/* Exact Formatting Content Container */}
              <div className="p-6 bg-slate-950/80 overflow-x-auto flex-1">
                <pre className="font-mono text-sm sm:text-base text-emerald-300/90 leading-relaxed whitespace-pre-wrap selection:bg-emerald-500 selection:text-slate-950">
                  {activeNote.content}
                </pre>
              </div>

              {/* Note Footer */}
              <div className="bg-slate-900/50 border-t border-slate-800/80 px-6 py-3 flex items-center justify-between text-xs text-slate-500">
                <span className="flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                  Preserved verbatim in custom ASCII tree view
                </span>
                <span>TpSecure Revision Vault</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Written;
