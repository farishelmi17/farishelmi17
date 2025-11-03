import React from 'react';
import ReportHeader from './ReportHeader.jsx';
import ReportFooter from './ReportFooter.jsx';

const acknowledgements = [
  'I have been informed that my CTOS report may be used in processing this self-check request.',
  "I have been informed that CTOS's dispute resolution process was explained to me.",
  'I have been informed about CTOS data usage rights and records with a settlement remark.',
  'I have been informed of the Statutory Notification (below).',
  'I have been informed about the customer service channels of CTOS.',
];

const statutory = [
  'The procedure of how I may provide my comments and how they will be displayed in a section of my credit report was explained to me.',
];

const PageTwo = () => (
  <div className="page">
    <ReportHeader pageNumber={2} />
    <div className="report-title">
      <span>At the request of: HANAFI KEREMBAT (790220105968)</span>
      <span>MyCTOS SCORE REPORT</span>
    </div>
    <div className="certification-box">
      <div className="bold">To: The Manager, CTOS Report - Progress, CTOS</div>
      <p>
        I, the subject of this self-check report hereby confirm and acknowledge the following:-
      </p>
      <ol>
        {acknowledgements.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ol>
      <p className="mt-2">
        I also understand and acknowledge that CTOS will display my comments and how it will be displayed in a section of my
        credit report was explained to me.
      </p>
      <p className="bold mt-2">Statutory Notification (Malay translation):</p>
      <ol>
        {statutory.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ol>
    </div>
    <div className="notice mt-3">
      <div className="bold">CTOS Data Systems Sdn Bhd</div>
      <div>
        Unit 7-1, Level 7, Tower 4 @ Level Business Suite, Avenue 3, Bangsar South, No. 8, Jalan Kerinchi, 59200 Kuala Lumpur.
      </div>
      <div>Telefon: 03-2722 5555 &nbsp; Faks: 03-2722 5400 &nbsp; E-mel: sarus@ctos.com.my</div>
    </div>
    <ReportFooter />
  </div>
);

export default PageTwo;
