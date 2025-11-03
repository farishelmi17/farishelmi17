import React from 'react';
import ReportHeader from './ReportHeader.jsx';
import ReportFooter from './ReportFooter.jsx';

const identityRows = [
  ['Name (Your Input)', 'HANAFI KEREMBAT'],
  ['NRIC (Your Input)', '790220105968'],
  ['Name (As in MyKad)', 'HANAFI KEREMBAT'],
  ['Other ID No', '-'],
  ['Old ID No', '-'],
  ['Date of Birth (Tarikh Lahir)', '21-02-1979'],
  ['Nationality', 'MALAYSIAN'],
  ['Gender', 'MALE'],
  ['Marital Status', 'MARRIED'],
  ['Race', 'MALAY'],
  ['Religion', 'ISLAM'],
  ['Address 1', '4, JALAN PEGAWAI'],
  ['Address 2', '05000 ALOR SETAR, KEDAH'],
];

const creditSummary = [
  {
    type: 'Banking Facilities',
    records: '4',
    outstanding: '87,567.00',
    status: 'EXISTING',
  },
  {
    type: 'Trade Reference',
    records: '1',
    outstanding: '3,000.00',
    status: 'EXISTING',
  },
  {
    type: 'Legal Cases',
    records: '0',
    outstanding: '0.00',
    status: 'NIL',
  },
  {
    type: 'Bankruptcy',
    records: '0',
    outstanding: '0.00',
    status: 'NIL',
  },
];

const scoreFactors = [
  'Akaun mempunyai rekod tunggakan lebih daripada 90 hari.',
  'Jumlah baki tertunggak adalah tinggi berbanding had kredit.',
  'Jumlah fasiliti kredit yang dibuka adalah tinggi.',
];

const PageThree = () => (
  <div className="page">
    <ReportHeader pageNumber={3} />
    <div className="report-title">
      <span>At the request of: HANAFI KEREMBAT (790220105968)</span>
      <span>MyCTOS SCORE REPORT</span>
    </div>
    <div className="section-title">A: Snapshot / Gambaran Ringkas</div>
    <div className="snapshot-grid">
      <div className="snapshot-card">
        <table>
          <tbody>
            {identityRows.map(([label, value]) => (
              <tr key={label}>
                <td>{label}</td>
                <td>{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="score-panel">
        <div className="bold text-center">CTOS Score</div>
        <div className="score-value">
          <div className="score-circle">391</div>
          <div className="score-details">
            <div className="bold">Your Score</div>
            <div>Score Date: 05-10-2023</div>
            <div>Score Band: Fair</div>
            <div>Probability of Default: Medium</div>
          </div>
        </div>
        <div className="score-range">
          <span>300</span>
          <span>850</span>
        </div>
        <div className="score-factor-list">
          <div className="bold">Apakah yang mempengaruhi skor saya?</div>
          <ul>
            {scoreFactors.map((factor, index) => (
              <li key={index}>{factor}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
    <div className="section-title mt-3">Credit Info at a Glance / Ringkasan Maklumat Kredit</div>
    <div className="table-section">
      <table>
        <thead>
          <tr>
            <th>Credit Type</th>
            <th>No. of Records</th>
            <th>Total Outstanding (RM)</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {creditSummary.map((row) => (
            <tr key={row.type}>
              <td>{row.type}</td>
              <td className="text-center">{row.records}</td>
              <td className="text-right">{row.outstanding}</td>
              <td>{row.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <div className="notice mt-3">
      <div className="bold">Risk Grade: C</div>
      <div>Interpretation: Borrower carries moderate risk with existing repayment concerns noted on record.</div>
    </div>
    <ReportFooter />
  </div>
);

export default PageThree;
