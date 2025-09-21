"use client";

import { useEffect, useState } from "react";

export default function DisclaimerModal() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Always show the disclaimer on load
    setShow(true);
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const accept = () => {
    setShow(false);
    document.body.style.overflow = "";
  };

  if (!show) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] bg-white text-navy-900 flex items-center justify-center px-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="disclaimer-title"
    >
      <div className="w-full max-w-2xl">
        <div className="rounded-2xl border border-navy-900/20 bg-white shadow-card p-6 sm:p-8">
          <h2 id="disclaimer-title" className="heading-3 mb-4">
            Website Disclaimer
          </h2>
          <p className="body-text mb-4">
            The information on this website is for general informational purposes only and does not
            constitute legal advice. No lawyer–client relationship is formed by accessing or using this site.
          </p>
          <ul className="body-text list-disc pl-6 space-y-2 mb-6">
            <li>
              Do not share confidential details through forms on this site; please contact us directly for
              sensitive matters.
            </li>
            <li>
              Any outcomes described are illustrative and depend on the facts of each case.
            </li>
            <li>
              By proceeding, you agree to our terms and acknowledge this disclaimer.
            </li>
          </ul>
          <div className="flex flex-col sm:flex-row gap-3 sm:justify-end">
            <button
              type="button"
              onClick={accept}
              className="w-full sm:w-auto bg-navy-900 text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:ring-offset-2"
            >
              I Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
