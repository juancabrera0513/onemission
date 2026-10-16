import emailjs from "@emailjs/browser";

export function sendInquiry(form) {
  return emailjs.sendForm(
    "service_vgn4uus",
    "template_f5cokgn",
    form,
    { publicKey: "yeWDJPhbNnW95gXML" },
  );
}
