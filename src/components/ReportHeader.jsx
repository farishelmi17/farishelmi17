import React from 'react';

const infoRows = [
  ['Report No', 'SARUS/2023/112724021'],
  ['Consumer ID', 'S/2023/112724021 (APP)'],
  ['Date', '05-10-2023'],
  ['Time', '20:17:01'],
  ['Score Report Serial No', 'BEC-90-5HFCQK-6SC8'],
];

const ReportHeader = ({ pageNumber }) => (
  <header className="report-header">
    <div className="header-left">
      <div className="ctos-logo" aria-label="CTOS logo">
        <span className="ctos-c">c</span>
        <span className="ctos-t">t</span>
        <span className="ctos-o">o</span>
        <span className="ctos-s">s</span>
      </div>
      <div className="tagline">Knowledge Creates Confidence</div>
    </div>
    <div className="header-right">
      <div className="page-number">Page {pageNumber} of 15</div>
      <div className="bold uppercase">Strictly Confidential</div>
      <table>
        <tbody>
          {infoRows.map(([label, value]) => (
            <tr key={label}>
              <td>{label}:</td>
              <td>{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </header>
);

export default ReportHeader;
