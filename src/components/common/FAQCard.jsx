import "../../styles/common/FAQCard.css";
import { useState } from "react";

export default function FAQCard({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="faq-card">
      <div
        className="faq-question"
        onClick={() => setOpen(!open)}
        role="button"
        tabIndex={0}
      >
        {question}
      </div>
      {open && (
        <div className="faq-answer">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
}
