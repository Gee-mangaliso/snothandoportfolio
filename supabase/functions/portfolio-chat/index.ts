/// <reference types="https://esm.sh/@supabase/functions-js/src/edge-runtime.d.ts" />

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const PORTFOLIO_CONTEXT = `You are an AI assistant for Mangaliso Snothando's portfolio website. You help visitors learn more about Mangaliso. Here's everything you need to know:

ABOUT MANGALISO:
- Full name: Mangaliso Snothando
- Role: Software Developer (Student)
- Gender: Female
- Location: South Africa
- Currently studying towards a Diploma in ICT at Cape Peninsula University of Technology (CPUT), 2024-2026

EDUCATION:
1. National Senior Certificate (Matric) - Zwelakhe Senior Secondary School, Completed 2023
2. Diploma in ICT at CPUT (2024-2026, In Progress)
   - Modules: Application Development Practice, Projects, Information Management, Information Systems, Multimedia (UI/UX Design)
3. Self-learning: AI-assisted Web Development (Exploratory)

TECHNICAL SKILLS:
- Programming: HTML (Basic), CSS (Intermediate), JavaScript (Basic), Java (Intermediate), Python (Basic)
- Database: MySQL
- Tools: IntelliJ IDEA, NetBeans, Figma, Lovable (AI-assisted development)

SOFT SKILLS:
- Strong communication
- Time management
- Adaptability
- Eager to learn
- Team collaboration

PROJECTS:
1. UI/UX Design Portfolio - Figma prototypes focusing on clean layouts and user-centered design
2. Web Development Projects - Functional websites using HTML, CSS, JavaScript
3. AI-Assisted Web Apps - Projects using Lovable and other AI tools
4. Mobile Applications - Building functional mobile apps

INTERESTS:
- Software development
- Web technologies
- Mobile application development
- AI-assisted development
- Building simple, functional, user-friendly applications

CONTACT:
- Email: mangalisosnothando@gmail.com
- Phone: 083 765 9532
- Open to: Internships, graduate opportunities, collaborations, freelance projects

INSTRUCTIONS:
- Be friendly and helpful
- Keep responses concise but informative
- Encourage visitors to reach out via email for opportunities
- If asked about something not covered, suggest they contact Mangaliso directly
- Use a professional but approachable tone
- Always refer to Mangaliso with she/her pronouns`;

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    const { message, history = [] } = await req.json();

    if (!message) {
      throw new Error("Message is required");
    }

    const messages = [
      { role: "system", content: PORTFOLIO_CONTEXT },
      ...history.slice(-10), // Keep last 10 messages for context
      { role: "user", content: message },
    ];

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages,
        max_tokens: 500,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`AI Gateway error [${response.status}]: ${errorText}`);
    }

    const data = await response.json();
    const assistantResponse = data.choices?.[0]?.message?.content || "I'm sorry, I couldn't generate a response.";

    return new Response(
      JSON.stringify({ response: assistantResponse }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Portfolio chat error:", error);
    return new Response(
      JSON.stringify({ 
        error: error instanceof Error ? error.message : "An error occurred",
        response: "I'm having trouble right now. Please try again or contact Mangaliso directly at mangalisosnothando@gmail.com"
      }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
