import DOMPurify from "dompurify";

export const sanitizeHTML = (html) => {
  const sanitizedHtml = DOMPurify.sanitize(html);
  return sanitizedHtml;
};
