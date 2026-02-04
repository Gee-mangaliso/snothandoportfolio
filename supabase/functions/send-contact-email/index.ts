/// <reference types="https://esm.sh/@supabase/functions-js/src/edge-runtime.d.ts" />

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ContactRequest {
  email: string;
  message: string;
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    const { email, message }: ContactRequest = await req.json();

    if (!email || !message) {
      throw new Error("Email and message are required");
    }

    // Use AI to format a nice email notification
    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          {
            role: "system",
            content: "You are a helpful assistant that formats contact form submissions into a nice email format. Keep it professional and concise."
          },
          {
            role: "user",
            content: `Format this contact form submission as a nice email:\n\nFrom: ${email}\nMessage: ${message}`
          }
        ],
        max_tokens: 500,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to process message");
    }

    // Log the contact submission for now
    console.log("Contact form submission received:");
    console.log("From:", email);
    console.log("Message:", message);

    // Note: For actual email delivery to Gmail, you would need to integrate 
    // a service like Resend, SendGrid, or Gmail API. For now, we'll return success
    // and the frontend will fall back to mailto: as a backup.

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Message received! I'll get back to you soon." 
      }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return new Response(
      JSON.stringify({ 
        error: error instanceof Error ? error.message : "An error occurred",
      }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
