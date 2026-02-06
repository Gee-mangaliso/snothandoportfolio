/// <reference types="https://esm.sh/@supabase/functions-js/src/edge-runtime.d.ts" />

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const PORTFOLIO_CONTEXT = `You are an AI assistant for Snothando Magaliso's portfolio website. You help visitors learn more about Snothando. Here's everything you need to know:

ABOUT SNOTHANDO:
- Full name: Snothando Magaliso
- Nickname: "Gee" (used by close friends)
- Role: Software Developer (Student)
- Gender: Female
- Location: South Africa
- Currently studying towards a Diploma in Applications Development at Cape Peninsula University of Technology (CPUT)

EDUCATION:

1. National Senior Certificate (Matric) - Zwelakhe Secondary School, Completed 2023
   Subjects studied:
   - English
   - isiXhosa
   - Life Orientation
   - Tourism
   - Economics
   - Business Studies
   - Accounting

2. Diploma in Applications Development - Cape Peninsula University of Technology (CPUT), In Progress
   Modules:
   - Applications Development Practice (ADP)
   - Applications Development Foundations
   - Projects
   - Multimedia
   - Python (Elective)

PROGRAMMING LANGUAGES LEARNED:
- Java
- JavaScript
- Python
- PHP

CURRENTLY LEARNING:
- Web frameworks

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

CONTACT:
- Email: mangalisosnothando@gmail.com
- Phone: 083 765 9532
- Open to: Internships, graduate opportunities, collaborations, freelance projects

CRITICAL INSTRUCTIONS:
- Be friendly and helpful
- Keep responses concise but informative
- Encourage visitors to reach out via email for opportunities
- NEVER assume or make up information you weren't given
- DO NOT disclose or guess age, birth year, or personal interests - you were not given this information
- If asked about information you don't have (like age, birth year, personal interests), respond: "I don't have that information. Please contact Snothando directly to get those details."
- Only provide the exact information listed above
- Always refer to Snothando with she/her pronouns
- Close friends call her "Gee"`;

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
