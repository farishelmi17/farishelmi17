import React from 'react';
import ReportHeader from './ReportHeader.jsx';
import ReportFooter from './ReportFooter.jsx';

const businessEntries = [
  {
    title: 'ALPHA RESOURCES SDN BHD',
    registration: '201901123456 (1309123-X)',
    status: 'EXISTING',
    nature: 'SUPPORT ACTIVITIES FOR OTHER MINING AND QUARRYING',
    incorporation: '05-12-2018',
    capital: '500,000.00',
    shareCapital: '500,000.00',
    shareAllotment: '95,000 (ORDINARY SHARES)',
    shareholding: '95.00',
  },
  {
    title: 'BETA DIGITAL SDN BHD',
    registration: '201701239876 (1223456-U)',
    status: 'EXISTING',
    nature: 'COMPUTER PROGRAMMING ACTIVITIES',
    incorporation: '05-12-2018',
    capital: '500,000.00',
    shareCapital: '500,000.00',
    shareAllotment: '49,000 (ORDINARY SHARES)',
    shareholding: '49.00',
  },
  {
    title: 'CTOS VENTURES SDN BHD',
    registration: '201401098712 (1089123-D)',
    status: 'EXISTING',
    nature: 'BUSINESS AND MANAGEMENT CONSULTANCY',
    incorporation: '05-12-2018',
    capital: '500,000.00',
    shareCapital: '500,000.00',
    shareAllotment: '45,000 (ORDINARY SHARES)',
    shareholding: '45.00',
  },
  {
    title: 'DELTA ENTERPRISE',
    registration: 'TR0167892-H',
    status: 'ACTIVE',
    nature: 'GENERAL WHOLESALE TRADE',
    incorporation: '15-03-2017',
    capital: '-',
    shareCapital: '-',
    shareAllotment: '-',
    shareholding: '-',
  },
];

const PageFive = () => (
  <div className="page">
    <ReportHeader pageNumber={5} />
    <div className="report-title">
      <span>At the request of: HANAFI KEREMBAT (790220105968)</span>
      <span>MyCTOS SCORE REPORT</span>
    </div>
    <div className="section-title">B1: Directorships and Business Interests / Pengarah dan Kepentingan Perniagaan</div>
    <div className="status-grid">
      {businessEntries.map((entry) => (
        <div className="status-card" key={entry.title}>
          <h4>{entry.title}</h4>
          <table>
            <tbody>
              <tr>
                <td>Registration No</td>
                <td>{entry.registration}</td>
              </tr>
              <tr>
                <td>Status</td>
                <td>{entry.status}</td>
              </tr>
              <tr>
                <td>Business Nature</td>
                <td>{entry.nature}</td>
              </tr>
              <tr>
                <td>Incorporation Date</td>
                <td>{entry.incorporation}</td>
              </tr>
              <tr>
                <td>Paid-up Capital</td>
                <td>{entry.capital}</td>
              </tr>
              <tr>
                <td>Share Capital</td>
                <td>{entry.shareCapital}</td>
              </tr>
              <tr>
                <td>Share Allotment</td>
                <td>{entry.shareAllotment}</td>
              </tr>
              <tr>
                <td>Shareholding</td>
                <td>{entry.shareholding}</td>
              </tr>
            </tbody>
          </table>
        </div>
      ))}
    </div>
    <ReportFooter />
  </div>
);

export default PageFive;
