import React from 'react';
import ReportHeader from './ReportHeader.jsx';
import ReportFooter from './ReportFooter.jsx';

const directorships = [
  {
    company: 'ALPHA RESOURCES SDN BHD',
    position: 'SHARE HOLDER',
    appointDate: '05-12-2018',
    resignDate: '-',
    profit: '87,567.00',
    capital: '500,000.00',
    status: 'EXISTING',
    shareholding: '95.00',
  },
  {
    company: 'BETA DIGITAL SDN BHD',
    position: 'SHARE HOLDER',
    appointDate: '05-12-2018',
    resignDate: '-',
    profit: '87,567.00',
    capital: '500,000.00',
    status: 'EXISTING',
    shareholding: '49.00',
  },
  {
    company: 'CTOS VENTURES SDN BHD',
    position: 'DIRECTOR',
    appointDate: '05-12-2018',
    resignDate: '-',
    profit: '87,567.00',
    capital: '500,000.00',
    status: 'EXISTING',
    shareholding: '45.00',
  },
  {
    company: 'DELTA ENTERPRISE',
    position: 'SOLE PROPRIETOR',
    appointDate: '15-03-2017',
    resignDate: '-',
    profit: '87,567.00',
    capital: '50,000.00',
    status: 'ACTIVE',
    shareholding: '-',
  },
];

const PageFour = () => (
  <div className="page">
    <ReportHeader pageNumber={4} />
    <div className="report-title">
      <span>At the request of: HANAFI KEREMBAT (790220105968)</span>
      <span>MyCTOS SCORE REPORT</span>
    </div>
    <div className="section-title">Top 5 Directorships &amp; Business Interests / 5 Pengarah &amp; Kepentingan Tertinggi</div>
    <div className="table-section">
      <table>
        <thead>
          <tr>
            <th>Company / Syarikat</th>
            <th>Position</th>
            <th>Appoint Date</th>
            <th>Resign Date</th>
            <th>Profit After Tax (RM)</th>
            <th>Capital (RM)</th>
            <th>Status</th>
            <th>Shareholding (Group)</th>
          </tr>
        </thead>
        <tbody>
          {directorships.map((item) => (
            <tr key={item.company}>
              <td>{item.company}</td>
              <td>{item.position}</td>
              <td>{item.appointDate}</td>
              <td>{item.resignDate}</td>
              <td className="text-right">{item.profit}</td>
              <td className="text-right">{item.capital}</td>
              <td>{item.status}</td>
              <td className="text-right">{item.shareholding}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <div className="footnote">
      Nota: Maklumat disediakan oleh Suruhanjaya Syarikat Malaysia (SSM) dan sumber sah lain. Sila hubungi SSM untuk maklumat
      tambahan atau pengesahan terkini.
    </div>
    <ReportFooter />
  </div>
);

export default PageFour;
