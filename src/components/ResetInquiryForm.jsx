import { useEffect, useRef, useState } from "react";
import { sendInquiry } from "../data/email";

export default function ResetInquiryForm() {
  const [status, setStatus] = useState("idle");
  const nameInput = useRef(null);
  const submitting = useRef(false);

  useEffect(() => {
    nameInput.current?.focus();
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();
    if (submitting.current) return;
    submitting.current = true;
    setStatus("sending");

    try {
      await sendInquiry(event.currentTarget);
      setStatus("success");
    } catch {
      setStatus("error");
    } finally {
      submitting.current = false;
    }
  }

  return (
    <>
      <h2 id="reset-dialog-title">Let’s talk RESET</h2>
      {status !== "success" && (
        <>
          <p>Send Stacey a message to learn what a metabolic reset could look like for you.</p>
          <form className="contact-form" onSubmit={handleSubmit} aria-busy={status === "sending"}>
            <input type="hidden" name="inquiry_type" value="Health coaching: RESET" />
            <label htmlFor="reset-name">
              Name
              <input ref={nameInput} id="reset-name" name="from_name" autoComplete="name" required />
            </label>
            <label htmlFor="reset-email">
              Email
              <input id="reset-email" name="reply_to" type="email" autoComplete="email" required />
            </label>
            <label htmlFor="reset-message">
              Message
              <textarea
                id="reset-message"
                name="message"
                rows="4"
                defaultValue="Hi Stacey! RESET. I’d love to learn what a metabolic reset could look like for me."
                required
              />
            </label>
            <button type="submit" className="btn btn-precall contact-submit" disabled={status === "sending"}>
              {status === "sending" ? "Sending..." : "Send RESET Message"}
            </button>
          </form>
        </>
      )}
      <div className="contact-form-feedback" role="status" aria-live="polite">
        {status === "success" && (
          <p className="contact-form-feedback--success">Thank you! Your RESET message has been sent to Stacey.</p>
        )}
        {status === "error" && (
          <p className="contact-form-feedback--error">We couldn’t send your message. Your details are still here. Please try again.</p>
        )}
      </div>
    </>
  );
}
