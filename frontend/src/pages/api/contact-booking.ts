import type { APIRoute } from "astro";
import { Resend } from "resend";

export const prerender = false;

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();

    const { name, email, phone, company, message, date, time } = body;

    // Validate required fields
    if (!name || !email || !phone || !date || !time) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "Please complete all required fields.",
        }),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
    }

    const { data, error } = await resend.emails.send({
      from: "QuickAppend <onboarding@resend.dev>",

      to: ["gsjagadeesh2024@gmail.com"],

      replyTo: email,

      subject: `New Discovery Call Booking - ${name}`,

      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="UTF-8">
          <title>New Discovery Call Booking</title>
        </head>

        <body style="
          margin:0;
          padding:0;
          background:#f4efe6;
          font-family:Arial,Helvetica,sans-serif;
          color:#1e2521;
        ">

          <div style="
            max-width:650px;
            margin:40px auto;
            background:#ffffff;
            border-radius:12px;
            overflow:hidden;
            border:1px solid #ddd;
          ">

            <div style="
              background:#154a29;
              color:#ffffff;
              padding:28px;
            ">
              <h1 style="
                margin:0;
                font-size:24px;
              ">
                New Discovery Call Booking
              </h1>
            </div>

            <div style="padding:30px;">

              <h2 style="margin-top:0;">
                Contact Details
              </h2>

              <p>
                <strong>Name:</strong>
                ${escapeHtml(name)}
              </p>

              <p>
                <strong>Email:</strong>
                ${escapeHtml(email)}
              </p>

              <p>
                <strong>Phone:</strong>
                ${escapeHtml(phone)}
              </p>

              <p>
                <strong>Company:</strong>
                ${escapeHtml(company || "Not provided")}
              </p>

              <hr style="
                border:0;
                border-top:1px solid #ddd;
                margin:25px 0;
              ">

              <h2>
                Booking Details
              </h2>

              <p>
                <strong>Date:</strong>
                ${escapeHtml(date)}
              </p>

              <p>
                <strong>Time:</strong>
                ${escapeHtml(time)} ET
              </p>

              <p>
                <strong>Meeting:</strong>
                30-minute Zoom discovery call
              </p>

              <hr style="
                border:0;
                border-top:1px solid #ddd;
                margin:25px 0;
              ">

              <h2>
                What they would like to cover
              </h2>

              <p>
                ${escapeHtml(message || "Not provided")}
              </p>

            </div>

          </div>

        </body>
        </html>
      `,
    });

    if (error) {
      console.error("Resend error:", error);

      return new Response(
        JSON.stringify({
          success: false,
          message: "Unable to send booking email.",
        }),
        {
          status: 500,
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
    }

    return new Response(
      JSON.stringify({
        success: true,
        id: data?.id,
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  } catch (error) {
    console.error("Contact booking API error:", error);

    return new Response(
      JSON.stringify({
        success: false,
        message: "Something went wrong while submitting the booking.",
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  }
};

/**
 * Basic HTML escaping.
 *
 * This prevents user-entered form data from being inserted
 * directly as executable HTML inside the email.
 */
function escapeHtml(value: string) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
